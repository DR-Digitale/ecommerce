import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";

// initialise the WooCommerceRestApi //
// NOTE: must execute these API calls server-side because env vars only available there and it is more secure
const api = new WooCommerceRestApi({
  url: process.env.WORDPRESS_URL,
  consumerKey: process.env.WOOCOMMERCE_KEY,
  consumerSecret: process.env.WOOCOMMERCE_SECRET,
  version: "wc/v3",
});
 
// fetch all products from WooCommerce //
export async function fetchWooCommerceProducts() {
  try {
    const response = await api.get("products");
    return response;
  } catch (error) {
    throw new Error(error);
  }
}

export async function getUsers() {
  try {
    const response = await api.get(`customers`);
    return response;
  } catch (error) {
    throw new Error(error);
  }
}

export async function getOrders() {
  try {
    const response = await api.get(`orders`);
    return response;
  } catch (error) {
    throw new Error(error);
  }
}

export async function onSaleProducts() {
  try {
    const response = await api.get("products/?on_sale=true");
    return response;
  } catch (error) {
    throw new Error(error);
  }
}

export async function bestProduct(category) {
  try {
    const response = await api.get(`products/?category=${category}`);
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
}


// create new WooCommerce order by passing in required data object //
export async function createWooCommerceOrder(data) {
  try {
    const response = await api.post("orders", data);
    return response;
  } catch (error) {
    throw new Error(error);
  }
}

export async function createWooCommerceCustomer(data) {
  try {
    const response = await api.post("customers", data);
    return response;
  } catch (error) {
    throw new Error(error);
  }
}

export async function updateWooCommerceCustomer(data, id) {
  try {
    const response = await api.put("customers/" + id, data);
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
}

export async function productBySlug(productSlug) {
  try {
    const response = await api.get(`products/?slug=${productSlug}`);
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
}

export async function relatedProducts(productIds) {
  try {
    const response = await api.get(`products/?include=${productIds}`);
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
}

export async function productVariation(productId) {
  try {
    const response = await api.get(`products/${productId}/variations`);
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
}

export async function productAttributes(attributesId) {
  try {
    const response = await api.get(`products/attributes/${attributesId}/terms`);
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
}

export async function getCoupons() {
  try {
    const response = await api.get(`coupons`);
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
}

export async function getShippingCost(zoneId, methodId ) {
  try {
    const response = await api.get(`shipping/zones/${zoneId}/methods/${methodId}`);
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
}

export async function retrieveProductById(productId) {
  try {
    const response = await api.get(`products/${productId}`);
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
}

export async function createProductReview(data) {
  try {
    const response = await api.post("products/reviews", data);
    return response;
  } catch (error) {
    throw new Error(error);
  }
}