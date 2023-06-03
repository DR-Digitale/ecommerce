import React from "react";
import Resume from "../components/Resume";
import blob from "../assets/blobs/blobContact.svg";
import image from "../assets/img/charline-romero-commercante-le-petit-monde-des-libellules-boutique-chaussons-en-cuir-2.webp";
import Image from "next/image";
import write from "../assets/icon/write.svg";
import call from "../assets/icon/call.svg";
import locate from "../assets/icon/locate.svg";
import ContactCard from "../components/ContactCard";
import topMobile from "../assets/texture/top-mobile.svg";
import ContactForm from "../components/ContactForm";

const Page = () => {
  return (
    <div className="pb-44">
      <div className="md:relative bg-background spacing">
        <div className="container pb-12">
          <div className="grid grid-cols-2 gap-[5vw]">
            <div className="absolute transition-all duration-200 ease-in-out w-[90vw] h-[90vw] md:w-[55vw] md:h-[55vw] mx-auto  z-10 translate-x-[-10%] lg:max-w-[709px] lg:max-h-[681px] 2xl:max-h-[850px] 2xl:max-w-[818px]">
              <Image src={blob} alt="" layout="fill" />
              <div className="absolute w-[90vw] h-[90vw] top-[15px] right-[12px] transition-all duration-200 ease-in-out md:w-[55vw] md:h-[55vw] lg:max-w-[709px] 2xl:max-h-[850px] 2xl:max-w-[818px] lg:max-h-[681px]">
                <svg
                  width="100%"
                  height="100%"
                  viewBox="0 0 851 819"
                  fill="none"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  strokeLinejoin="round"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <clipPath id="aboutClip">
                    <path
                      d="M847.997 232.248C831.088 75.491 561.303 13.8497 428.524 2.62365C9.05121 -35.647 43.1944 353.183 2.54775 619.547C-38.0989 885.91 418.927 831.938 565.875 759C771.375 657 869.133 428.193 847.997 232.248Z"
                      fill="#E6D3C2;
                  "
                    />
                  </clipPath>
                  <image
                    href={image.src}
                    width="100%"
                    height="100%"
                    clipPath="url(#aboutClip)"
                    preserveAspectRatio="xMidYMid slice"
                  />
                </svg>
              </div>
            </div>
            <Resume
              className="pt-24 lg:col-start-2"
              tag={content.tag}
              h1={content.title}
              text={content.text}
              buttons={content.buttons}
            />
          </div>
        </div>
      </div>
      <div className="relative w-full h-[14vw] top-[-1vw] -z-10">
        <Image src={topMobile} alt="" layout="fill" />
      </div>
      <div className="text-center">
        <h2 className="pb-8">Me contacter</h2>
        <p className="text-grey-darker pb-12">
          Je suis à votre écoute pour vous conseiller.
        </p>
        <div className="grid grid-cols-3 gap-8 max-w-7xl mx-auto pb-20">
          {cards.map((card) => (
            <ContactCard
              key={`card-${card.id}`}
              image={card.image}
              alt={card.alt}
              title={card.title}
              href={card.href}
              label={card.label}
              target={card.target}
            />
          ))}
        </div>
      </div>
      <ContactForm />
    </div>
  );
};

export default Page;

const content = {
  tag: "Le petit monde de Charline",
  title: "Maman de 3 magnifiques enfants et fille de commerçants",
  text: "Depuis mon plus jeune âge, la vente fait partie de ma vie, j’ai toujours aimé le contact, c’est pourquoi en 2015, j’ai décidé de mettre à profit ma passion pour la vente, en créant cette boutique en ligne de chaussons en cuir souple : Le petit monde des libellules. \n \n Je voulais proposer à mes très jeunes clients des chaussons rigolos, colorés, pratiques et confortables mais surtout qui favorisent un développement naturel des pieds, c’est pourquoi les chaussons en cuir souple remplissaient tous les critères de sélection grâce à mon fabricant qui a su me proposer une collection originale et d’une qualité de cuir irréprochable.",
  buttons: [
    {
      id: 1,
      style: "button-accent",
      href: "tel:+33",
      label: "M'appeler",
      labelIcon: "call",
    },
    {
      id: 2,
      style: "button-outline",
      href: "#contact",
      label: "M'écrire",
      labelIcon: "mail",
    },
  ],
};

const cards = [
  {
    id: 1,
    image: write,
    alt: "M'écrire un mail",
    title: "M'écrire",
    href: "contact:contact@lepetitmondedeslibellules.fr",
    label: "contact@lepetitmondedeslibellules.fr",
    target: "",
  },
  {
    id: 2,
    image: call,
    alt: "M'appeler",
    title: "M'appeler",
    href: "tel:+33",
    label: "06 68 19 53 67",
    target: "",
  },
  {
    id: 3,
    image: locate,
    alt: "Me situer",
    title: "Me situer",
    href: "https://goo.gl/maps/PMqQMJRfsjHnafoG6",
    label: "1 rue Du District - Vihiers \n 49310 LYS HAUT LAYON",
    target: "_blank",
  },
];
