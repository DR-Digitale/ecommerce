import React, { useContext, useEffect, useRef, useState } from "react";
import { Button } from "../components";
import Icon from "../components/Icon";
import Price from "../components/Price";
import ProductCardCatPrice from "../components/ProductCardCatPrice";
import { ShopShoeSize } from "../components/ShoeSize";
import SliderBlobProduct from "../components/SliderBlobProduct";
import line from "../assets/texture/curved-line-white.svg";
import horizontalLine from "../assets/texture/horizontal-curved-line.svg";
import Image from "next/image";
import { MiniatureSlide, MiniatureSlideVertical } from "../containers/Slider";
import defaultImage from "../assets/img/woocommerce-placeholder.png";
import top from "../assets/texture/top-product.svg";
import Popup from "../components/Popup";
import { useRouter } from "next/router";
import MoreInformation from "../components/MoreInformation";
import { addLineItem } from "../store/slices/cartSlice";
import usePrevious from "../utils/usePrevious";
import Toaster from "../components/Toaster";
import { SizeContext } from "../utils/useProvider";
import { sanitize } from "../utils/purifyHtml";
import AddToCart from '../components/cart/AddToCart'

const ProductDetails = ({...props}) => {
  const { product, variation, shoesSizes } = props;
  const [index, setIndex] = useState(0);
  const [sexIndex, setSexIndex] = useState(0);
  const [styleCat, setStyleCat] = useState("");
  const [direction, setDirection] = useState(0);
  const [theme, setTheme] = useState("");
  const colorAttribute = product[0].attributes
    .map((attribute) => attribute.name)
    .indexOf("Couleur");

  const optionsIndex = product[0].attributes
    .map((attribute) => attribute.name)
    .indexOf("Pointure");

  const girlIndex = product[0].categories
    .map((category) => category.name)
    .indexOf("Fille");

  const boyIndex = product[0].categories
    .map((category) => category.name)
    .indexOf("Garçon");

  const mixteIndex = product[0].categories
    .map((category) => category.name)
    .indexOf("Mixte");
  const [selectedColor, setSelectedColor] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState("Entretien");
  const [toast, setToats] = useState(false);
  const { asPath } = useRouter();
  const [isClicked, setIsClicked] = useState(false);
  const route = process.env.NEXT_PUBLIC_FRONT_URL + asPath;
  const size = useContext(SizeContext);
  const [missingSize, setMissingSize] = useState(false);
  const [cartImage, setCartImage] = useState("");

  // const lineItem = {
  //   name: product[0].name,
  //   product_id: product[0].id,
  //   quantity: 1,
  //   price: product[0].price,
  //   size: size.selectedSize,
  //   image: cartImage,
  //   color: selectedColor,
  //   slug: product[0].slug,
  // };

  const handleIncrement = () => {
    if (size.selectedSize !== "") {
      dispatch(addLineItem(lineItem));
      setIsClicked(true);
      setTimeout(() => setIsClicked(false), 300);
      setToats(true);
      setTimeout(() => {
        setToats(false);
      }, 5000);
    } else {
      setMissingSize(true);
      setTimeout(() => {
        setMissingSize(false);
      }, 5000);
    }
  };

  useEffect(() => {
    size.setSelectedSize("");
  }, [asPath]);

  useEffect(() => {
    if (product && product[0].images && product[0].images[index]) {
      setCartImage(product[0].images[index].src);
    } else {
      setCartImage(defaultImage.src);
    }
  }, [product, index]);

  useEffect(() => {
    if (product[0].attributes && product[0].attributes[colorAttribute]) {
      setSelectedColor(product[0].attributes[colorAttribute].options[0]);
    } else {
      setSelectedColor("");
    }
  }, []);

  const prevState = usePrevious(index);

  useEffect(() => {
    if (
      !prevState ||
      index === 0 ||
      (index > prevState && index !== product[0].images.length - 1)
    ) {
      setDirection(1);
    } else {
      setDirection(-1);
    }
  }, [index, prevState, product]);

  useEffect(() => {
    if (girlIndex !== -1) {
      setTheme("gradient-girly");
    } else if (boyIndex !== -1) {
      setTheme("gradient-boy");
    } else {
      setTheme("gradient-mixte");
    }
  }, [product, girlIndex, boyIndex]);

  useEffect(() => {
    if (product[0].categories[0].name === "Fille") {
      setSexIndex(girlIndex);
    } else if (product[0].categories[0].name === "Garçon") {
      setSexIndex(boyIndex);
    } else if (product[0].categories[0].name === "Mixte") {
      setSexIndex(mixteIndex);
    } else if (product[0].categories[1].name === "Fille") {
      setSexIndex(girlIndex);
    } else if (product[0].categories[1].name === "Garçon") {
      setSexIndex(boyIndex);
    } else if (product[0].categories[1].name === "Mixte") {
      setSexIndex(mixteIndex);
    } else if (
      product[0].categories[2] &&
      product[0].categories[2].name === "Fille"
    ) {
      setSexIndex(girlIndex);
    } else if (
      product[0].categories[2] &&
      product[0].categories[2].name === "Garçon"
    ) {
      setSexIndex(boyIndex);
    } else if (
      product[0].categories[2] &&
      product[0].categories[2].name === "Mixte"
    ) {
      setSexIndex(mixteIndex);
    }
  }, [girlIndex, boyIndex, product, mixteIndex]);

  useEffect(() => {
    if (
      product[0].categories[0] &&
      product[0].categories[0].name !== "Fille" &&
      product[0].categories[0].name !== "Garçon" &&
      product[0].categories[0].name !== "Mixte" &&
      product[0].categories[0].name !== "A la une"
    ) {
      setStyleCat(product[0].categories[0].name);
    } else if (
      product[0].categories[1] &&
      product[0].categories[1].name !== "Fille" &&
      product[0].categories[1].name !== "Garçon" &&
      product[0].categories[1].name !== "Mixte" &&
      product[0].categories[1].name !== "A la une"
    ) {
      setStyleCat(product[0].categories[1].name);
    } else if (
      product[0].categories[2] &&
      product[0].categories[2].name !== "Fille" &&
      product[0].categories[2].name !== "Garçon" &&
      product[0].categories[2].name !== "Mixte" &&
      product[0].categories[2].name !== "A la une"
    ) {
      setStyleCat(product[0].categories[2].name);
    }
  }, [girlIndex, boyIndex, product]);

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  const share = () => {
    if (navigator.share) {
      navigator
        .share({
          title: product[0].name,
          url: route,
        })
        .then(() => {
          console.log("Merci pour le partage");
        })
        .catch(console.error);
    } else {
      setShowModal(true);
      setSelectedIndex("Partager");
    }
  };

  return (
    <div className={`relative overflow-hidden ${theme}`}>
      <div className="absolute -bottom-0 left-0 w-[100vw] h-[11.46vw]">
        <Image src={top} alt="" layout="fill" />
      </div>
      <div className="hero-product w-full px-6 md:px-12 xl:pt-[9.26vh] lg:px-20 xl:w-[84%] xl:px-0 mx-auto h-[130vh] lg:h-[140vh]  text-white">
        <div className="flex items-center justify-between">
          <ProductCardCatPrice
            category={
              product[0].categories[0]
                ? product[0].categories[sexIndex].name
                : ""
            }
            subCategory={styleCat}
            tagStyle="tag-singleProduct"
          />
          <ShopShoeSize
            className="relative z-10 hidden lg:flex"
            shoeSizeKey={product[0].slug}
            productSizes={product[0].attributes[optionsIndex].options}
            allSizes={shoesSizes}
          />
          <Button
            className="flex lg:hidden items-center gap-4 text-background hover:text-grey-lighter transition-all duration-500 ease-out"
            onClickFunction={share}
          >
            <Icon icon="share" size={22} /> Partager
          </Button>
        </div>
        <div className="mb-8 lg:hidden">
          <h1 className=" text-[2.5rem]">{product[0].name}</h1>
          <p>{product[0].short_description.replace(/<[^>]*>?/gm, "")}</p>
        </div>
        <div className="grid sm:grid-cols-5 lg:grid-cols-4 xl:grid-cols-5 min-h-[50vh] xl:min-h-[70vh] mb-12">
          <div className="hidden lg:flex flex-col gap-6 items-start justify-center">
            <h1 className=" text-[2.5rem]">{product[0].name}</h1>
            <p>{product[0].short_description.replace(/<[^>]*>?/gm, "")}</p>
            <Button
              className="flex items-center gap-4 text-background hover:text-grey-lighter transition-all duration-500 ease-out"
              onClickFunction={() => {
                setShowModal(true);
                setSelectedIndex("Partager");
              }}
            >
              <Icon icon="info" size={22} /> Plus d&apos;informations
            </Button>
            <div
          className="hidden sm:flex sm:items-center card_price"
          dangerouslySetInnerHTML={{
            __html: sanitize(variation[0].price_html ?? ""),
          }}
        />
            {/* <Button
              onClickFunction={handleIncrement}
              isClicked={isClicked}
              className="button-addToCart text-surface"
            >
              <Icon icon="shoppingBag" size={22} /> Ajouter au panier
            </Button> */}
            <AddToCart product={product[0]} selectedSize={size.selectedSize} selectedColor={selectedColor} variations={variation} />
            <Button className="flex items-center gap-4 text-background hover:text-grey-lighter transition-all duration-500 ease-out">
              <Icon icon="drawer" size={22} /> Glisser dans ma commode
            </Button>
            <Button
              className="flex items-center gap-4 text-background hover:text-grey-lighter transition-all duration-500 ease-out"
              onClickFunction={share}
            >
              <Icon icon="share" size={22} /> Partager
            </Button>
          </div>
          <div className="sm:col-span-4 md:col-span-3 lg:col-span-2 xl:col-span-3 lg:h-[70vh]">
            <SliderBlobProduct
              direction={direction}
              index={index}
              image={
                product[0].images[index]
                  ? product[0].images[index].src
                  : defaultImage.src
              }
            />
            <div className="flex justify-between items-center mb-10 sm:mb-0">
              <div className="prev-miniature-mobile sm:hidden block">
                <Icon icon="arrowLeft" size={24} />
              </div>
              <MiniatureSlide
                slideName="miniature-mobile"
                index={index}
                className="block sm:hidden justify-center w-full"
              >
                {product[0].images[0]
                  ? product[0].images.map((image, index) => (
                      <button
                        onClick={() => {
                          setIndex(index);
                        }}
                        className="relative w-16 h-16 lg:h-24 lg:w-24"
                        key={image.id}
                      >
                        <Image
                          className="rounded-lg"
                          src={image.src}
                          alt={image.alt}
                          layout="fill"
                          objectFit="cover"
                        />
                      </button>
                    ))
                  : image.map((item, index) => (
                      <button
                        onClick={() => {
                          setIndex(index);
                        }}
                        className="relative h-24 w-24"
                        key={index}
                      >
                        <Image
                          className="rounded-lg"
                          src={item}
                          alt={""}
                          layout="fill"
                          objectFit="cover"
                        />
                      </button>
                    ))}
              </MiniatureSlide>
              <div className="next-miniature-mobile sm:hidden block">
                <Icon icon="arrowRight" size={24} />
              </div>
            </div>
            <div className="relative w-full h-[6.48vh] items-center justify-center flex md:hidden lg:flex xl:hidden sm:translate-x-[10%]">
              <div className="absolute w-[46.18vh] h-[6.48vh] top-[-50%]">
                <Image src={horizontalLine} alt="" layout="fill" />
              </div>
              {product[0].attributes[colorAttribute] && (
                <div className={`product-colors relative z-10 flex gap-4 `}>
                  {product[0].attributes[colorAttribute].options.map(
                    (option, index) => (
                      <span
                        key={`color-${index}`}
                        onClick={() => setSelectedColor(option)}
                        className={`product-color rounded-full w-14 h-14 flex items-center justify-center transition-all duration-500 ease-out ${
                          option === selectedColor
                            ? `bg-collection-${option.toLowerCase()}`
                            : ""
                        }
                        ${
                          product[0].attributes[colorAttribute].length === 1
                            ? ""
                            : "first:-translate-y-2"
                        }`}
                      >
                        <span
                          className={`flex items-center justify-center bg-collection-${option.toLowerCase()} rounded-full w-10 h-10 border-white transition-all duration-500 ease-in-out ${
                            option === selectedColor ? "border-4" : "border-8"
                          }`}
                        >
                          {option === selectedColor && (
                            <Icon
                              className="text-surface"
                              icon="check"
                              size={20}
                            />
                          )}
                        </span>
                      </span>
                    )
                  )}
                </div>
              )}
            </div>
          </div>
          <div className="sm:col-span-1 md:col-span-2 lg:col-span-1 flex items-center justify-end xl:justify-center gap-12">
            <div className="relative w-[6.48vh] h-[46.18vh] items-center justify-center hidden md:flex lg:hidden xl:flex">
              <div className="absolute w-[6.48vh] h-[46.18vh] -left-[42%]">
                <Image src={line} alt="" layout="fill" />
              </div>
              {product[0].attributes[colorAttribute] && (
                <div className="product-colors relative z-10 flex flex-col gap-4">
                  {product[0].attributes[colorAttribute].options.map(
                    (option, index) => (
                      <span
                        key={`color-${index}`}
                        onClick={() => setSelectedColor(option)}
                        className={`product-color-side rounded-full w-14 h-14 flex items-center justify-center transition-all duration-500 ease-out ${
                          option === selectedColor
                            ? `bg-collection-${option.toLowerCase()}`
                            : ""
                        }`}
                      >
                        <span
                          className={`flex items-center justify-center bg-collection-${option.toLowerCase()} rounded-full w-10 h-10 border-white transition-all duration-500 ease-in-out ${
                            option === selectedColor ? "border-4" : "border-8"
                          }`}
                        >
                          {option === selectedColor && (
                            <Icon
                              className="text-surface"
                              icon="check"
                              size={20}
                            />
                          )}
                        </span>
                      </span>
                    )
                  )}
                </div>
              )}
            </div>
            <div className="flex flex-col gap-9 justify-between items-center h-3/4">
              <div className="prev-miniature hidden sm:block">
                <Icon icon="arrowUp" size={24} />
              </div>
              <MiniatureSlideVertical
                className="items-end hidden sm:block"
                slideName="miniature"
                index={index}
              >
                {product[0].images[0]
                  ? product[0].images.map((image, index) => (
                      <button
                        onClick={() => {
                          setIndex(index);
                        }}
                        className="relative w-16 h-16 lg:h-24 lg:w-24"
                        key={image.id}
                      >
                        <Image
                          className="rounded-lg"
                          src={image.src}
                          alt={image.alt}
                          layout="fill"
                          objectFit="cover"
                        />
                      </button>
                    ))
                  : image.map((item, index) => (
                      <button
                        onClick={() => {
                          setIndex(index);
                        }}
                        className="relative h-24 w-24"
                        key={index}
                      >
                        <Image
                          className="rounded-lg"
                          src={item}
                          alt={""}
                          layout="fill"
                          objectFit="cover"
                        />
                      </button>
                    ))}
              </MiniatureSlideVertical>
              <div className="next-miniature hidden sm:block">
                <Icon icon="arrowDown" size={24} />
              </div>
            </div>
          </div>
        </div>
        <div className="lg:hidden pt-4">
          <ShopShoeSize
            className="relative z-10 flex justify-between lg:hidden pt-8"
            shoeSizeKey={`mobil-${product[0].slug}`}
            productSizes={product[0].attributes[optionsIndex].options}
            allSizes={shoesSizes}
          />
          <div className="flex justify-between items-center my-8">
            <Button className="flex items-center gap-4 text-background hover:text-grey-lighter transition-all duration-500 ease-out">
              <Icon icon="info" size={22} /> Plus d&apos;informations
            </Button>
            <Price
              price={
                variation[0].regular_price === variation[0].price
                  ? variation[0].price + " €"
                  : variation[0].regular_price + " €"
              }
              reducedPrice={
                variation[0].regular_price !== variation[0].price
                  ? variation[0].price + " €"
                  : ""
              }
            />
          </div>
          <div className="flex flex-wrap gap-4 items-center justify-between">
            <Button
              onClickFunction={handleIncrement}
              isClicked={isClicked}
              className="button-addToCart text-surface flex-auto"
            >
              <Icon icon="shoppingBag" size={22} /> Ajouter au panier
            </Button>
            <Button className="flex items-center justify-center flex-auto gap-4 text-background hover:text-grey-lighter transition-all duration-500 ease-out">
              <Icon icon="drawer" size={22} /> Glisser dans ma commode
            </Button>
          </div>
        </div>
      </div>
      <Popup show={showModal} onClose={() => setShowModal(false)}>
        <MoreInformation route={route} onClose={() => setShowModal(false)} />
      </Popup>
      <Toaster
        onClose={() => setToats(false)}
        toastType="success"
        show={toast}
      />
      <Toaster
        onClose={() => setMissingSize(false)}
        toastType="missing-size"
        show={missingSize}
      />
    </div>
  );
};

export default ProductDetails;

const image = [defaultImage];
