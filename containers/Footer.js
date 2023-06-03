import Icon from "../components/Icon";
import slippers from "../assets/icon/slippers.svg";
import top from "../assets/texture/top-footer.svg";
import logo from "../assets/img/logo-sticker.svg";
import Image from "next/image";
import CtaLink from "../components/CtaLink";
import { useRouter } from "next/router";
import { FooterContext } from "../utils/useProvider";
import { useContext } from "react";

const Footer = () => {
  const { pathname } = useRouter();
  const footerType = useContext(FooterContext);

  return (
    <footer
      className={`pb-[76px] lg:pb-0 ${
        pathname === "/auth/signin" ? "hidden" : ""
      }`}
    >
      {footerType.footerType !== "empty" && (
        <div className="relative w-full h-[7.3vw] top-1">
          <Image src={top} alt="" layout="fill" />
          <div className="absolute top-[-120px] left-[15%] w-[224px] h-[224px]">
            <Image src={logo} alt="" layout="fill" />
          </div>
        </div>
      )}
      <div className="bg-background xs:px-6 md:px-10 lg:px-20 xl:p-0">
        <div className="w-full xl:w-[84%] mx-auto grid md:grid-cols-2 gap-[5.2vw] border-b border-grey-lighter py-20">
          <div className="px-6 xs:px-0">
            <h4>Le spécialiste du chausson en cuir souple</h4>
            <h5 className="text-accent pb-4">Le petit monde des libellules</h5>
            <p className="text-grey-darkest pb-12">
              Boutique en ligne de chaussons pour enfants en cuir souple d’une
              qualité irréprochable rigolos, colorés, pratiques et confortables
              qui favorisent le développement naturel des pieds.
            </p>
            <div className="flex items-center gap-4 pb-6">
              <div className="flex items-center justify-center text-foreground w-12 h-12 bg-white rounded-lg">
                <Icon icon="location" size={20} />
              </div>
              <div className="uppercase">
                <p>1 rue Du District – Vihiers</p>
                <p>49310 LYS HAUT LAYON</p>
              </div>
            </div>
            <div className="flex items-center gap-4 text-sm xs:text-base">
              <div className="flex items-center justify-center text-foreground w-12 h-12 bg-white rounded-lg">
                <Icon icon="getInTouch" size={20} />
              </div>
              <div>
                <a
                  className="block text-accent hover:text-surface transition-all duration-300 ease-out"
                  href="tel:+330668195367"
                >
                  06 68 19 53 67
                </a>
                <a
                  className="text-accent hover:text-surface transition-all duration-300 ease-out"
                  href="contact:contact@lepetitmondedeslibellules.fr"
                >
                  contact@lepetitmondedeslibellules.fr
                </a>
              </div>
            </div>
          </div>
          <div className="md:flex md:flex-col md:items-end">
            <div className="relative flex justify-center md:justify-end gap-4 items-center pb-12 text-accent bg-background">
              <a
                className="inline-flex items-center justify-center w-14 h-14 rounded-full border border-surface hover:border-accent transition-all duration-300 ease-out"
                href="https://www.facebook.com/people/Le-petit-monde-des-libellules-chaussons-en-cuir/100063505815832/"
                target="_blank"
                rel="noreferrer"
              >
                <Icon icon="facebook" size={24} />
              </a>
              <a
                className="inline-flex items-center justify-center w-14 h-14 rounded-full border border-surface hover:border-accent transition-all duration-300 ease-out"
                href="https://www.instagram.com/lepetitmondedeslibellules/"
                target="_blank"
                rel="noreferrer"
              >
                <Icon icon="instagram" size={24} />
              </a>
            </div>
            <div className="flex gap-4 items-center bg-white xs:rounded-[32px] p-6 xs:p-8">
              <div className="hidden relative w-48 h-48 xl:block">
                <Image src={slippers} alt="" layout="fill" />
              </div>
              <div className="">
                <CtaLink />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row items-center gap-4 justify-between text-grey-darker max-w-7xl mx-auto text-sm py-12 px-6 xs:px-0">
          <p>
            © 2022 • <br /> lepetitmondedeslibellules.fr
          </p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-0 md:divide-x md:divide-grey-lighter">
            <a className="md:pr-4 link-hover" href="/mentions-legales">
              Mentions légales
            </a>
            <a
              className="md:px-4 link-hover"
              href="/conditions-generales-de-vente"
            >
              CGV - CGU
            </a>
            <a
              className="md:pl-4 link-hover"
              href="/politique-de-confidentialite"
            >
              Politique de confidentialité
            </a>
          </div>
          <p className="whitespace-pre-line">
            Un site conçu par{" "}
            <a
              className="text-grey-darkest link-hover"
              href="https://pixeloscopia.design/"
              target="_blank"
              rel="noreferrer"
            >
              Pixeloscopia
            </a>{" "}
            <br />
            et développé par{" "}
            <a
              className="text-grey-darkest link-hover"
              href="https://drdigital.fr"
              target="_blank"
              rel="noreferrer"
            >
              D-R Digital
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
