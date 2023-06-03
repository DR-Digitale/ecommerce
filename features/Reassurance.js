import Image from "next/image";
import expedition from "../assets/icon/expedition.svg";
import satisfied from "../assets/icon/satisfy.svg";
import secure from "../assets/icon/secure.svg";
import top from "../assets/texture/top.svg";
import bottom from "../assets/texture/bottom.svg";
import cat from "../assets/icon/cat.svg";
import { useContext } from "react";
import { ReRenderContext } from "../utils/useProvider";
import { ReassuranceSlide } from "../containers/Slider";
import Icon from "../components/Icon";
import wire from "../assets/texture/wire.svg";

const Reassurance = ({...props}) => {
  const reRender = useContext(ReRenderContext);
  return (
    <section className="pb-16 md:pb-32 lg:pb-64 relative overflow-hidden">
      {props.background && (
          <div className="relative w-full h-[176px] -z-10 lg:hidden overflow-hidden">
            <Image src={top} alt="Acheter des chaussons en cuirs souple" layout="fill" objectFit="cover" />
            <div className="absolute min-w-[75px] top-[45%] right-8 sm:top-[37%] xl:hidden md:top-[30%] md:right-16 w-[12.5vw] h-[12vw]">
              <Image src={cat} alt="Vente de chaussons en cuirs souple" />
            </div>
          </div>
        )}
      {!props.background && (
        <div className="hidden lg:block absolute top-[23%] left-0 w-[100vw] h-[2.50vw]">
          <Image src={wire} alt="" layout="fill" />
        </div>
      )}
      <div
        className={`relative grid lg:grid-cols-3 lg:pt-16 ${
          props.background && "bg-background"
        }`}
      >
        {reRender > 768 ? (
          <>
            {data.map((item) => (
              <div
                className="flex items-center flex-col sm:flex-row lg:flex-col gap-10 lg:justify-center p-8"
                key={item.id}
              >
                <div className="w-[190px] h-[181px] relative mb-2">
                  <Image src={item.icon} alt="" layout="fill" />
                </div>
                <div className="p-8">
                  <p className="text-accent font-semibold pb-4">{item.text1}</p>
                  <p className="text-grey-darker">{item.text2}</p>
                </div>
              </div>
            ))}
          </>
        ) : (
          <>
            <ReassuranceSlide slideName="reassurance">
              {data.map((item) => (
                <div
                  className="flex items-center flex-col sm:flex-row gap-10 justify-center p-8"
                  key={item.id}
                >
                  <div className="w-[190px] h-[181px] relative mb-2">
                    <Image src={item.icon} alt="" layout="fill" />
                  </div>
                  <div className="p-8">
                    <p className="text-accent font-semibold pb-4">
                      {item.text1}
                    </p>
                    <p className="text-grey-darker">{item.text2}</p>
                  </div>
                </div>
              ))}
            </ReassuranceSlide>
            <div className="flex gap-4 justify-center items-center">
              <div className="prev-reassurance flex items-center justify-center">
                <Icon icon="arrowLeft" size={24} />
              </div>
              <div className="next-reassurance flex items-center justify-center">
                <Icon icon="arrowRight" size={24} />
              </div>
            </div>
          </>
        )}
      </div>
      {props.background && (
        <div className="relative w-full h-[176px] lg:h-[242px] -z-10">
          <Image src={bottom} alt="" layout="fill" objectFit="cover" />
        </div>
      )}
    </section>
  );
};

export default Reassurance;

const data = [
  {
    id: 1,
    icon: expedition,
    text1: "Expédition le jour même",
    text2: "Livraison rapide sous 48H.",
  },

  {
    id: 2,
    icon: satisfied,
    text1: "Satisfait ou remboursé",
    text2: "Échange gratuit sous 15 jours.",
  },
  {
    id: 3,
    icon: secure,
    text1: "Paiement 100% Sécurisé",
    text2: "Par chèque, Carte Bancaire, Paypal.",
  },
];
