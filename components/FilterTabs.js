import React, { useEffect, useState } from "react";
import Button from "./Button";
import Icon from "./Icon";
import { useContext, createRef } from "react";
import { ReRenderContext, FilterContext } from "../utils/useProvider";
import { motion, Variants } from "framer-motion";
import useClickOutiside from "../utils/useClickOutside";

const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
};

const FilterTabs = ({ moreFilter, ...props }) => {
  const filters = useContext(FilterContext);
  const [active, setActive] = useState("");
  const [open, setOpen] = useState(false);
  const [nbFilter, setNbFilter] = useState();
  const width = useContext(ReRenderContext);
  const ref = createRef();

  useEffect(() => {
    if (
      filters &&
      filters.filters &&
      filters.filters.categories &&
      filters.filters.attributes
    ) {
      const nb =
        filters.filters.categories.length + filters.filters.attributes.length;
      setNbFilter(nb);
    }

    if (filters.filters.categories.length === 0) {
      setActive("");
    }
  }, [filters.filters.categories, filters.filters.attributes]);

  function updateCategories(categories, newValue) {
    const valuesToCheck = ["mixte", "garcon", "fille"];
    const filteredCategories = categories.filter(
      (category) => !valuesToCheck.includes(category)
    );
    filteredCategories.push(newValue);
    filters.setFilters({ ...filters.filters, categories: filteredCategories });
  }

  useClickOutiside(ref, () => {
    setOpen(false);
  });

  return (
    <>
      {width >= 1080 ? (
        <div className="fixed top-[3.125vw] left-[8.33vw] flex gap-14 items-center bg-white rounded-[16px] px-14 py-4 shadow-md z-20">
          <Button
            className={`tabButton flex items-center gap-2 ${
              active === "mixte" ? "active text-foreground" : "link-hover"
            }`}
            onClickFunction={() => {
              updateCategories(filters.filters.categories, "mixte");
              setActive("mixte");
            }}
          >
            {active === "mixte" && <Icon icon="doubleCheck" size={22} />}
            Mixte
          </Button>
          <Button
            className={`tabButton flex items-center gap-2 ${
              active === "fille" ? "active text-foreground" : "link-hover"
            }`}
            onClickFunction={() => {
              updateCategories(filters.filters.categories, "fille");
              setActive("fille");
            }}
          >
            {active === "fille" && <Icon icon="doubleCheck" size={22} />} Fille
          </Button>
          <Button
            className={`tabButton flex items-center gap-2 ${
              active === "garcon" ? "active text-foreground" : "link-hover"
            }`}
            onClickFunction={() => {
              updateCategories(filters.filters.categories, "garcon");
              setActive("garcon");
            }}
          >
            {active === "garcon" && <Icon icon="doubleCheck" size={22} />}{" "}
            Garçon
          </Button>
          <div className="more flex items-center gap-4">
            <Button
              className="link-hover group flex gap-4"
              onClickFunction={moreFilter}
            >
              <Icon className="group-hover:text-accent" icon="more" size={22} />{" "}
              Plus de critères
            </Button>
            <span className="w-10 h-9 bg-halftone text-foreground rounded-full flex items-center justify-center">
              {nbFilter}
            </span>
            <Button
              className="hover:text-accent"
              onClickFunction={() => {
                filters.setFilters({ categories: [], attributes: [] });
                setActive("");
              }}
            >
              <Icon icon="erase" size={22} />
            </Button>
          </div>
        </div>
      ) : (
        <motion.div
          ref={ref}
          initial={false}
          animate={open ? "open" : "closed"}
          className="fixed w-80 top-[3.125vw] left-[8.33vw] flex items-center gap-4 bg-white rounded-[16px] px-6 py-4 shadow-md z-20"
        >
          <Button
            className="flex justify-between items-center w-full"
            onClickFunction={() => setOpen(!open)}
          >
            <span className="flex items-center gap-2 text-foreground">
              <Icon icon="doubleCheck" size={24} /> {active}
            </span>{" "}
            <motion.span
              variants={{
                open: { rotate: 180 },
                closed: { rotate: 0 },
              }}
              transition={{ duration: 0.2 }}
              style={{ originY: 0.55 }}
              className={open ? "text-foreground" : ""}
            >
              <Icon icon="navArrowDown" size={24} />
            </motion.span>
          </Button>
          <Button onClickFunction={props.moreFilter}>
            <Icon icon="more" size={24} />
          </Button>
          <motion.ul
            variants={{
              open: {
                clipPath: "inset(0% 0% 0% 0% round 10px)",
                transition: {
                  type: "spring",
                  bounce: 0,
                  duration: 0.5,
                  delayChildren: 0.3,
                  staggerChildren: 0.05,
                },
              },
              closed: {
                clipPath: "inset(10% 50% 90% 50% round 10px)",
                transition: {
                  type: "spring",
                  bounce: 0,
                  duration: 0.3,
                },
              },
            }}
            className={`absolute top-[60px] left-0 bg-white w-full rounded-2xl px-14 py-4 shadow-md flex flex-col gap-4 ${
              open ? "block" : "hidden"
            }`}
          >
            <motion.li variants={itemVariants}>
              <Button
                onClickFunction={() => {
                  setActive("mixte");
                  setOpen(false);
                }}
                className={`w-full text-left ${
                  active === "mixte" ? "text-foreground" : ""
                }`}
              >
                Mixte
              </Button>
            </motion.li>
            <motion.li variants={itemVariants}>
              <Button
                onClickFunction={() => {
                  setActive("fille");
                  setOpen(false);
                }}
                className={`w-full text-left ${
                  active === "fille" ? "text-foreground" : ""
                }`}
              >
                Fille
              </Button>
            </motion.li>
            <motion.li variants={itemVariants}>
              <Button
                onClickFunction={() => {
                  setActive("garcon");
                  setOpen(false);
                }}
                className={`w-full text-left ${
                  active === "garcon" ? "text-foreground" : ""
                }`}
              >
                Garçon
              </Button>
            </motion.li>
          </motion.ul>
        </motion.div>
      )}
    </>
  );
};

export default FilterTabs;
