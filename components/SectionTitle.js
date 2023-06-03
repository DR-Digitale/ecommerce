import Image from "next/image";
import Button from "./Button";
import Icon from "./Icon";

const SectionTitle = ({...props}) => {
  return (
    <div className="flex items-center gap-8 w-full xl:w-[70%] 2xl:w-[84%] mx-auto px-6 md:px-10 lg:px-16 xl:px-0 spacing">
      {props.icon && (
        <div className="hidden md:block relative w-16 h-16 md:w-32 md:h-32">
          <Image src={props.icon} alt="" layout="fill" />
        </div>
      )}
      <div className="w-full">
        <p className="text-2xl text-peps-major pb-4">{props.teaser}</p>
        <div className="flex flex-wrap gap-4 md:items-center justify-between w-full">
          <h2>{props.title}</h2>
          <div className="flex flex-wrap gap-4">
            {props.linkLabel1 && (
              <a
                className={`inline-flex flex-auto gap-4 ${props.linkClass}`}
                href={props.url1}
                target="_blank"
                rel="noreferrer"
              >
                {props.linkIcon1 && <Icon icon={props.linkIcon1} size={20} />}{" "}
                {props.linkLabel1}
              </a>
            )}
            {props.linkLabel2 && (
              <a
                className={`inline-flex flex-auto gap-4 ${props.linkClass}`}
                href={props.url2}
                target="_blank"
                rel="noreferrer"
              >
                {props.linkIcon2 && <Icon icon={props.linkIcon2} size={20} />}{" "}
                {props.linkLabel2}
              </a>
            )}
          </div>
          {props.buttonLabel && (
            <Button
              className={props.buttonClass}
              onClickFunction={props.buttonFunc}
            >
              {props.buttonIcon && <Icon icon={props.buttonIcon} size={20} />}{" "}
              {props.buttonLabel}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};
export default SectionTitle;
