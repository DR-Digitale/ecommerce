import {
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
  useStripe,
  useElements,
  LinkAuthenticationElement,
  PaymentElement,
} from "@stripe/react-stripe-js";
import { Button, CTA, Modal } from "../components";
import React, { Fragment, useEffect, useState } from "react";
import {
  StripeCardCvcElementChangeEvent,
  StripeCardExpiryElementChangeEvent,
  StripeCardNumberElementChangeEvent,
} from "@stripe/stripe-js";
import { createOrderApi, createPaymentIntentApi } from "../utils/customApi";
import {
  checkStripeElementsValid,
  confirmCardPayment,
} from "../utils/stripeApi";
import { useAppDispatch } from "../store/hooks";
import { resetCartState } from "../store/slices/cartSlice";
import { useRouter } from "next/router";
import Icon from "../components/Icon";

const CardPayment = ({...props}) => {
  const stripe = useStripe();
  const elements = useElements();
  const dispatch = useAppDispatch();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!stripe) {
      return;
    }
  });

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    // guard clause to exit if nothing in cart
    if (!props.lineItems.length) return;

    // guard clause to exit if no stripe or elements
    if (!stripe || !elements) return;

    // set loading indicator
    setIsLoading(true);

    // check if Stripe elements are valid
    if (!checkStripeElementsValid()) {
      setError("Vérifiez les informations de votre carte s'il vous plaît");
      return;
    }

    setError("");

    // create Stripe payment intent and get client secret in return
    let paymentIntent = await createPaymentIntentApi(props.lineItems).catch(
      (error) => {
        setError(error.message);
        setIsLoading(false);
        return;
      }
    );
    console.log("--CREATED STRIPE PAYMENT INTENT: ", paymentIntent);

    // create WooCommerce order and link it with Stripe payment intent
    // NOTE: must create server-side because of env vars
    let wooCommerceOrder = await createOrderApi(
      props.lineItems,
      paymentIntent.paymentIntentId
    ).catch((error) => {
      setError(error.message);
      setIsLoading(false);
      return;
    });
    console.log("--CREATED WOOCOMMERCE ORDER: ", wooCommerceOrder);

    // confirm card payment using client secret
    let stripeResult = await confirmCardPayment(
      elements,
      stripe,
      paymentIntent.clientSecret
    ).catch((error) => {
      setError(error.message);
      setIsLoading(false);
      return;
    });
    console.log("--STRIPE CONFIRM CARD: ", stripeResult);

    // TODO use wooCommerceOrder.id to update order status to 'processing' after card payment succeeded - this step would be achieved by webhook when website served over https

    setIsLoading(false);

    // TODO display success modal and clear Redux and re-direct when closing modal

    // clear Redux cart
    dispatch(resetCartState());

    // re-direct to menu
    router.push("/");
  };

  // Enables realtime error message as user inputs card details
  function handleValidation(e) {
    if (e.error) {
      setError(e.error.message);
    } else {
      setError("");
    }
  }

  return (
    <>
      <div className="flex w-[70.3125vw] rounded-2xl">
        <div className="w-1/2 gradient-girly p-12 flex flex-col justify-between text-white">
          <div className="border border-white p-4 rounded-lg flex items-center justify-between">
            <div>
              <p>Compte créditeur</p>
              <p>Le petit monde des libellules</p>
            </div>
            <span className="text-2xl">56,00 €</span>
          </div>
          <div>
            <div className="flex items-center justify-between pb-4 border-b border-white">
              <div>
                <p>Code de paiement</p>
                <p>3704608686876861</p>
              </div>
              <div>
                <p>Expiration de session</p>
                <p>08/07/22 - 15:00</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Icon icon="secure" size={24} /> Toutes les transactions sont
              sécurisées et cryptées.
            </div>
          </div>
        </div>
        <div className="w-1/2 bg-white p-12">
          <div className="flex items-center justify-between">
            <h5>Procéder au paiement</h5>
            <Button>
              <Icon icon="cancel" size={24} />
            </Button>
          </div>
          <form id="card-payment-form" onClick={handleFormSubmit}>
            <CardNumberElement
              id="card-number-element"
              className="card-element"
              options={CARD_NUMBER_OPTIONS}
              onChange={handleValidation}
            />
            <div>
              <CardExpiryElement
                id="card-expiry-element"
                className="card-element"
                options={CARD_ELEMENT_OPTIONS}
                onChange={handleValidation}
              />
              <CardCvcElement
                id="card-cvc-element"
                className="card-element"
                options={CARD_ELEMENT_OPTIONS}
                onChange={handleValidation}
              />
            </div>
            <button type="submit" disabled={!props.lineItems.length}>
              Payer 56,00 €
            </button>
            <div>{error}</div>
          </form>
        </div>
      </div>
      {isLoading && <Modal message="Processing card..." />}
    </>
  );
};

export default CardPayment;

// Stripe has a defined style object that you can use to style Elements
const CARD_ELEMENT_OPTIONS = {
  style: {
    base: {
      iconColor: "black",
      color: "black",
      fontSize: "18px",
      fontFamily: "Raleway, sans-serif",
      fontSmoothing: "antialiased",
      "::placeholder": {
        color: "black",
      },
    },
    invalid: {
      iconColor: "#fa004f",
      color: "#fa004f",
    },
  },
};

// This is almost the same as above except it takes the additional showIcon field
const CARD_NUMBER_OPTIONS = {
  showIcon: true,
  style: {
    base: {
      iconColor: "black",
      color: "black",
      fontSize: "18px",
      fontFamily: "Raleway, sans-serif",
      fontSmoothing: "antialiased",
      "::placeholder": {
        color: "black",
      },
    },
    invalid: {
      iconColor: "#fa004f",
      color: "#fa004f",
    },
  },
};
