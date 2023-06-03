import React, { useContext } from "react";
import checkCircle from "../../assets/icon/FaCheckCircle.svg";
import Image from "next/image";
import { OrderStepContext } from "../../utils/useProvider";

const CartStep = ({ currentStep }) => {
  const { currentStep } = props;
  const step = useContext(OrderStepContext);
  return (
    <div className="flex flex-col gap-8">
      <div className="flex items-center gap-4">
        <button
          onClick={() => step.setOrderStep(1)}
          className={`relative w-8 h-8 flex items-center justify-center rounded-full ${
            currentStep === 1
              ? "border border-surface"
              : currentStep > 1
              ? "bg-accent text-white"
              : "bg-grey-lighter text-grey-darker"
          }`}
        >
          1
          {currentStep > 1 && (
            <span className="absolute w-4 h-4 bottom-0 -right-2 bg-white rounded-full p-px inline-block">
              <Image src={checkCircle} alt="" layout="fill" />
            </span>
          )}
        </button>
        Contact
      </div>
      <div className="flex items-center gap-4">
        <button
          onClick={() => step.setOrderStep(2)}
          className={`relative w-8 h-8 flex items-center justify-center rounded-full ${
            currentStep === 2
              ? "border border-surface"
              : currentStep > 2
              ? "bg-accent text-white"
              : "bg-grey-lighter text-grey-darker"
          }`}
        >
          2
          {currentStep > 2 && (
            <span className="absolute w-4 h-4 bottom-0 -right-2 bg-white rounded-full p-px inline-block">
              <Image src={checkCircle} alt="" layout="fill" />
            </span>
          )}
        </button>
        Livraison
      </div>
      <div className="flex items-center gap-4">
        <button
          onClick={() => step.setOrderStep(3)}
          className={`relative w-8 h-8 flex items-center justify-center rounded-full ${
            currentStep === 3
              ? "border border-surface"
              : currentStep > 3
              ? "bg-accent text-white"
              : "bg-grey-lighter text-grey-darker"
          }`}
        >
          3
          {currentStep > 3 && (
            <span className="absolute w-4 h-4 bottom-0 -right-2 bg-white rounded-full p-px inline-block">
              <Image src={checkCircle} alt="" layout="fill" />
            </span>
          )}
        </button>
        Facturation
      </div>
      <div className="flex items-center gap-4">
        <button
          onClick={() => step.setOrderStep(4)}
          className={`relative w-8 h-8 flex items-center justify-center rounded-full ${
            currentStep === 4
              ? "border border-surface"
              : currentStep > 4
              ? "bg-accent text-white"
              : "bg-grey-lighter text-grey-darker"
          }`}
        >
          4
          {currentStep > 4 && (
            <span className="absolute w-4 h-4 bottom-0 -right-2 bg-white rounded-full p-px inline-block">
              <Image src={checkCircle} alt="" layout="fill" />
            </span>
          )}
        </button>
        Expédition
      </div>
      <div className="flex items-center gap-4">
        <button
          onClick={() => step.setOrderStep(5)}
          className={`relative w-8 h-8 flex items-center justify-center rounded-full ${
            currentStep === 5
              ? "border border-surface"
              : currentStep > 5
              ? "bg-accent text-white"
              : "bg-grey-lighter text-grey-darker"
          }`}
        >
          5
          {currentStep > 5 && (
            <span className="absolute w-4 h-4 bottom-0 -right-2 bg-white rounded-full p-px inline-block">
              <Image src={checkCircle} alt="" layout="fill" />
            </span>
          )}
        </button>{" "}
        Paiement
      </div>
    </div>
  );
};

export default CartStep;
