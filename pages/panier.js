import { NavLayout } from "../layout";
import { Cart } from "../features";
import { getCoupons, getShippingCost } from "../utils/woocommerceApi";


export default function CartPage({ coupons, shipping }) {

  return (
    <NavLayout title="Cart" description="Cart">
      <Cart
        coupons={coupons}
        shipping={shipping}
      />
    </NavLayout>
  );
}

export const getStaticProps = async () => {
  const coupons = await getCoupons().catch((error) => console.error(error));

  const shipping = await getShippingCost("2", "13").catch((error) =>
    console.error(error)
  );

  return {
    props: {
      coupons: coupons,
      shipping: shipping,
    },
    // revalidate: 60 // regenerate page with new data fetch after 60 seconds
  };
};
