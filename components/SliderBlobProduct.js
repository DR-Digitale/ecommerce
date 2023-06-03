/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import blob from "../assets/blobs/blobProduct.svg";
import dashed from "../assets/blobs/dashed1.svg";
import { AnimatePresence, motion } from "framer-motion";
import { useContext } from "react";
import blobBg from "../assets/blobs/blobProductBg.svg";
import { ReRenderContext } from "../utils/useProvider";

const variants = {
  initial: (direction) => {
    return {
      opacity: 0,
      rotate: direction > 0 ? -10 : 10,
    };
  },
  animate: {
    opacity: 1,
    rotate: 0,
  },
  exit: (direction) => {
    return {
      opacity: 0,
      rotate: direction > 0 ? 10 : -10,
    };
  },
};

const SliderBlobProduct = ({...props}) => {
  const frontRotation = [0, 15, 45, 75];
  const backRotation = [0, 5, 35, 65];
  const width = useContext(ReRenderContext);

  let direction = props.direction;
  return (
    <div className="slider-blob relative w-full h-full overflow-visible transition-all duration-500 ease-in-out md:translate-x-[10%] xl:translate-x-0 scale-[1.15] sm:scale-100 lg:scale-[1.10] xl:scale-110 2xl:scale-[1.25] pointer-events-none ">
      <div
        className={`absolute w-[175%] h-[175%] top-[-58%] left-[-50%] xl:w-[150%] xl:h-[150%] xl:top-[-41%] xl:left-[-28%] blur pointer-events-none rotate-${
          backRotation[props.index]
        } transition-all duration-700 ease-blobProduct pointer-events-none`}
      >
        <Image src={blobBg} alt="" layout="fill" priority />
      </div>
      {width < 1080 && (
        <div
          className={`absolute w-[175%] h-[175%] top-[-58%] left-[-45%] blur pointer-events-none rotate-${
            backRotation[props.index]
          } transition-all duration-700 ease-blobProduct pointer-events-none `}
        >
          <Image src={blobBg} alt="" layout="fill" priority />
        </div>
      )}
      <div className={`blob main-blob relative  w-full h-full !transform `}>
        <img
          className={`absolute w-full h-full transition-all duration-700 ease-blobProduct rotate-${
            backRotation[props.index]
          }`}
          src={blob.src}
          alt=""
        />
        <div className="blob absolute  top-[-10px] right-[-5px] transition-all duration-200 ease-in-out w-full h-full">
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 1536 1536"
            fill="none"
            fillRule="evenodd"
            clipRule="evenodd"
            strokeLinejoin="round"
            xmlns="http://www.w3.org/2000/svg"
          >
            <clipPath
              id="svgClip"
              className={`${
                props.clipPathClass && props.clipPathClass
              } rotate-${
                frontRotation[props.index]
              } transition-all duration-700 ease-blobProduct origin-center`}
            >
              <path
                d="M1180.26 300.109C1316.03 393.566 1453.7 501.827 1482.18 632.296C1510.67 763.691 1429.96 917.292 1339.77 1062.57C1249.57 1206.92 1148.92 1342.01 1016 1388.28C884.027 1435.47 717.872 1394.75 554.566 1339.24C392.209 1284.64 231.751 1216.17 139.654 1093.1C47.557 970.035 23.8206 793.301 73.1923 647.101C121.614 501.827 244.094 387.088 374.169 292.707C503.295 198.325 640.966 124.3 775.789 127.076C911.561 128.926 1044.48 206.653 1180.26 300.109Z"
                fill="#FFFFFF59"
              />
            </clipPath>
            <AnimatePresence initial={false} custom={direction}>
              <motion.image
                key={`imageBubble-${frontRotation[props.index]}`}
                variants={variants}
                animate="animate"
                initial="initial"
                exit="exit"
                custom={direction}
                transition={{ duration: 0.8 }}
                href={props.image}
                width="100%"
                height="100%"
                clipPath="url(#svgClip)"
                preserveAspectRatio="xMidYMid slice"
              />
            </AnimatePresence>
          </svg>
        </div>
        {/* <div className="absolute hidden lg:block w-[378px] h-[384px] z-10  bottom-[-20px] lg:right-[20px] xl:right-[150px]">
          <Image src={dashed} alt="" layout="fill" />
        </div> */}
      </div>
      {/* <div className="flex gap-4 items-center absolute bottom-[30%] right-32">
        <Button
          className="w-[3.65vw] h-[3.65vw] bg-background rounded-full p-4 hover:bg-white transition-all duration-300 ease-"
          onClickFunction={props.leftButton}
        >
          <Icon icon="arrowLeft" />
        </Button>
        <Button
          className="w-[3.65vw] h-[3.65vw] bg-background rounded-full p-4 hover:bg-white transition-all duration-300 ease-out"
          onClickFunction={props.rightButton}
        >
          <Icon icon="arrowRight" />
        </Button>
      </div> */}
    </div>
  );
};

export default SliderBlobProduct;
