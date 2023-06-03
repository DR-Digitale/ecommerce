import Image from "next/image";
import blob from "../assets/blobs/blobAbout.svg";
import quote from "../assets/icon/quote.svg";
import image from "../assets/img/charline-romero-commercante-le-petit-monde-des-libellules-boutique-chaussons-en-cuir-2.webp";
import CallToAction from "../components/CallToAction";
import bottom from "../assets/texture/bottom-mobile.svg";
import topMobile from "../assets/texture/top-mobile.svg";
import bottomMd from "../assets/texture/bottom-md.svg";
import monkey from "../assets/icon/monkey.svg";

const About = () => {
  return (
    <section className="spacing md:relative">
      <div className="absolute -top-[10%] hidden lg:block lg:right-16 2xl:right-32 z-10 w-[192px] h-[157px] ">
        <Image src={monkey} alt="" layout="fill" />
      </div>
      <div className="hidden relative w-full h-[12vw] lg:block lg:top-1">
        <Image src={bottomMd} alt="" layout="fill" />
      </div>
      <div className="grid lg:grid-cols-2 lg:bg-background lg:px-16 2xl:px-32 lg:py-8 2xl:p-16">
        <div className="relative transition-all duration-200 ease-in-out w-[90vw] h-[90vw] md:w-[55vw] md:h-[55vw] mx-auto translate-y-aboutMobile sm:translate-y-aboutSm z-10 lg:absolute lg:top-[-10%] lg:left-[-10%] lg:max-w-[709px] lg:max-h-[681px] 2xl:max-h-[850px] 2xl:max-w-[818px] 3xl:top-[-5%] 3xl:left-[-5%]">
          <Image src={blob} alt="" layout="fill" />
          <div className="absolute w-[90vw] h-[90vw] top-[15px] right-[12px] transition-all duration-200 ease-in-out md:w-[55vw] md:h-[55vw] lg:max-w-[709px] 2xl:max-h-[850px] 2xl:max-w-[818px] lg:max-h-[681px]">
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 851 819"
              fill="none"
              fillRule="evenodd"
              clipRule="evenodd"
              strokeLinejoin="round"
              xmlns="http://www.w3.org/2000/svg"
            >
              <clipPath id="aboutClip">
                <path
                  d="M847.997 232.248C831.088 75.491 561.303 13.8497 428.524 2.62365C9.05121 -35.647 43.1944 353.183 2.54775 619.547C-38.0989 885.91 418.927 831.938 565.875 759C771.375 657 869.133 428.193 847.997 232.248Z"
                  fill="#88319C"
                />
              </clipPath>
              <image
                href={image.src}
                width="100%"
                height="100%"
                clipPath="url(#aboutClip)"
                preserveAspectRatio="xMidYMid slice"
              />
            </svg>
          </div>
          <div className="absolute min-w-[60px] min-h-[60px] top-[5%] right-[9%] w-[19vw] h-[16vw] md:w-[12vw] md:h-[10vw] md:right-[5%] md:top-[2%]">
            <Image src={quote} alt="" layout="fill" />
          </div>
        </div>
        <div className="relative bg-background pt-32 md:pt-16 lg:pt-0 md:self-center lg:col-start-2">
          <div className="absolute top-[5%] lg:hidden right-0 z-10 w-[120px] h-[80px] ">
            <Image src={monkey} alt="" layout="fill" />
          </div>
          <div className="absolute -z-10 -top-12 left-0 w-full h-[20vw] md:hidden">
            <Image src={bottom} alt="" layout="fill" />
          </div>
          <div className="hidden absolute -z-10 -top-[19vw] left-0 w-full h-[30vw] md:block lg:hidden">
            <Image src={bottomMd} alt="" layout="fill" />
          </div>
          <CallToAction
            index={"about-1"}
            title={"Le petit mot de la commerçante"}
            teaser={
              "Des chaussons qui favorisent le développement naturel des pieds."
            }
            text={
              "En plus de respecter la musculature des pieds des enfants, je propose des chaussons rigolos, colorés, pratiques et confortables. Découvrez ma collection de chaussons en cuir souple qui  remplissent tous mes critères de sélection, originalité et qualité de cuir irréprochable."
            }
            url={"/produits"}
            icon={"shop"}
            buttonLabel={"Voir la collection de chaussons"}
          />
        </div>
      </div>
      <div className="relative w-full h-[14vw] top-[-1vw] -z-10">
        <Image src={topMobile} alt="" layout="fill" />
      </div>
    </section>
  );
};

export default About;
