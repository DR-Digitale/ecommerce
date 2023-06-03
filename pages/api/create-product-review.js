import { createProductReview} from "../../utils/woocommerceApi";

export default async function handler(req,res) {
  const data = req.body;

  try {
    const response = await createProductReview(data);
    res.json({ customer: response.data });
  } catch (error) {
    throw new Error(error);
  }
}
