import Link from "next/link";
import React from "react";
import Icon from "./Icon";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";

const CallToAction = ({ title, teaser, text, icon, url, buttonLabel, className, ...props }) => {
  const variants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: { duration: 0.7 },
    },
    exit: { opacity: 0 },
  };
  return (
    <AnimatePresence initial={false} mode="wait">
      <motion.div
        className={`cta max-w-[680px] px-6 transition-all duration-300 ease-out ${
          className && className
        }`}
      >
        <p className="text-2xl text-peps-major pb-2">{teaser}</p>
        <motion.h2
          key={`title-${props.index}`}
          variants={variants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="text-4xl spacing"
        >
          {title}
        </motion.h2>
        <motion.p
          key={`text-${props.index}`}
          variants={variants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="spacing"
        >
          {text}
        </motion.p>
        <Link href={url}>
          <motion.a className="button-accent inline-flex items-center gap-4 cursor-pointer">
            <Icon icon={icon} size={20} />
            {buttonLabel}
          </motion.a>
        </Link>
      </motion.div>
    </AnimatePresence>
  );
};

export default CallToAction;
