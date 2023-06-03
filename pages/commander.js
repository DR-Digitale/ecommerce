import Image from "next/image";
import React, { useContext, useState } from "react";
import Icon from "../components/Icon";
import top from "../assets/texture/top-page.svg";
import { Button } from "../components";
import CartStep from "../components/cart/CartStep";
import OrderTotal from "../components/OrderTotal";
import Accordion from "../components/Accordion";
import CartStepContact from "../components/cart/CartStepContact";
import { OrderStepContext } from "../utils/useProvider";
import CartStepDelivery from "../components/cart/CartStepDelivery";
import CartStepInvoicing from "../components/cart/CartStepInvoicing";
import CartStepShipment from "../components/cart/CartStepShipment";
import CartStepPaymentMethod from "../components/cart/CartStepPaymentMethod";

const Commander = () => {
  const step = useContext(OrderStepContext);
  return (
    <div className="overflow-hidden">
      <div className="sticky top-0 left-0 w-[100vw] h-[7.29vw] z-20">
        <Image src={top} alt="" layout="fill" />
        <div className="absolute top-[3.125vw] left-[8%] z-40 px-14 text-foreground bg-white rounded-[16px] shadow-[0px_4px_4px_rgba(0,0,0,0.08)]">
          <p className="flex items-center gap-4 border-b border-foreground py-4">
            <Icon icon="pay" size={24} /> Commander
          </p>
        </div>
      </div>
      <div className="w-[84%] mx-auto flex items-center justify-between pb-14">
        <h3 className="text-foreground">Commande n°21028</h3>
        <Button className="button-outline">
          <Icon icon="back" size={24} /> Retour au panier
        </Button>
      </div>
      <div className="flex justify-between w-[84%] mx-auto h-screen">
        <CartStep currentStep={step.orderStep} />
        <div className="flex gap-[3.125vw]">
          <div className="w-[39.58vw]">
            {step.orderStep === 1 && <CartStepContact />}
            {step.orderStep === 2 && <CartStepDelivery />}
            {step.orderStep === 3 && <CartStepInvoicing />}
            {step.orderStep === 4 && <CartStepShipment />}
            {step.orderStep === 5 && <CartStepPaymentMethod />}
          </div>
          <OrderTotal currentStep={step.orderStep} />
        </div>
      </div>
    </div>
  );
};

export default Commander;
