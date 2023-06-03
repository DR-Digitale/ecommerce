import React from "react";

const CartQty = ({...props}) => {
  return (
    <div className="flex items-center">
      <button
        className="flex items-center justify-center w-14 h-14 rounded-l-[64px] bg-surface text-white text-lg quantity-left-hover"
        onClick={props.decrementFunction}
      >
        -
      </button>
      <p className="flex items-center justify-center w-20 h-14 border border-surface font-semibold">
        {props.quantity}
      </p>
      <button
        className="flex items-center justify-center w-14 h-14 rounded-r-[64px] bg-surface text-white text-lg quantity-right-hover"
        onClick={props.incrementFunction}
      >
        +
      </button>
    </div>
  );
};

export default CartQty;
