import Image from "next/image";
import blob from "../assets/blobs/blobPiece.svg";
import blobMobile from "../assets/blobs/blob-top-left.svg";
import Welcome from "../components/Welcome";
import CallToAction from "../components/CallToAction";
import SliderBlob from "../components/SliderBlob";
import image1 from "../assets/img/chaussons-en-cuir-souple-fabriques-en-europe.webp";
import image2 from "../assets/img/chaussons-en-cuir-souple-assembles-a-la-main.webp";
import image3 from "../assets/img/chaussons-en-cuir-souple-conformes-aux-normes-europeennes.webp";
import image4 from "../assets/img/chaussons-en-cuir-souple-conseilles-par-les-pediatres.webp";
import { useState } from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const next = () => {
    setDirection(1);
    if (index === data.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };
  const prev = () => {
    setDirection(-1);
    if (index === 0) {
      setIndex(data.length - 1);
    } else {
      setIndex(index - 1);
    }
  };

  return (
    <section className="h-screen w-screen relative overflow-visible">
      <div className="hidden absolute lg:block lg:w-[530px] lg:h-[530px] w-[1052px] h-[1080px] 2xl:-top-0 2xl:-left-0 -z-10">
        <Image src={blob} alt="" layout="fill" />
      </div>
      <div className="blob-deco absolute w-[99vh] h-[90vh] top-[24%] left-[-40%] md:top-[1%] md:left-[-16%] -z-10 lg:hidden">
        <Image src={blobMobile} alt="" layout="fill" />
      </div>
      <div className="hero-grid">
        <div className="welcome hidden lg:block">
          <Welcome />
        </div>
        <CallToAction
          className="pt-8 lg:pl-32"
          index={index}
          title={
            index < 0 || index > data.length - 1
              ? data[0].title
              : data[index].title
          }
          teaser="Chaussons en cuir souple pour enfants"
          text={
            index < 0 || index > data.length - 1
              ? data[0].text
              : data[index].text
          }
          url="/produits"
          icon="sandals"
          buttonLabel="Trouver chausson à son pied"
        />
        <SliderBlob
          direction={direction}
          index={index}
          image={
            index < 0 || index > data.length - 1
              ? data[0].image
              : data[index].image
          }
          leftButton={prev}
          rightButton={next}
        />
      </div>
    </section>
  );
};

export default Hero;

const data = [
  {
    image: image1.src,
    title: "Fabriqués en Europe",
    text: "Tous nos chaussons sont des produits certifiés fabriqués en Pologne à partir de matériaux de haute qualité et de matières premières naturelles.",
  },
  {
    image: image2.src,
    title: "Assemblé à la main",
    text: 'Souples et respirants, nos chaussons pour "Fille" et "Garçon" en matière minérale satisferont aussi bien les mamans que les enfants avec leur motifs joyeux ou leur couleurs unies.',
  },
  {
    image: image3.src,
    title: "Conformes aux normes européennes",
    text: "Grâce à la semelle antidérapante en cuir suédé texturé et elastique de maintien à la cheville, nos chaussons sont conformes aux normes européennes EN ISO 17075 et EN ISO 17072-1.",
  },
  {
    image: image4.src,
    title: "Conseillés par les pediatres",
    text: "Nos chaussons en cuir s'adaptent parfaitement au pied de l'enfant favorisant le bon développement du pied à la maison comme à la maternelle. Fabriqués avec un cuir épais et souple, ils répondent aux normes de puericulture...",
  },
];
