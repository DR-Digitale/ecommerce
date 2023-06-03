import React from "react";

const Heading = ({...props}) => {
  return (
    <div
      className={props.className}
      color={props?.color}
    >
      {props.children}
    </div>
  );
};

export default Heading;
