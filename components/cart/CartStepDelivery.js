import React, { useState } from "react";
import Accordion from "../Accordion";

const CartStepDelivery = () => {
  const [expanded, setExpanded] = useState<false | number>(0);
  return (
    <>
      <Accordion
        index={0}
        expanded={expanded}
        setExpanded={setExpanded}
        title="Livraison"
        summary="Adresse"
      >
        <div className="grid grid-cols-2 gap-6">
          <input
            className="input-style bg-transparent col-span-full"
            type="libellé"
            name="libellé"
            id="libellé"
            placeholder="Libellé (Nom raccourci qui s’affichera en résumé)"
          />
          <input
            className="input-style bg-transparent col-span-1"
            type="firstname"
            name="firstname"
            id="firstname"
            placeholder="Prénom"
          />
          <input
            className="input-style bg-transparent col-span-1"
            type="name"
            name="name"
            id="name"
            placeholder="Nom"
          />
          <input
            className="input-style bg-transparent col-span-full"
            type="societe"
            name="societe"
            id="societe"
            placeholder="Societe"
          />
          <select
            className="input-style bg-transparent col-span-full"
            name="country"
            id="country"
          >
            <option value="">Pays</option>
          </select>
          <input
            className="input-style bg-transparent col-span-full"
            type="address"
            name="address"
            id="address"
            placeholder="Adresse"
          />
          <input
            className="input-style bg-transparent col-span-full"
            type="compladdress"
            name="compladdress"
            id="compladdress"
            placeholder="Résidence, étage, etc."
          />
          <input
            className="input-style bg-transparent col-span-1"
            type="zipCode"
            name="zipCode"
            id="zipCode"
            placeholder="Code Postal"
          />
          <input
            className="input-style bg-transparent col-span-1"
            type="ville"
            name="ville"
            id="ville"
            placeholder="Ville"
          />
        </div>
        <label className="pt-4 flex gap-4 items-center" htmlFor="save">
          <input type="checkbox" name="save" id="save" />
          <span className="text-grey-darker">
            Sauvegarder mes informations pour la prochaine fois
          </span>
        </label>
      </Accordion>
    </>
  );
};

export default CartStepDelivery;
