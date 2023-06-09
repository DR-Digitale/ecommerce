
import { LineItem } from "../../utils/types/wooCommerceTypes";
import { retrieveProductById } from "../../utils/woocommerceApi";
import { PaymentIntent } from "../../utils/types/stripeTypes";
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

// retrieve product price from WooCommerce based on ID and multiply by quantity
const getProductTotal = async (lineItem) => {
  let product = await retrieveProductById(
    lineItem.product_id.toString()
  );
  let productTotal = lineItem.quantity * (parseFloat(product.price) * 100);
  return productTotal;
};

// map through lineItems and get the total for each lineItem and return sum of totals
const calculateTotalAmount = async (lineItems) => {
  const total = await Promise.all(
    lineItems.map((lineItem) => {
      return getProductTotal(lineItem);
    })
  ).then((res) => {
    return res.reduce((curr, next) => curr + next);
  });
  return total;
};

export default async function handler(req,res) {
  const data = req.body;

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: await calculateTotalAmount(data),
      currency: "gbp",
    });
    res.json({
      paymentIntentId: paymentIntent.id,
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    throw new Error(error);
  }
}
