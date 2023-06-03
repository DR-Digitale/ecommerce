import React, { useContext, useEffect, useState } from "react";
import Icon from "./Icon";
import Button from "./Button";
import Link from "next/link";
import Welcome from "./Welcome";
import SearchNav from "./SearchNav";
import { useRouter } from "next/router";
import ButtonLogin from "./login-btn";
import { CartContext } from "../utils/useProvider";

const NavBar = () => {
  const [menuContent, setMenuContent] = useState("");
  const [open, setOpen] = useState(false);
  const [ cart, setCart ] = useContext(CartContext);
  const { asPath, pathname } = useRouter();

  useEffect(() => {
    setOpen(false);
  }, [asPath]);

  return (
    <div
      className={`fixed w-full lg:w-auto flex-col lg:flex-row bottom-0 lg:bottom-auto lg:top-12 left-0 bg-grey-lightest z-50 lg:rounded-r-[32px] overflow-hidden transition-all duration-500 ease-in-out ${
        open
          ? "lg:min-w-[520px] min-h-min rounded-t-[32px] lg:rounded-tl-none "
          : "lg:min-w-0 min-h-0 lg:max-h-max"
      } ${pathname === "/auth/signin" ? "hidden" : "flex"}`}
    >
      <div className="flex w-full lg:w-auto lg:flex-col justify-around lg:justify-center lg:items-center gap-4 bg-white p-4 order-1 lg:order-first">
        <Link href={"/"}>
          <a className="w-10 h-10 bg-peps-major flex items-center justify-center text-white rounded-full">
            L
          </a>
        </Link>
        <Button
          ariaLabel="menu"
          className="w-10 h-10 flex items-center justify-center"
          onClickFunction={() => {
            setMenuContent("infos");
            if (menuContent === "infos") {
              setOpen(false);
              setMenuContent("");
            } else {
              setOpen(true);
            }
          }}
        >
          <Icon
            icon={open ? "menuOpen" : "menuClosed"}
            className={`${
              menuContent === "infos" && "text-accent"
            } button-hover`}
            size={24}
          />
        </Button>
        <Button
          className="w-10 h-10 flex items-center justify-center"
          ariaLabel="search"
          onClickFunction={() => {
            setMenuContent("search");
            if (menuContent === "search") {
              setOpen(false);
              setMenuContent("");
            } else {
              setOpen(true);
            }
          }}
        >
          <Icon
            icon="search"
            className={`${
              menuContent === "search" && "text-accent"
            } button-hover`}
            size={24}
          />
        </Button>
        <ButtonLogin />
        <Link href="/commode">
          <a className="w-10 h-10 flex items-center justify-center">
            <Icon icon="drawer" className="button-hover" size={24} />
          </a>
        </Link>
        <Link href="/panier">
          <a className="w-10 h-10 flex items-center justify-center">
            <Icon
              icon={
                cart
                  ? "shoppingBagNotif"
                  : "shoppingBag"
              }
              className="button-hover"
              size={24}
            />
          </a>
        </Link>
      </div>
      <div
        className={`w-full overflow-hidden transition-all duration-500 ease-in-out lg:py-10 px-8 ${
          open ? "py-10 lg:px-12 opacity-1" : "opacity-0 lg:px-0"
        }`}
      >
        {menuContent === "infos" && <Welcome />}
        {menuContent === "search" && <SearchNav />}
      </div>
    </div>
  );
};

export default NavBar;
