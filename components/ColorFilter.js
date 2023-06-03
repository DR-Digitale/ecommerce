import Image from "next/image";
import line from "../assets/texture/curved-line-lg.svg";
import { ColorFilterSlide } from "../containers/Slider";
import Button from "./Button";
import Icon from "./Icon";
import { useState } from "react";
import chroma from "chroma-js";

const ColorFilter = ({ filteredColors, selection }) => {
  const [selectedColor, setSelectedColor] = useState([""]);
  const colors = [
    {
      id: 1,
      name: "pink",
      hex: "#FCAEB9",
    },
    {
      id: 2,
      name: "fushia",
      hex: "#C30873",
    },
    {
      id: 3,
      name: "violet",
      hex: "#8F15DA",
    },
    {
      id: 4,
      name: "red",
      hex: "#E10000",
    },
    {
      id: 5,
      name: "corail",
      hex: "#F86D60",
    },
    {
      id: 6,
      name: "orange",
      hex: "#FF9A61",
    },
    {
      id: 7,
      name: "yellow",
      hex: "#FFC700",
    },
    {
      id: 8,
      name: "green",
      hex: "#35A43A",
    },
    {
      id: 9,
      name: "blue",
      hex: "#0032E1",
    },
    {
      id: 10,
      name: "black",
      hex: "#000000",
    },
    {
      id: 11,
      name: "grey",
      hex: "#ACACAC",
    },
    {
      id: 12,
      name: "white",
      hex: "#FFFFFF",
    },
    {
      id: 13,
      name: "beige",
      hex: "#F7E9D9",
    },
    {
      id: 14,
      name: "brown",
      hex: "#621212",
    },
  ];

  const handleClick = (color) => {
    if (selectedColor.includes(color.name)) {
      setSelectedColor(
        selectedColor.filter((selected) => selected !== color.name)
      );
    } else {
      setSelectedColor([...selectedColor, color.name]);
    }
  };

  return (
    <div className="px-10 selection:bg-transparent">
      <div className="prev-color-filter mb-2">
        <Icon icon="arrowUp" size={24} />
      </div>
      <div className="relative h-[268px]">
        <div className="absolute top-0 left-1/2 w-full h-[268px] -translate-x-1/2">
          <Image src={line} alt="" layout="fill" />
        </div>
        <div className=" h-full flex items-center justify-center">
          <div className="max-h-[210px] h-full">
            <ColorFilterSlide slideName="color-filter">
              {colors.map((color) => {
                const luminance = chroma(color.hex).luminance();
                const iconColor =
                  luminance > 0.5 ? "text-surface" : "text-white";
                return (
                  <Button
                    className="bg-white p-3"
                    key={`color-${color.name}`}
                    onClickFunction={() => filteredColors(color.name)}
                  >
                    <span
                      className={`flex items-center justify-center bg-collection-${color.name} rounded-full w-7 h-7 border-white transition-all duration-500 ease-in-out`}
                    >
                      {selection.includes(color.name) && (
                        <Icon className={iconColor} icon="check" size={20} />
                      )}
                    </span>
                  </Button>
                );
              })}
            </ColorFilterSlide>
          </div>
        </div>
        <div className="next-color-filter mt-2">
          <Icon icon="arrowDown" size={24} />
        </div>
      </div>
    </div>
  );
};

export default ColorFilter;
