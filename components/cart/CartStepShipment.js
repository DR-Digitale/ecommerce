import React, { useState } from "react";
import Accordion from "../Accordion";
import Button from "../Button";
import Icon from "../Icon";

const CartStepShipment = () => {
  const [expanded, setExpanded] = useState<false | number>(0);
  return (
    <>
      <Accordion
        index={0}
        expanded={expanded}
        setExpanded={setExpanded}
        title="Expédition"
        summary="Méthode de paiement"
      >
        <div className="flex items-center justify-between pb-3">
          <label className="flex items-center gap-2" htmlFor="method">
            <input
              className={`text-accent focus:ring-accent`}
              type="radio"
              name="method"
              id="method"
              defaultChecked
            />
            <span>À domicile - Standard</span>
          </label>
          <span className="rounded-[64px] bg-halftone py-2 px-4 text-foreground">
            48H - 72H
          </span>
        </div>
        <p className="pb-2">
          Lettres et colis de petits formats n&apos;excédant pas 3 cm et 3 kg.
          Livraison en 2 à 3 jours ouvrés.
        </p>
        <div className="flex items-center justify-between">
          <span>
            <Icon icon="letter" size={24} /> Lettre suivie
          </span>
          <span>4,50 €</span>
        </div>
      </Accordion>
    </>
  );
};

export default CartStepShipment;
