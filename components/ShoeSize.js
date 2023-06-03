import { useContext, useState } from "react";
import { ShoesSizeSlide } from "../containers/Slider";
import { ReRenderContext, SizeContext } from "../utils/useProvider";
import Icon from "./Icon";
import { motion, AnimatePresence } from "framer-motion";
import Button from "./Button";

const ShoeSize = ({ productSizes, allSizes, className, shoeSizeKey }) => {
  const width = useContext(ReRenderContext);

  return (
    <>
      {width >= 640 ? (
        <div className={`flex gap-x-[2px] gap-y-4 flex-wrap ${className}`}>
          {allSizes &&
            allSizes.map((size) => {
              if (productSizes.includes(size.name)) {
                return (
                  <div className={`shoe-size active`} key={`size-${size.id}`}>
                    <span>{size.name.substring(0, 2)}</span>
                    <span>{size.name.substring(3, 5)}</span>
                  </div>
                );
              } else {
                return (
                  <div className={`shoe-size disabled`} key={`size-${size.id}`}>
                    <span>{size.name.substring(0, 2)}</span>
                    <span>{size.name.substring(3, 5)}</span>
                  </div>
                );
              }
            })}
        </div>
      ) : (
        <div className="w-full flex items-center justify-between">
          <div
            className={`prev-${shoeSizeKey}`}
            onClick={() => console.log("click")}
          >
            <Icon icon="arrowLeft" size={24} />
          </div>
          <ShoesSizeSlide slideName={shoeSizeKey}>
            {allSizes &&
              allSizes.map((size) => {
                if (productSizes.includes(size.name)) {
                  return (
                    <div className={`shoe-size active`} key={`size-${size.id}`}>
                      <span>{size.name.substring(0, 2)}</span>
                      <span>{size.name.substring(3, 5)}</span>
                    </div>
                  );
                } else {
                  return (
                    <div
                      className={`shoe-size disabled`}
                      key={`size-${size.id}`}
                    >
                      <span>{size.name.substring(0, 2)}</span>
                      <span>{size.name.substring(3, 5)}</span>
                    </div>
                  );
                }
              })}
          </ShoesSizeSlide>
          <div className={`next-${shoeSizeKey}`}>
            <Icon icon="arrowRight" size={24} />
          </div>
        </div>
      )}
    </>
  );
};

export default ShoeSize;

export const ShopShoeSize = ({ productSizes, allSizes, className, shoeSizeKey }) => {
  const width = useContext(ReRenderContext);
  const sizeValue = useContext(SizeContext);

  return (
    <>
      {width >= 640 ? (
        <div className={`flex gap-x-[2px] gap-y-4 flex-wrap ${className}`}>
          {allSizes.map((size, index) => {
            if (productSizes.includes(size.name)) {
              return (
                <button
                  className={`shoe-size-product active ${
                    sizeValue.selectedSize === size.name ? "selected" : ""
                  }`}
                  onClick={() => sizeValue.setSelectedSize(size.name)}
                  key={`size-${size.id}`}
                >
                  <span>{size.name.substring(0, 2)}</span>
                  <span>{size.name.substring(3, 5)}</span>
                </button>
              );
            } else {
              return (
                <div
                  className={`shoe-size-product disabled`}
                  onClick={() => sizeValue.setSelectedSize(size.name)}
                  key={`size-${size.id}`}
                >
                  <span>{size.name.substring(0, 2)}</span>
                  <span>{size.name.substring(3, 5)}</span>
                </div>
              );
            }
          })}
        </div>
      ) : (
        <div
          className={`w-full flex items-center justify-between ${className}`}
        >
          <div className={`prev-${shoeSizeKey}`}>
            <Icon icon="arrowLeft" size={24} />
          </div>
          <ShoesSizeSlide slideName={shoeSizeKey}>
            {allSizes.map((size, index) => {
              if (productSizes.includes(size.name)) {
                return (
                  <button
                    className={`shoe-size-product active ${
                      sizeValue.selectedSize === size.name ? "selected" : ""
                    }`}
                    onClick={() => sizeValue.setSelectedSize(size.name)}
                    key={`size-${size.id}`}
                  >
                    <span>{size.name.substring(0, 2)}</span>
                    <span>{size.name.substring(3, 5)}</span>
                  </button>
                );
              } else {
                return (
                  <button
                    className={`shoe-size-product disabled`}
                    onClick={() => sizeValue.setSelectedSize(size.name)}
                    key={`size-${size.id}`}
                  >
                    <span>{size.name.substring(0, 2)}</span>
                    <span>{size.name.substring(3, 5)}</span>
                  </button>
                );
              }
            })}
          </ShoesSizeSlide>
          <div className={`next-${shoeSizeKey}`}>
            <Icon icon="arrowRight" size={24} />
          </div>
        </div>
      )}
    </>
  );
};

export const ShoeSizeFilter = ({ productSizes, allSizes, className, shoeSizeKey, filteredSize,selection }) => {
  const width = useContext(ReRenderContext);
  const [selectedSize, setSelectedSize] = useState([""]);

  const handleClick = (size) => {
    if (selectedSize.includes(size.name)) {
      setSelectedSize(
        selectedSize.filter((selected) => selected !== size.name)
      );
    } else {
      setSelectedSize([...selectedSize, size.name]);
    }
  };

  return (
    <>
      {width >= 640 ? (
        <div className={`flex gap-x-[2px] gap-y-4 flex-wrap ${className}`}>
          {allSizes.map((size) => {
            return (
              <Button
                onClickFunction={() => filteredSize(size.name)}
                className={`shoe-size-filter ${
                  selection.includes(size.name) ? "active" : ""
                }`}
                key={`size-${size.id}`}
              >
                <span>{size.name.substring(0, 2)}</span>
                <span>{size.name.substring(3, 5)}</span>
              </Button>
            );
          })}
        </div>
      ) : (
        <div className="w-full flex items-center justify-between">
          <div className={`prev-${shoeSizeKey}`}>
            <Icon icon="arrowLeft" size={24} />
          </div>
          <ShoesSizeSlide slideName={shoeSizeKey}>
            {allSizes.map((size) => {
              return (
                <Button
                  onClickFunction={() => filteredSize(size.name)}
                  className={`shoe-size active ${
                    selection.includes(size.name) ? "active" : ""
                  }`}
                  key={`size-${size.id}`}
                >
                  <span>{size.name.substring(0, 2)}</span>
                  <span>{size.name.substring(3, 5)}</span>
                </Button>
              );
            })}
          </ShoesSizeSlide>
          <div className={`next-${shoeSizeKey}`}>
            <Icon icon="arrowRight" size={24} />
          </div>
        </div>
      )}
    </>
  );
};
