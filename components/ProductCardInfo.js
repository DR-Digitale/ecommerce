import Link from "next/link";
import React, { useEffect, useState } from "react";
import Icon from "./Icon";
import { Button } from "./index";
import ProductCardCatPrice from "./ProductCardCatPrice";
import ShoeSize from "./ShoeSize";

const ProductCardInfo = ({...props}) => {
  const [isClicked, setIsClicked] = useState(false);
  const [sexIndex, setSexIndex] = useState(0);
  const [styleCat, setStyleCat] = useState("");
  const [colorIndex, setColorIndex] = useState(0);
  const [optionsIndex, setOptionsIndex] = useState(0);
  const [colors, setColors] = useState("");

  const handleClick = (e) => {
    setIsClicked(true);
    props.onClickFunction(e);
    setTimeout(() => setIsClicked(false), 300);
  };

  const colorAttribute = props.attributes
    .map((attribute) => attribute.name)
    .indexOf("Couleur");

  const girlIndex = props.categories
    .map((category) => category.name)
    .indexOf("Fille");

  const boyIndex = props.categories
    .map((category) => category.name)
    .indexOf("Garçon");

  const mixteIndex = props.categories
    .map((category) => category.name)
    .indexOf("Mixte");

  useEffect(() => {
    if (props.categories[0].name === "Fille") {
      setSexIndex(girlIndex);
    } else if (props.categories[0]?.name === "Garçon") {
      setSexIndex(boyIndex);
    } else if (props.categories[0]?.name === "Mixte") {
      setSexIndex(mixteIndex);
    } else if (props.categories[1]?.name === "Fille") {
      setSexIndex(girlIndex);
    } else if (props.categories[1]?.name === "Garçon") {
      setSexIndex(boyIndex);
    } else if (props.categories[1]?.name === "Mixte") {
      setSexIndex(mixteIndex);
    } else if (props.categories[2] && props.categories[2]?.name === "Fille") {
      setSexIndex(girlIndex);
    } else if (props.categories[2] && props.categories[2]?.name === "Garçon") {
      setSexIndex(boyIndex);
    } else if (props.categories[2] && props.categories[2]?.name === "Mixte") {
      setSexIndex(boyIndex);
    }
  }, [girlIndex, boyIndex, mixteIndex, props.categories]);

  useEffect(() => {
    if (
      props.categories &&
      props.categories[0]?.name !== "Fille" &&
      props.categories[0]?.name !== "Garçon" &&
      props.categories[0]?.name !== "Mixte" &&
      props.categories[0]?.name !== "A la une"
    ) {
      setStyleCat(props.categories[0].name);
    } else if (
      props.categories[1] &&
      props.categories[1]?.name !== "Fille" &&
      props.categories[1]?.name !== "Garçon" &&
      props.categories[1]?.name !== "Mixte" &&
      props.categories[1]?.name !== "A la une"
    ) {
      setStyleCat(props.categories[1].name);
    } else if (
      props.categories[2] &&
      props.categories[2]?.name !== "Fille" &&
      props.categories[2]?.name !== "Garçon" &&
      props.categories[2]?.name !== "Mixte" &&
      props.categories[2]?.name !== "A la une"
    ) {
      setStyleCat(props.categories[2].name);
    }
  }, [girlIndex, boyIndex, props.categories]);

  return (
    <>
      <div className="p-4 flex-auto">
        <div className="flex flex-wrap justify-between items-center pb-8">
          <h4 className="pb-2">{props.label}</h4>
          <div className="flex">
            {
              props.attributes[colorAttribute]?.options.map((color, index) => {
                let selectedColor = "";

                switch (color) {
                  case "bleu":
                    selectedColor = "#0032E1";
                    break;
                  case "rose":
                    selectedColor = "#FCAEB9";
                    break;
                  case "fushia":
                    selectedColor = "#C30873";
                    break;
                  case "violet":
                    selectedColor = "#8F15DA";
                    break;
                  case "rouge":
                    selectedColor = "#E10000";
                    break;
                  case "corail":
                    selectedColor = "#F86D60";
                    break;
                  case "orange":
                    selectedColor = "#FF9A61";
                    break;
                  case "jaune":
                    selectedColor = "#FFC700";
                    break;
                  case "vert":
                    selectedColor = "#35A43A";
                    break;
                  case "noir":
                    selectedColor = "#000000";
                    break;
                  case "gris":
                    selectedColor = "#ACACAC";
                    break;
                  case "blanc":
                    selectedColor = "#F0F0F0";
                    break;
                  case "beige":
                    selectedColor = "#F7E9D9";
                    break;
                  case "marron":
                    selectedColor = "#621212";
                    break;
                  case "parme":
                    selectedColor = "#cfa0e9";
                    break;
                  case "dore":
                    selectedColor = "#FAFAD2";
                    break;
                  case "marine":
                    selectedColor = "#000080";
                    break;
                  case "argente":
                    selectedColor = "#C0C0C0";
                    break;
                  case "bordeaux":
                    selectedColor = "#6d071a";
                    break;
                  case "camel":
                    selectedColor = "#bf8a3d";
                    break;
                  case "turquoise":
                    selectedColor = "#25fde9";
                    break;
                  default:
                    break;
                }
                return (

                <svg
                  key={`color-${index}`}
                  className="first:m-0 -ml-4"
                  width="44"
                  height="42"
                  viewBox="0 0 44 42"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M40.4619 33.5824L40.4606 33.5843C37.6173 37.7274 32.5804 40.2715 27.7964 40.8184C23.0028 41.3631 18.4831 39.9225 14.429 38.0344C10.3807 36.121 6.90536 33.7849 4.39726 30.4317L4.39728 30.4317L4.39451 30.4281C1.85638 27.0985 0.302317 22.7047 0.520313 18.127L0.520437 18.124C0.711393 13.541 2.70544 8.76691 6.21643 5.44644L6.21644 5.44646L6.21931 5.4437C9.70617 2.09304 14.7479 0.189359 19.4701 0.541667C24.1599 0.921697 28.5971 3.58576 32.809 6.87714C37.048 10.1959 40.8934 14.0101 42.4692 18.8172C44.0209 23.6086 43.3343 29.4364 40.4619 33.5824Z"
                    fill={selectedColor}
                    stroke="white"
                  />
                </svg>
              )
            })}
          </div>
        </div>
        <p>{props.shortDescription.replace(/<[^>]*>?/gm, "")}</p>
        <ProductCardCatPrice
          category={props.categories[0] ? props.categories[sexIndex]?.name : ""}
          subCategory={styleCat}
          className="border-surface"
          tagStyle="tag-productCard"
        />
        <ShoeSize
          shoeSizeKey={props.slug}
          allSizes={props.shoesSizes}
          productSizes={
            props.attributes[
              props.attributes
                .map((attribute) => attribute.name)
                .indexOf("Pointure")
            ].options
          }
        />
      </div>
      <div className="flex flex-wrap">
        <Link href={`/produits/${props.slug}`}>
          <a className="button-slipper flex-auto hover:text-accent transition-all duration-500 ease-out">
            <Icon icon="sandals" size={24} /> Voir le chausson
          </a>
        </Link>
        <Button
          className="button-commode flex-auto hover:text-accent transition-all duration-500 ease-out"
          onClickFunction={handleClick}
          isClicked={isClicked}
        >
          <Icon icon="drawer" size={24} /> Glisser dans ma commode
        </Button>
      </div>
    </>
  );
};

export default ProductCardInfo;
