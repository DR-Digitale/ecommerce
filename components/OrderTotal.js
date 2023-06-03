import React, { useContext } from "react";
import Icon from "./Icon";
import Button from "./Button";
import { CartSummaryContext, OrderStepContext } from "../utils/useProvider";
import { useAppSelector } from "../store/hooks";
import Link from "next/link";

const OrderTotal = ({ currentStep }) => {
  const { currentStep } = props;
  const step = useContext(OrderStepContext);
  const cartSummary = useContext(CartSummaryContext);

  return (
    <div className="w-[316px] ">
      <div className="border border-halftone rounded-[16px] shadow-[0px_0px_24px_rgba(0,0,0,0.04)] p-8 mb-12">
        <div className="flex items-center gap-4 pb-8">
          <Icon icon="sandals" size={24} /> 3 Chaussons
        </div>
        <div className="flex items-center justify-between pb-2 text-grey-darker">
          <span>Sous-total</span> 56,00 €
        </div>
        <div className="flex items-center justify-between pb-2 text-grey-darker">
          <span>Remise (Bienvenue)</span> -4,50 €
        </div>
        <div className="flex items-center justify-between pb-2 text-grey-darker">
          <span>Frais de port</span> 4,50 €
        </div>
        <div className="flex items-center justify-between font-bold border-t border-grey-lighter pt-4">
          <span className="font-bold">Total</span> 56,00 €
        </div>
      </div>
      {currentStep === 1 && (
        <Button
          className="button-accent w-full"
          onClickFunction={() => step.setOrderStep(2)}
        >
          Livraison <Icon icon="arrowRight" size={24} />
        </Button>
      )}
      {currentStep === 2 && (
        <Button
          className="button-accent w-full"
          onClickFunction={() => step.setOrderStep(3)}
        >
          Facturation <Icon icon="arrowRight" size={24} />
        </Button>
      )}
      {currentStep === 3 && (
        <Button
          className="button-accent w-full"
          onClickFunction={() => step.setOrderStep(4)}
        >
          Expedition <Icon icon="arrowRight" size={24} />
        </Button>
      )}
      {currentStep === 4 && (
        <Button
          className="button-accent w-full"
          onClickFunction={() => step.setOrderStep(5)}
        >
          Paiement <Icon icon="arrowRight" size={24} />
        </Button>
      )}
      {currentStep === 5 && (
        <>
          <label className="flex items-start gap-2 pb-12" htmlFor="legal">
            <input
              className="text-accent focus:ring-accent"
              type="checkbox"
              name="legal"
              id="legal"
            />
            <span className="-mt-1 text-grey-darker">
              En passant commande, vous acceptez nos conditions générales de
              vente et vous acceptez que certaines de vos données, qui seront
              utilisées pour améliorer le processus d&apos;achat, soient
              enregistrées par Le petit monde des libellules.
            </span>
          </label>
          <Link href={"/paiement"}>
            <a className="button-accent w-full">
              Payer 56,00 € <Icon icon="arrowRight" size={24} />
            </a>
          </Link>
        </>
      )}
    </div>
  );
};

export default OrderTotal;
