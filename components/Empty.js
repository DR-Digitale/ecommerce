import Image from "next/image";
import Link from "next/link";
import React from "react";
import Icon from "./Icon";
import top from "../assets/texture/top-footer.svg";

const Empty = ({image, textLine1, textLine2, labelButton, iconButtonLeft, iconButtonRight}) => {
  return (
    <div className="relative min-h-[100vh] flex justify-center items-center bg-page">
      <div className="flex items-center gap-16">
        <div className="relative w-[304px] h-[256px]">
          <Image src={image} alt="" layout="fill" />
        </div>
        <div>
          <h3 className="pb-8 text-foreground">
            {textLine1} <br />
            <span className="text-gradient">{textLine2}</span>
          </h3>
          <Link href="/produits">
            <a className="flex items-center gap-4 button-accent">
              {iconButtonLeft && <Icon icon={iconButtonLeft} size={24} />}
              {labelButton}
              {iconButtonRight && <Icon icon={iconButtonRight} size={24} />}
            </a>
          </Link>
        </div>
      </div>
      <div className="absolute w-full h-[7.3vw] -bottom-1">
        <Image src={top} alt="" layout="fill" />
      </div>
    </div>
  );
};

export default Empty;
