import { createWooCommerceOrder } from "../../utils/woocommerceApi";
import { Order } from "../../utils/types/wooCommerceTypes";

export default async function handler(req,res) {
  const data = req.body;

  try {
    const response = await createWooCommerceOrder(data);
    res.json({ order: response.data });
  } catch (error) {
    throw new Error(error);
  }
}
