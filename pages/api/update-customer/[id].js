
import { updateWooCommerceCustomer } from "../../../utils/woocommerceApi";


export default async function handler(req,res) {
  const data = req.body;
  const {id} = req.query
  
  try {
    const response = await updateWooCommerceCustomer(data, id);
    res.json({ customer: response});
  } catch (error) {
    console.error(error);
  }
}
