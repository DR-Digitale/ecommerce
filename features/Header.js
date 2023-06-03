import { Heading, Search } from "../components";
import Navbar from "../containers/Navbar";
import Image from "next/image";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faUser } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <header className="flex justify-between items-center max-w-7xl mx-auto py-4">
      <div className="text-4xl">Logo</div>
      {/* <div className="relative">
        <Image src="" alt="" layout="fill" objectFit="cover"/>
      </div> */}
      <Navbar />
      <div className="flex items-center gap-4">
        <Search />
        <div className=" h-5 w-5 flex items-center justify-center">
          <Icon icon={faUser} className="h-full w-full" />
        </div>
        <div className="h-5 w-5 items-center justify-center">
          <Icon icon={faCartShopping} className="h-full w-full" />
        </div>
      </div>
    </header>
  );
};

export default Header;