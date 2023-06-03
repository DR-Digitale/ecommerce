import React, { useContext } from "react";
import Card from "../containers/Card";
import location from "../assets/icon/location.svg";
import batiment from "../assets/icon/batiments.svg";
import recherches from "../assets/icon/recherches.svg";
import certification from "../assets/icon/certification.svg";
import foots from "../assets/icon/foot.svg";
import foot from "../assets/icon/pied.svg";
import { ReRenderContext } from "../utils/useProvider";
import { SliderGuarantee } from "../containers/Slider";

const Guarantee = ({...props}) => {
  const width = useContext(ReRenderContext);
  return (
    <div className="linear-background overflow-hidden sm:overflow-visible">
      {width >= 640 ? (
        <div className="wrapper grid grid-cols-2 xl:grid-cols-3 gap-8 translate-y-[-10%] lg:translate-y-[-16%] xl:translate-y-[-25%] 2xl:translate-y-[-35%] 3xl:translate-y-[-40%]">
          {reassurance.map((item) => (
            <Card
              key={item.id}
              icon={item.icon}
              title={item.title}
              text={item.text}
            />
          ))}
        </div>
      ) : (
        <div className="wrapper pb-16">
          <SliderGuarantee className="">
            {reassurance.map((item) => (
              <Card
                key={item.id}
                icon={item.icon}
                title={item.title}
                text={item.text}
              />
            ))}
          </SliderGuarantee>
        </div>
      )}
    </div>
  );
};

export default Guarantee;

const reassurance = [
  {
    id: 1,
    icon: location.src,
    title: "Fabriqués en Europe",
    text: "Tous nos chaussons sont conformes aux normes européennes.",
  },
  {
    id: 2,
    icon: batiment.src,
    title: "Assemblés à la main",
    text: "Les chaussons vendus dans la boutique sont fabriqués en atelier artisanalement en Pologne.",
  },
  {
    id: 3,
    icon: recherches.src,
    title: "Conseillés par les pédiatres",
    text: "Le cuir utilisé ne représente aucun danger si votre bébé porte ses chaussons à sa bouche.",
  },
  {
    id: 4,
    icon: certification.src,
    title: "Cuir italien de qualité",
    text: "Nous avons fait le choix d’un tannage minéral du cuir d’une très grande qualité à la fois souple et résistant. Le cuir a pour propriété d’être thermorégulateur c’est dire qu’ils peuvent être portés aussi bien en été qu’en hiver.",
  },
  {
    id: 5,
    icon: foots.src,
    title: "Semelle antidérapente",
    text: "Confectionnée en cuir suédé, elle permet aux enfants d’avoir une sensation de marcher pied-nu et favorise le développent naturel des muscles des pieds, l’équilibre et l’apprentissage de la marche. Votre enfant pourra se déplacer sans aucune gêne et avec plus de facilité.",
  },
  {
    id: 6,
    icon: foot.src,
    title: "Facile  à enfiler !",
    text: "L’élastique de maintien à la cheville permet de garder les chaussons au pied en toute circonstance. Les enfant peuvent marcher ou courir en toute tranquillité sans que le cheville ne soit comprimée.",
  },
];
