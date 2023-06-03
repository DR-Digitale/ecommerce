const CartSummaryLine = ({ title, price, code, promotion, shipping, subTotal, discountType }) => {
  const percentDiscountAmount =
    (parseFloat(promotion) * parseFloat(subTotal)) / 100;
  return (
    <div className="w-[84%] mx-auto">
      <div className="flex justify-between items-center text-grey-darker">
        <span>{title}</span>
        <span>{subTotal}</span>
      </div>
      {promotion && (
        <div className="flex justify-between items-center text-grey-darker">
          <span>Remise {code && "(" + code + ")"}</span>
          <span>
            {discountType === "percent"
              ? percentDiscountAmount.toFixed(2)
              : promotion}{" "}
            €
          </span>
        </div>
      )}
      <div className="flex justify-between items-center text-grey-darker pb-2 border-b border-grey-lighter">
        <span>Frais de port</span>
        <span>{shipping ? shipping : "Gratuit"} €</span>
      </div>
      <div className="flex justify-between items-center text-surface pt-2">
        <span>Total</span>
        <span>{price}</span>
      </div>
    </div>
  );
};

export default CartSummaryLine;
