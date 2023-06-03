import blob from "../assets/blobs/blobProductDetails.svg";
import Image from "next/image";
import image from "../assets/img/chaussons-en-cuir-souple-pour-enfants-collection-fille-rose-le-chat-a-la-une.webp";
import dashMobil from "../assets/blobs/dash-product-mobil.svg";
import dashSm from "../assets/blobs/dash-sm.svg";
import dashMd from "../assets/blobs/dash-md.svg";
import dashLg from "../assets/blobs/dash-lg.svg";
import dashXl from "../assets/blobs/dash-xl.svg";
import BestProductInfo from "../components/BestProductInfo";
import cat from "../assets/icon/cat.svg";

const HomeProductDetail = ({...props}) => {
  return (
    <section className="bg-wave-top relative w-full px-6 lg:px-16 xl:px-20 2xl:px-32 grid lg:grid-cols-2 spacing">
      <div className="relative mx-auto transition-all duration-200 ease-in-out w-[88vw] h-[88vw] md:w-[60vw] md:h-[60vw] lg:w-[50vw] lg:h-[50vw] lg:translate-x-[-25%]">
        <Image src={blob} alt="" layout="fill" />
        <div className="sm:hidden absolute w-[46vw] h-[10vw] md:w-[31vw] md:h-[7vw] top-[2%] left-[24%] lg:w-[62%] lg:h-[12%] z-10">
          <Image className="md:hidden" src={dashMobil} alt="" layout="fill" />
        </div>
        <div className="absolute hidden sm:block md:hidden w-[46vw] h-[10vw] top-[2%] left-[24%] z-10">
          <Image src={dashSm} alt="" layout="fill" />
        </div>
        <div className="absolute hidden md:block lg:hidden  w-[31vw] h-[7vw] top-[2%] left-[24%] z-10">
          <Image src={dashMd} alt="" layout="fill" />
        </div>
        <div className="absolute hidden lg:block xl:hidden top-[2%] left-[22%] w-[28vw] h-[6vw] z-10">
          <Image src={dashLg} alt="" layout="fill" />
        </div>
        <div className="absolute hidden xl:block top-[3%] left-[22%] w-[28vw] h-[6vw] z-10">
          <Image src={dashXl} alt="" layout="fill" />
        </div>
        <div className="absolute w-[88vw] h-[88vw] md:w-[60vw] md:h-[60vw] lg:w-full lg:h-full top-[10px] left-[-5px] transition-all duration-200 ease-in-out ">
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 865 773"
            fill="none"
            fillRule="evenodd"
            clipRule="evenodd"
            strokeLinejoin="round"
            xmlns="http://www.w3.org/2000/svg"
          >
            <clipPath id="blobProduct">
              <path d="M753.547 660.327C687.139 723.877 598.573 757.132 509.414 768.242C420.839 779.935 331.671 769.482 247.738 732.804C164.387 695.542 86.2697 632.636 41.3605 546.406C-3.54897 459.593 -15.2504 350.038 24.9257 267.851C65.1018 185.664 157.155 130.846 249.212 82.4374C340.686 34.0294 432.162 -7.38551 520.746 1.3186C609.33 10.0227 695.021 68.8458 758.575 145.161C822.711 222.059 864.71 316.449 864.167 410.275C863.624 504.1 819.956 597.361 753.547 660.327Z" />
            </clipPath>
            <image
              href={props.bestProduct[0].images[0].src}
              width="100%"
              height="100%"
              clipPath="url(#blobProduct)"
              preserveAspectRatio="xMidYMid slice"
            />
          </svg>
        </div>
      </div>
      <div className="self-center justify-self-center lg:justify-self-start max-w-[560px]">
        <BestProductInfo
          shoesSizes={props.shoesSizes}
          bestProduct={props.bestProduct}
        />
      </div>
      <div className="absolute hidden xl:block bottom-[-1%] right-32 w-[12.5vw] h-[12vw]">
        <Image src={cat} alt="" />
      </div>
    </section>
  );
};

export default HomeProductDetail;
