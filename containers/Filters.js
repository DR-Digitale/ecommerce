import React, { useContext, useEffect, useState } from "react";
import { Button } from "../components";
import ColorFilter from "../components/ColorFilter";
import Icon from "../components/Icon";
import { ShoeSizeFilter } from "../components/ShoeSize";
import { AnimatePresence, motion } from "framer-motion";
import { FilterContext } from "../utils/useProvider";

const variants = {
  open: {
    opacity: 1,
    x: 0,
  },
  closed: {
    opacity: 0,
    x: "100%",
  },
};

const overlay = {
  open: {
    opacity: 0.6,
  },
  closed: {
    opacity: 0,
  },
};

const Filters = ({...props}) => {
  const filters = useContext(FilterContext);
  const [categories, setCategories] = useState([""]);
  const [attributes, setAttributes] = useState([]);

  const colorsAttributes = (filteredColor) => {
    if (attributes) {
      if (attributes.includes(filteredColor)) {
        setAttributes(
          attributes.filter((selected) => selected !== filteredColor)
        );
      } else {
        setAttributes([...attributes, filteredColor]);
      }
    }
  };

  const sizesAttributes = (filteredSize) => {
    if (attributes) {
      if (attributes.includes(filteredSize)) {
        setAttributes(
          attributes.filter((selected) => selected !== filteredSize)
        );
      } else {
        setAttributes([...attributes, filteredSize]);
      }
    }
  };

  console.log(attributes);

  function updateCategories(categories, newValue) {
    const valuesToCheck = ["uni", "bicolore", "animaux", "vehicules", "motifs"];
    const filteredCategories = categories.filter(
      (category) => !valuesToCheck.includes(category)
    );
    filteredCategories.push(newValue);
    setCategories(filteredCategories);
  }

  useEffect(() => {
    let body = document.body;
    function noScroll() {
      body.classList.add("overflow-hidden");
    }
    function scroll() {
      body.classList.remove("overflow-hidden");
    }
    if (props.isOpen) {
      noScroll();
    } else {
      scroll();
    }
  }, [props.isOpen]);

  return (
    <div>
      <AnimatePresence initial={false}>
        <motion.div
          key={"overlay"}
          className={`fixed inset-0 w-screen h-screen bg-black z-50 ${
            props.isOpen ? "block" : "hidden"
          }`}
          onClick={props.close}
          variants={overlay}
          animate={props.isOpen ? "open" : "closed"}
        ></motion.div>
        <motion.div
          key={"content"}
          variants={variants}
          animate={props.isOpen ? "open" : "closed"}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 15,
            mass: 0.5,
          }}
          className="flex flex-col w-full md:w-3/4 lg:w-1/2 xl:w-1/3 h-screen fixed top-0 right-0 bg-white p-12 z-50 rounded-l-[16px] overflow-auto"
        >
          <div className="flex justify-between items-center pb-6">
            <h4>Mes préférences</h4>
            <Button onClickFunction={props.close}>
              <Icon className="hover:text-accent" icon="cancel" size={24} />
            </Button>
          </div>
          <Button
            className="flex gap-4 items-center link-hover group mb-4"
            onClickFunction={() => {
              filters.setFilters({ categories: [], attributes: [] });
              setCategories([]);
              setAttributes([]);
            }}
          >
            <Icon className="group-hover:text-accent" icon="erase" size={22} />
            Effacer les filtres
          </Button>
          <div className="pb-6 border-b border-halftone">
            <p className="uppercase text-grey-darker pb-4">Tailles</p>
            <ShoeSizeFilter
              selection={attributes}
              filteredSize={sizesAttributes}
              shoeSizeKey={props.shoesSizes.slug}
              allSizes={props.shoesSizes}
            />
          </div>
          <div className="pt-6 h-full">
            <p className="uppercase text-grey-darker pb-4">styles & couleurs</p>
            <div className="flex justify-between h-full pb-12">
              <div className="flex flex-col items-start h-full justify-between">
                <div className="flex flex-col items-start gap-y-4">
                  <Button
                    className="button-filter"
                    onClickFunction={() => {
                      updateCategories(filters.filters.categories, "uni");
                    }}
                  >
                    <Icon icon="monochrome" size={24} />
                    Uni
                  </Button>
                  <Button
                    className="button-filter"
                    onClickFunction={() => {
                      updateCategories(filters.filters.categories, "bicolore");
                    }}
                  >
                    <Icon icon="duotone" size={24} />
                    Bicolore
                  </Button>
                  <div className="">
                    <Button
                      className="button-filter active"
                      // onClickFunction={}
                    >
                      <Icon icon="pattern" size={24} />
                      Illustré
                    </Button>
                    <div className="flex flex-col items-start gap-6 ml-4 pl-4 py-3 mt-4 border-l-2 border-dashed border-halftone">
                      <Button
                        className="flex items-center gap-4"
                        onClickFunction={() => {
                          updateCategories(
                            filters.filters.categories,
                            "animaux"
                          );
                        }}
                      >
                        <Icon icon="animals" size={24} /> Animaux
                      </Button>
                      <Button
                        className="flex items-center gap-4"
                        onClickFunction={() => {
                          updateCategories(
                            filters.filters.categories,
                            "vehicules"
                          );
                        }}
                      >
                        <Icon icon="vehicules" size={24} /> Vehicules
                      </Button>
                      <Button
                        className="flex items-center gap-4"
                        onClickFunction={() => {
                          updateCategories(
                            filters.filters.categories,
                            "motifs"
                          );
                        }}
                      >
                        <Icon icon="forms" size={24} /> Motifs
                      </Button>
                    </div>
                  </div>
                </div>
                <Button
                  className="button-accent"
                  onClickFunction={() => {
                    filters.setFilters({
                      ...filters.filters,
                      categories: categories,
                      attributes: attributes,
                    });
                    props.close;
                  }}
                >
                  <Icon icon="apply" size={24} />
                  Appliquer
                </Button>
              </div>
              <ColorFilter
                selection={attributes}
                filteredColors={colorsAttributes}
              />
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Filters;
