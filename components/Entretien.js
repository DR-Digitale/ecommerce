import Image from "next/image";
import React from "react";
import Icon from "./Icon";
import wash from "../assets/icon/wash.svg";
import clean from "../assets/icon/clean.svg";
import forbidden from "../assets/icon/forbidden.svg";

const Entretien = () => {
  return (
    <div className="">
      <div className="flex gap-8 border-b border-grey-lighter">
        <div className="relative w-14 h-14">
          <Image src={wash} alt="" layout="fill" />
        </div>
        <div className="w-entretien pb-8">
          <h5 className="flex justify-between items-center gap-8 text-accent">
            <span className="w-[90%]">
              Comment entrenir les chaussons en cuir et conserver leur souplesse
              ?
            </span>
            <Icon icon="navArrowUp" size={24} />
          </h5>
          <p>
            Laver les chaussons à la main avec une lessive douce à 30° puis les
            laisser sécher naturellement à plat pendant 24 à 48h. Une fois secs,
            vous pouvez nourrir le cuir avec du lait spécial cuir ou du lait de
            toilette pour bébé afin de lui redonner de la souplesse.
          </p>
        </div>
      </div>
      <div className="flex gap-8 pt-8 border-b border-grey-lighter">
        <div className="relative w-14 h-14">
          <Image src={clean} alt="" layout="fill" />
        </div>
        <div className="w-entretien pb-8">
          <h5 className="flex justify-between items-center text-accent">
            <span className="w-[90%]">
              Comment assouplir la semelle pour la rendre antidérapante ?
            </span>
            <Icon icon="navArrowUp" size={24} />
          </h5>
          <p>
            Frottez-la avec une brosse pour le daim, autrement simplement dans
            vos mains.
          </p>
        </div>
      </div>
      <div className="flex gap-8 pt-8">
        <div className="relative w-14 h-14">
          <Image src={forbidden} alt="" layout="fill" />
        </div>
        <div className="w-entretien">
          <h5 className="flex justify-between items-center gap-8 text-accent">
            <span className="w-[90%]">
              Quelles sont les précautions à prendre ?
            </span>
            <Icon icon="navArrowUp" size={24} />
          </h5>
          <ul>
            <li className="flex items-center gap-2">
              Ne pas utiliser de sèche linge
            </li>
            <li className="flex items-center gap-2">
              Ne pas les faire tremper
            </li>
            <li className="flex items-center gap-2">
              Ne pas les poser sur le radiateur
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Entretien;
