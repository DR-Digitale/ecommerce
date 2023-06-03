import Image from "next/image";
import Button from "./Button";
import Icon from "./Icon";
import family from "../assets/img/familly.svg";

const SearchNav = () => {
  return (
    <>
      <h4 className="pb-8">Chercher une paire...</h4>
      <div className="flex items-center pb-8">
        <input
          className="h-14 border-none rounded-l-[64px] w-full shadow-md px-8"
          type="search"
          name="search"
          id="seach"
          placeholder="Le nom de chausson ?"
        />
        <Button className="flex items-center justify-center bg-accent text-white rounded-r-[64px] h-14 p-5">
          <Icon icon="arrowRight" size={20} />
        </Button>
      </div>
      <div className="relative w-full h-[100px]">
        <Image src={family} alt="" layout="fill" />
      </div>
    </>
  );
};

export default SearchNav;
