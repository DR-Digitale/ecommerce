import React, { useState } from "react";
import Accordion from "../Accordion";
import Button from "../Button";
import Icon from "../Icon";

const CartStepInvoicing = () => {
  const [expanded, setExpanded] = useState<false | number>(0);
  return (
    <>
      <Accordion
        index={0}
        title="Email / Téléphone"
        summary="Facturation"
        expanded={expanded}
        setExpanded={setExpanded}
      >
        <div>
          <input
            className="input-style bg-transparent mb-14"
            type="email"
            name="email"
            id="email"
            placeholder="Email"
          />
          <input
            className="input-style bg-transparent mb-14"
            type="tel"
            name="tel"
            id="tel"
            placeholder="Téléphone"
          />
          <div className="flex items-center justify-between mb-8">
            <Button
              type={"button"}
              className="flex items-center justify-between"
            >
              Adresse
            </Button>
            <Button>
              <Icon icon="navArrowUp" size={24} />
            </Button>
          </div>
          <div className="flex flex-col gap-6 pb-8">
            <label htmlFor="address1">
              <div className="flex items-center gap-2 pb-2">
                <input
                  className="text-accent focus:ring-accent"
                  type="radio"
                  name="address"
                  id="address1"
                  defaultChecked
                />
                Libellé de l&apos;adresse
              </div>
              <span className="text-sm text-grey-darkest">
                Adresse, Information complémentaire, Code Postal, Ville
              </span>
            </label>
            <label htmlFor="address2">
              <div className="flex items-center gap-2 pb-2">
                <input
                  className="text-accent focus:ring-accent"
                  type="radio"
                  name="address"
                  id="address2"
                  onChange={(e) => e.target.checked}
                />
                Libellé de l&apos;adresse
              </div>
              <span className="text-sm text-grey-darkest">
                Adresse, Information complémentaire, Code Postal, Ville
              </span>
            </label>
            <label className="flex items-center gap-2" htmlFor="otherAddress">
              <input
                className={`text-accent focus:ring-accent`}
                type="radio"
                name="address"
                id="otherAddress"
              />
              <span>Indiquer une autre adresse</span>
            </label>
          </div>
          <label className="pt-4 flex gap-4 items-center" htmlFor="save">
            <input type="checkbox" name="save" id="save" />
            <span className="text-grey-darker">
              Sauvegarder mes informations pour la prochaine fois
            </span>
          </label>
        </div>
      </Accordion>
    </>
  );
};

export default CartStepInvoicing;
