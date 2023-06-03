import React from "react";
import Icon from "./Icon";

const Resume = ({ tag, h1, h2, text, buttons, className }) => {
  return (
    <div className={className}>
      {tag && <span className="text-2xl text-peps-major pb-2">{tag}</span>}
      {h1 && <h1 className="text-4xl pb-8">{h1}</h1>}
      {h2 && <h2 className="text-4xl pb-8">{h2}</h2>}
      {text && <p className=" whitespace-pre-line pb-8">{text}</p>}
      {buttons && (
        <div className="flex items-center gap-8">
          {buttons.map((button) => (
            <a key={button.id} className={button.style} href={button.href}>
              {button.labelIcon && <Icon icon={button.labelIcon} size={24} />}
              {button.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default Resume;
