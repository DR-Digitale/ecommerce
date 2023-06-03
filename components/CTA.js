import React from "react";

const CTA = ({...props}) => {
  return (
    <button
      className={props.className}
      onClick={props.onClickFunction}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default CTA;
