const axios = require("axios").default;

// creates a re-usable instance of axios with predefined configuration //
const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_URL,
  timeout: 10000
});

//----------- GENERAL NOTE --------------//
// These custom endpoints are acting as middlemen to the WooCommerce API.  There are two reasons why I'm doing it like this.
// 1. We need to pass consumerKey and consumerSecret to the WooCommerceRestApi client. I am serving these up as environment variables which are only available server-side.
// 2. It is more secure to run these functions server-side
//---------------------------------------//

// hits the create-order API endpoint to create a new WooCommerce order //
export async function createOrderApi(
  lineItems,
  paymentIntentId
) {
  // create order data
  const data = {
    payment_method: "stripe",
    payment_method_title: "Card",
    set_paid: false,
    line_items: lineItems,
    meta_data: [  
      {
        key: "_stripe_intent_id",
        value: paymentIntentId,
      },
    ],
  };

  try {
    const response = await instance.post("create-order", data);
    return response.data;
  } catch (err) {
    throw new Error(err);
  }
}

// hits the create-payment-intent API endpoint to create a new Stripe payment intent and return client secret //
export async function createPaymentIntentApi(data) {
  try {
    const response = await instance.post("create-payment-intent", data);
    return response.data;
  } catch (err) {
    throw new Error(err);
  }
}

export async function updateCustomer(data, id) {
  try {
    const response = await instance.put("api/update-customer/" + id, data);
    return response.data;
  } catch (err) {
    throw new Error(err);
  }
}
