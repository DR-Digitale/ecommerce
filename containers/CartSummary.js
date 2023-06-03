import { useContext } from "react";
import CartSummaryLine from "../components/cart/CartSummaryLine";
import { CartSummaryContext } from "../utils/useProvider";

const CartSummary = ({ amount, discountType, code, shipping, subtotal }) => {
  const cartSummary = useContext(CartSummaryContext);

  // function calculateCartSubTotal(lineItems) {
  //   if (!total) return "0.00 €";

  //   const totalsArray = lineItems.map((lineItem) => {
  //     return parseFloat(lineItem.price) * 100 * lineItem.quantity;
  //   });
  //   const total = totalsArray.reduce((prev, next) => prev + next);
  //   const subTotal = `${(total / 100).toFixed(2)} €`;
  //   return subTotal;
  // }

  function calculateCartTotal(subtotal) {
    if (!subtotal) return "0.00 €";

    // const totalsArray = lineItems.map((lineItem) => {
    //   return parseFloat(lineItem.price) * 100 * lineItem.quantity;
    // });
    // const total = totalsArray.reduce((prev, next) => prev + next);
    const fixedPromo = parseFloat(amount) * 100;
    const floatShipping = parseFloat(shipping) * 100;
    const percentPromo = 1 - parseFloat(amount) / 100;

    if (discountType && discountType === "fixed_cart") {
      const fixedPromoTotal = `${(
        (subtotal - fixedPromo + floatShipping) /
        100
      ).toFixed(2)} €`;
      return fixedPromoTotal;
    } else if (discountType && discountType === "percent") {
      const percentPromoTotal = `${(
        (subtotal * percentPromo + floatShipping) /
        100
      ).toFixed(2)} €`;
      return percentPromoTotal;
    } else {
      const totalCart = `${((total + floatShipping) / 100).toFixed(2)} €`;
      return totalCart;
    }
  }

  return (
    <div>
      <CartSummaryLine
        code={code}
        promotion={amount}
        shipping={shipping}
        title="Sous-total"
        subTotal={subtotal}
        price={calculateCartTotal(subtotal)}
        discountType={discountType}
      />
    </div>
  );
};

export default CartSummary;
