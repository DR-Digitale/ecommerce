/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import blob from "../assets/blobs/blobHero.svg";
import sticker from "../assets/img/logo-sticker.svg";
import slipper from "../assets/img/logo-slipper.svg";
import dashed from "../assets/blobs/dashed1.svg";
import Button from "./Button";
import Icon from "./Icon";
import { AnimatePresence, motion } from "framer-motion";

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

const SliderBlob = ({...props}) => {
  const frontRotation = [0, 15, 45, 75];
  const backRotation = [0, 5, 35, 65];
  let direction = props.direction;
  return (
    <motion.div className="slider-blob relative w-full h-[60vw] md:h-[36vh] lg:h-auto overflow-hidden sm:overflow-visible transition-all duration-200 ease-in-out">
      <motion.div
        className={`blob main-blob relative transition-all duration-200 ease-in-out w-[115vw] h-[115vw] translate-x-[3%] translate-y-[-36%] sm:translate-x-[12%] md:w-[90vw] md:h-[90vw] lg:w-[80vw] lg:h-[80vw] md:translate-x-[36%] lg:translate-x-[-8%] xl:translate-x-[-6%] !transform pointer-events-none`}
      >
        <AnimatePresence initial={false} custom={direction}>
          <motion.img
            key={`backBubble-${backRotation[props.index]}`}
            initial={{
              rotate:
                direction > 0
                  ? backRotation[props.index - 1]
                  : backRotation[props.index + 1],
            }}
            animate={{
              rotate:
                direction > 0
                  ? backRotation[props.index]
                  : backRotation[props.index],
            }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 15,
              mass: 1,
            }}
            className="absolute w-full h-full"
            src={blob.src}
            alt=""
          />
        </AnimatePresence>
        <motion.div className="blob absolute w-[115vw] h-[115vw] top-[-10px] right-[-5px] lg:-top-5 lg:left-2 transition-all duration-200 ease-in-out md:w-[90vw] md:h-[90vw] lg:w-[80vw] lg:h-[80vw]">
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 1381.58 1283"
            fill="none"
            fillRule="evenodd"
            clipRule="evenodd"
            strokeLinejoin="round"
            xmlns="http://www.w3.org/2000/svg"
          >
            <AnimatePresence initial={false} custom={direction}>
              <motion.clipPath
                key={`frontBubble-${frontRotation[props.index]}`}
                initial={{
                  rotate:
                    direction > 0
                      ? frontRotation[props.index - 1]
                      : frontRotation[props.index],
                }}
                animate={{
                  rotate:
                    direction > 0
                      ? frontRotation[props.index]
                      : frontRotation[props.index],
                }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 15,
                  mass: 1,
                }}
                id="svgClip"
                className={props.clipPathClass && props.clipPathClass}
              >
                <path d="M1019.27,258.39c108.18,76.52,217.88,165.17,240.58,272,22.69,107.58-41.61,233.35-113.48,352.3-71.87,118.2-152.06,228.81-258,266.69-105.15,38.64-237.55,5.31-367.67-40.15-129.36-44.7-257.22-100.77-330.6-201.54s-92.29-245.47-53-365.18C175.75,423.56,273.34,329.61,377,252.33c102.89-77.28,212.59-137.89,320-135.62C805.18,118.22,911.09,181.87,1019.27,258.39Z" />
              </motion.clipPath>
            </AnimatePresence>
            <AnimatePresence initial={false} custom={direction}>
              <motion.image
                key={`imageBubble-${frontRotation[props.index]}`}
                variants={variants}
                animate="animate"
                initial="initial"
                exit="exit"
                custom={direction}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 15,
                  mass: 1,
                }}
                href={props.image}
                width="100%"
                height="100%"
                clipPath="url(#svgClip)"
                preserveAspectRatio="xMidYMid slice"
              />
            </AnimatePresence>
          </svg>
        </motion.div>
        <div className="sticker-mobil absolute bottom-[15%] left-[2%] sm:bottom-[29%] sm:left-[-9%] md:left-[-4%] md:bottom-[29%] lg:left-[30px] lg:top-sticker xl:-left-[0] transition-all duration-200 ease-in-out">
          <div className="relative hidden sm:block md:hidden xl:block w-stickerMobil h-stickerMobil sm:w-[224px] sm:h-[224px] lg:w-[120px] lg:h-[120px] xl:w-[224px] xl:h-[224px]">
            <Image src={sticker} alt="" layout="fill" />
          </div>
          <div className="relative sm:hidden md:block xl:hidden w-stickerMobil h-stickerMobil sm:w-[224px] sm:h-[224px] lg:w-[120px] lg:h-[120px] xl:w-[224px] xl:h-[224px]">
            <Image src={slipper} alt="" layout="fill" />
          </div>
        </div>
        {/* <div className="absolute hidden lg:block w-[378px] h-[384px] z-10  bottom-[-20px] lg:right-[20px] xl:right-[150px]">
          <Image src={dashed} alt="" layout="fill" />
        </div> */}
        <div className="flex gap-4 items-center absolute bottom-[20%] right-[23rem] pointer-events-auto z-10">
          <Button
            className="w-[4.65vw] h-[4.65vw] xl:w-[3.65vw] xl:h-[3.65vw] bg-background rounded-full p-4 hover:bg-white transition-all duration-300 ease-out flex items-center justify-center"
            onClickFunction={props.leftButton}
          >
            <Icon icon="arrowLeft"/>
          </Button>
          <Button
            className="w-[4.65vw] h-[4.65vw] xl:w-[3.65vw] xl:h-[3.65vw] bg-background rounded-full p-4 hover:bg-white transition-all duration-300 ease-out flex items-center justify-center"
            onClickFunction={props.rightButton}
          >
            <Icon icon="arrowRight"/>
          </Button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default SliderBlob;
