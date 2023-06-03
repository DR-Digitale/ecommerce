import Image from "next/image";
import React from "react";

const Card = ({ icon, title, text }) => {
  return (
    <div className="p-8 bg-white rounded-[16px] ">
      {icon && (
        <div className="relative mb-8 w-20 h-20">
          <Image src={icon} alt="" layout="fill" />
        </div>
      )}
      {title && <h5 className="pb-4 font-semibold">{title}</h5>}
      {text && <p className="font-medium">{text}</p>}
    </div>
  );
};

export default Card;
