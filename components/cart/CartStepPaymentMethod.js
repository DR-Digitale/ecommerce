import React, { useState } from "react";
import Accordion from "../Accordion";
import { SiMastercard, SiVisa, SiAmericanexpress } from "react-icons/si";
import { FaPaypal } from "react-icons/fa";

const CartStepPaymentMethod = () => {
  const [expanded, setExpanded] = useState<false | number>(0);
  return (
    <Accordion
      index={0}
      expanded={expanded}
      setExpanded={setExpanded}
      title="Paiement"
      summary="Méthode de paiement"
    >
      <div className="flex flex-col gap-8">
        <div>
          <div className="flex items-center justify-between pb-3">
            <label className="flex items-center gap-2" htmlFor="credit-card">
              <input
                className="text-accent focus:ring-accent"
                type="radio"
                name="method"
                id="credit-card"
                defaultChecked
              />
              <span>Carte de Crédit</span>
            </label>
            <div className="flex items-center gap-2">
              <span className="py-2 px-4 rounded-[64px] bg-halftone">
                <SiVisa className="text-foreground" />
              </span>
              <span className="py-2 px-4 rounded-[64px] bg-halftone">
                <SiMastercard className="text-foreground" />
              </span>
              <span className="py-2 px-4 rounded-[64px] bg-halftone">
                <SiAmericanexpress className="text-foreground" />
              </span>
            </div>
          </div>
          <p className="text-grey-darkest">
            Visa, Mastercard, American Express, CB.
          </p>
        </div>
        <div>
          <div className="flex items-center justify-between pb-3">
            <label className="flex items-center gap-2" htmlFor="credit-card">
              <input
                className="text-accent focus:ring-accent"
                type="radio"
                name="method"
                id="credit-card"
              />
              <span>Paypal</span>
            </label>
            <div className="flex items-center gap-2">
              <span className="py-2 px-4 rounded-[64px] bg-halftone flex items-center gap-2 text-sm text-foreground">
                <FaPaypal className="text-foreground" /> 4x sans frais
              </span>
            </div>
          </div>
          <p className="text-grey-darkest">
            Payez en ligne sans communiquer vos informations de carte de crédit.
            Possibilité de payer en 4 fois sans frais.
          </p>
        </div>
        <div>
          <div className="flex items-center justify-between pb-3">
            <label className="flex items-center gap-2" htmlFor="credit-card">
              <input
                className="text-accent focus:ring-accent"
                type="radio"
                name="method"
                id="credit-card"
              />
              <span>Chèque</span>
            </label>
          </div>
          <p className="text-grey-darkest pb-2">
            Votre commande sera expédiée après réception de votre chèque à
            l&apos;adresse :
          </p>
          <p className="pl-4">
            Le petit monde des libellules <br /> 1 rue du District - Vihiers
            <br /> 49310 LYS HAUT LAYON
          </p>
        </div>
      </div>
    </Accordion>
  );
};

export default CartStepPaymentMethod;
