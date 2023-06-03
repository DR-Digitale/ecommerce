import React from "react";
import { motion } from "framer-motion";

const Button = ({...props}) => {
  return (
    <motion.button
      whileTap={{ scale: 0.97 }}
      className={props.className}
      onClick={props.onClickFunction}
      type={props.type && props.type}
      aria-label={props.ariaLabel}
    >
      {props.children}
    </motion.button>
  );
};

export default Button;
