import Link from "next/link";
import { useEffect, useState } from "react";
import Button from "./Button";
import Icon from "./Icon";
import ProductCardCatPrice from "./ProductCardCatPrice";
import ShoeSize from "./ShoeSize";
import { sanitize } from "../utils/purifyHtml";


const BestProductInfo = ({...props}) => {
  const [sexIndex, setSexIndex] = useState(0);
  const [styleCat, setStyleCat] = useState("");

  const colorAttribute = props.bestProduct[0]?.attributes
    .map((attribute) => attribute.name)
    .indexOf("Couleur");

  const optionsIndex = props.bestProduct[0]?.attributes
    .map((attribute) => attribute.name)
    .indexOf("Pointure");

  const colors = props.bestProduct[0]?.attributes[colorAttribute]?.options?.map(
    (color) => color
  );

  const catFille = props.bestProduct[0]?.categories
    .map((category) => category.name)
    .indexOf("Fille");
  const catGarcon = props.bestProduct[0]?.categories
    .map((category) => category.name)
    .indexOf("Garçon");

  const mixteIndex = props.bestProduct[0]?.categories
    .map((category) => category.name)
    .indexOf("Mixte");

  useEffect(() => {
    if (props.bestProduct[0]?.categories[0]?.name === "Fille") {
      setSexIndex(catFille);
    } else if (props.bestProduct[0]?.categories[0]?.name === "Garçon") {
      setSexIndex(catGarcon);
    } else if (props.bestProduct[0]?.categories[0]?.name === "Mixte") {
      setSexIndex(mixteIndex);
    } else if (props.bestProduct[0]?.categories[1]?.name === "Fille") {
      setSexIndex(catFille);
    } else if (props.bestProduct[0]?.categories[1]?.name === "Garçon") {
      setSexIndex(catGarcon);
    } else if (props.bestProduct[0]?.categories[1]?.name === "Mixte") {
      setSexIndex(mixteIndex);
    } else if (
      props.bestProduct[0]?.categories[2] &&
      props.bestProduct[0]?.categories[2].name === "Fille"
    ) {
      setSexIndex(catFille);
    } else if (
      props.bestProduct[0]?.categories[2] &&
      props.bestProduct[0]?.categories[2].name === "Garçon"
    ) {
      setSexIndex(catGarcon);
    } else if (
      props.bestProduct[0]?.categories[2] &&
      props.bestProduct[0]?.categories[2].name === "Mixte"
    ) {
      setSexIndex(catGarcon);
    }
  }, [catFille, catGarcon, mixteIndex, props.bestProduct]);

  useEffect(() => {
    if (
      props.bestProduct[0]?.categories[0] &&
      props.bestProduct[0]?.categories[0]?.name !== "Fille" &&
      props.bestProduct[0]?.categories[0]?.name !== "Garçon" &&
      props.bestProduct[0]?.categories[0]?.name !== "Mixte" &&
      props.bestProduct[0]?.categories[0]?.name !== "A la une"
    ) {
      setStyleCat(props.bestProduct[0].categories[0].name);
    } else if (
      props.bestProduct[0]?.categories[1] &&
      props.bestProduct[0]?.categories[1]?.name !== "Fille" &&
      props.bestProduct[0]?.categories[1]?.name !== "Garçon" &&
      props.bestProduct[0]?.categories[1]?.name !== "Mixte" &&
      props.bestProduct[0]?.categories[1]?.name !== "A la une"
    ) {
      setStyleCat(props.bestProduct[0].categories[1].name);
    } else if (
      props.bestProduct[0]?.categories[2] &&
      props.bestProduct[0]?.categories[2]?.name !== "Fille" &&
      props.bestProduct[0]?.categories[2]?.name !== "Garçon" &&
      props.bestProduct[0]?.categories[2]?.name !== "Mixte" &&
      props.bestProduct[0]?.categories[2]?.name !== "A la une"
    ) {
      setStyleCat(props.bestProduct[0]?.categories[2]?.name);
    }
  }, [catFille, catGarcon, props.bestProduct]);

  return (
    <div>
      <h4 className="text-peps-major pb-2">
        Ce modèle de chausson en cuir a la côte !
      </h4>
      <div className="flex justify-between items-center ">
        <h3 className="pb-2">{props.bestProduct[0].name}</h3>
        <div className="hidden md:flex lg:hidden">
          {props.bestProduct[0]?.attributes[colorAttribute]?.options?.map(
            (color, index) => {
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
            }
          )}
        </div>
      </div>
      <div className="flex justify-between items-center pb-8 flex-wrap gap-y-4 md:hidden lg:flex">
        <div className="flex">
          {props.bestProduct[0]?.attributes[colorAttribute]?.options?.map(
            (color, index) => {
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
            }
          )}
        </div>
        {/* <div
            className="flex items-center card_price sm:hidden"
            dangerouslySetInnerHTML={{
              __html: sanitize(props.bestProduct[0]?.price_html ?? ""),
            }}
          /> */}
      </div>
      <p className="text-grey-darkest">
        {props.bestProduct[0].short_description.replace(/<[^>]*>?/gm, "")}
      </p>
      <ProductCardCatPrice
        className="border-surface"
        category={props.bestProduct[0]?.categories[sexIndex]?.name}
        subCategory={styleCat}
        price={props.bestProduct[0].price_html}
        tagStyle="tag-productCard"
      />
      <ShoeSize
        className="pb-8"
        shoeSizeKey="best-product"
        allSizes={props.shoesSizes}
        productSizes={props.bestProduct[0]?.attributes[optionsIndex]?.options}
      />
      <div className="flex flex-wrap gap-6 mt-8">
        <Link href={`/produits/${props.bestProduct[0]?.slug}`}>
          <a className="button-accent flex-auto">
            <Icon icon="sandals" size={24} /> Voir le chausson
          </a>
        </Link>
        <Button className="button-outline flex-auto">
          <Icon icon="drawer" size={24} /> Glisser dans ma commode
        </Button>
      </div>
    </div>
  );
};

export default BestProductInfo;
