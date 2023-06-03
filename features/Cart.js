import top from "../assets/texture/top-page.svg";
import logo from "../assets/img/logo-slipper.svg";
import cartBlob from "../assets/blobs/cartBlob.svg";
import { Button, CTA, CartHeader } from "../components";
import { CartItem, CartSummary } from "../containers";
import { useRouter } from "next/router";
import Icon from "../components/Icon";
import emptyCart from "../assets/img/emptyCart.svg";
import Reassurance from "./Reassurance";
import { useEffect, useState } from "react";
import Empty from "../components/Empty";
import { CartContext, FooterContext } from "../utils/useProvider";
import React, { useContext } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Resume from "../components/Resume";

const Cart = ({ coupons, shipping, ...props}) => {
  const router = useRouter();
  const footerType = useContext(FooterContext);
  const [ cart, setCart ] = useContext(CartContext);
  const { cartItems, totalPrice, totalQty } = cart || {};
  const [ isClearCartProcessing, setClearCartProcessing ] = useState( false );
  const [couponName, setCouponName] = useState("");
  const [couponAmount, setCouponAmount] = useState("");
  const [couponDiscountType, setCouponDiscountType] = useState("");
  const [couponError, setCouponError] = useState(false);

  // const handleClearCart = async ( event ) => {
	// 	event.stopPropagation();
		
	// 	if (isClearCartProcessing) {
	// 		return;
	// 	}
		
	// 	await clearCart( setCart, setClearCartProcessing );

	// };

  useEffect(() => {
    if (cart) {
      footerType.setFooterType("");
    } else {
      footerType.setFooterType("empty");
    }
  });

  const getCoupon = () => {
    if (coupons.find((item) => item.code === couponName)) {
      coupons
        .filter((item) => item.code === couponName)
        .forEach((coupon) => {
          setCouponAmount(coupon.amount);
          setCouponDiscountType(coupon.discount_type);
          setCouponError(false);
        });
    } else {
      setCouponAmount("");
      setCouponDiscountType("");
      setCouponError(true);
    }
  };

  const createCart = () => {
    return (
      <div>
        <CartHeader top={top} blob={cartBlob} logo={logo} quantity={totalQty} />
        <div className="w-[84%] mx-auto pb-12">
          <Resume 
            tag={"Alors, vous avez trouvé chaussons à vos pieds ?"}
            h1={"Ajoutés au panier"}
          />
        </div>
        <AnimatePresence mode="sync">
          <div className="border border-grey-lighter rounded-[16px] w-[84%] mx-auto cart-shadow mb-8">
            {cartItems.length && cartItems.map((item) => {
              return (
                <CartItem
                  key={ item.product_id }
                  item={ item }
                  products={ cartItems }
                  setCart={setCart}
                />
              );
            })}
          </div>
        </AnimatePresence>
        <div className="w-[84%] mx-auto pb-14">
          <input
            className="border-none rounded-l-[64px] bg-background text-grey-darker py-4 p-6 w-full max-w-[359px]"
            type="text"
            name="coupon"
            id="coupon"
            placeholder="Code Promo"
            onChange={(e) => setCouponName(e.target.value)}
          />
          <Button
            type="button"
            onClickFunction={getCoupon}
            className="bg-halftone px-8 py-4 rounded-r-[64px] card-button-hover"
          >
            Appliquer
          </Button>
          {couponError && (
            <p className="text-warning pl-6">Code promo invalide</p>
          )}
        </div>
        <CartSummary
          code={couponName}
          subtotal={totalPrice}
          amount={couponAmount}
          discountType={couponDiscountType}
          shipping={shipping.settings.cost.value}
        />
        <div className="w-[84%] mx-auto pt-8">
          <CTA
            className="button-accent ml-auto flex items-center gap-4"
            onClickFunction={() => router.push("/commander")}
          >
            Commander <Icon icon="arrowRight" size={24} />
          </CTA>
        </div>
        <Reassurance />
      </div>
    );
  };

  return (
    <>
      {!cart ? (
        <div className="">
          <CartHeader top={top} blob={cartBlob} logo={logo} quantity={totalQty ? totalQty : 0} />
          <Empty
            image={emptyCart}
            textLine1="Aucun chausson"
            textLine2="Votre panier est vide"
            labelButton="Découvrez toute la collection"
            iconButtonRight="arrowRight"
          />
        </div>
      ) : (
        createCart()
      )}
    </>
  );
};

export default Cart;
