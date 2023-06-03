import Image from "next/image";
import React, { useRef, useEffect } from "react";


const ContactCard = ({ image, alt, title, href, label, target }) => {
  const aRef = useRef();
  return (
    <div className="p-10 text-center border border-halftone rounded-[16px] flex flex-col justify-center items-center">
      <div className="relative pb-8">
        <Image src={image} alt={alt} />
      </div>
      <span className="text-foreground pb-4 inline-block">{title}</span>
      <a
        className="text-grey-darker whitespace-pre-line link-hover"
        href={href}
        target={target}
        ref={aRef}
        rel={aRef?.current?.target === "_blank" ? "noreferrer" : ""}
      >
        {label}
      </a>
    </div>
  );
};

export default ContactCard;
