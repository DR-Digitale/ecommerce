import React, { useState } from "react";
import Button from "./Button";
import Icon from "./Icon";
import { AnimatePresence, motion } from "framer-motion";


const Accordion = ({title, summary, children, index, expanded, setExpanded}) => {
  const isOpen = index === expanded;
  return (
    <div className="">
      <h4 className="pb-8">{title}</h4>
      <div className=" bg-grey-lightest p-8 rounded-[48px]">
        <div
          className={`flex items-center justify-between transition-all duration-[0.8s] ease-linear ${
            isOpen ? "pb-14" : ""
          }`}
        >
          <Button
            className="w-full text-left"
            onClickFunction={() => setExpanded(isOpen ? false : index)}
          >
            {summary}
          </Button>
          <Button onClickFunction={() => setExpanded(isOpen ? false : index)}>
            <Icon
              className={`transition-all duration-300 ease-in-out ${
                isOpen ? "" : "rotate-180"
              }`}
              icon="navArrowUp"
              size={24}
            />
          </Button>
        </div>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              key="content"
              initial="collapsed"
              animate="open"
              exit="collapsed"
              variants={{
                open: { opacity: 1, height: "auto" },
                collapsed: { opacity: 0, height: 0 },
              }}
              transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
            >
              <motion.div
                variants={{
                  collapsed: {
                    opacity: 0,
                    y: -10,
                    transition: {
                      duration: 0.2,
                      ease: [0.04, 0.62, 0.23, 0.98],
                    },
                  },
                  open: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 1,
                      delay: 0.4,
                      ease: [0.04, 0.62, 0.23, 0.98],
                    },
                  },
                }}
              >
                {children}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Accordion;
