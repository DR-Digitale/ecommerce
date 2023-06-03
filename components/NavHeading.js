import React from "react";
import Link from "next/link";

const NavHeading = ({...props}) => {
  return (
    <Link href={props.link} passHref>
      <div className={props.className} color={props?.color}>
        {props.children}
      </div>
    </Link>
  );
};

export default NavHeading;
