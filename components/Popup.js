import { motion, AnimatePresence } from "framer-motion";
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

const backdrop = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

const modal = {
  hidden: {
    y: "-100%",
    opacity: 0,
  },
  visible: {
    y: "-50%",
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
      mass: 1,
      delay: 0.5,
    },
  },
};

const Popup = ({ show, children, onClose, className }) => {
  const [isBrowser, setIsBrowser] = useState(false);
  const [modalRoot, setModalRoot] = useState();
  
  useEffect(() => {
    setIsBrowser(true);
    setModalRoot(document.getElementById("modal-root"))
  }, []);
  useEffect(() => {
    let body = document.body;
    function noScroll() {
      body.classList.add("overflow-hidden");
    }
    function scroll() {
      body.classList.remove("overflow-hidden");
    }
    if (show) {
      noScroll();
    } else {
      scroll();
    }
  }, [show]);
  
  
  const modalContent = (
    <AnimatePresence mode="wait" onExitComplete={onClose} initial={false}>
      {show ? (
        <>
          <motion.div
            key="overlay"
            className={`fixed w-screen h-screen inset-0 bg-black bg-opacity-50 z-[999] ${
              show ? "block" : "hidden"
            }`}
            variants={backdrop}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <motion.div
              layoutId="modal-ccontainer"
              variants={modal}
              className={`relative top-1/2 mx-auto z-[9999] ${className}`}
            >
              {children}
            </motion.div>
          </motion.div>
        </>
      ) : null}
    </AnimatePresence>
  );

  if (isBrowser) {
    return ReactDOM.createPortal(modalContent, modalRoot);
  } else {
    return null;
  }
};

export default Popup;
