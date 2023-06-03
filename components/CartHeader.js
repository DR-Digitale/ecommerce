import Image from "next/image";
import Icon from "./Icon";

const CartHeader = ({top, blob, logo, quantity}) => {
  return (
    <>
      <div className="sticky top-0 left-0 w-full h-[7.29vw] z-20">
        <Image src={top} alt="" layout="fill" />
        <div className="absolute top-[3.125vw] left-[8%] z-40 px-14 text-foreground bg-white rounded-[16px] shadow-[0px_4px_4px_rgba(0,0,0,0.08)]">
          <p className="flex items-center gap-4 border-b border-foreground py-4">
            <Icon icon="sandals" size={24} /> Les chaussons que j&apos;ai
            prévu d&apos;acheter !
          </p>
        </div>
      </div>
      <div className="fixed top-10 right-9 w-[12.6vw] h-[12.6vw] z-20">
        <Image src={logo} alt="" layout="fill" />
        <span className="absolute inline-flex items-center justify-center top-[10px] right-[15px] w-12 h-12">
          <Image src={blob} alt="" layout="fill" />
          <span className="relative z-10 text-white">{quantity}</span>
        </span>
      </div>
    </>
  );
};

export default CartHeader;
