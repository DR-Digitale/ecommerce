import React, { useState } from "react";
import Accordion from "../Accordion";
import Button from "../Button";

const CartStepContact = () => {
  const [expanded, setExpanded] = useState<false | number>(0);
  return (
    <>
      <Accordion
        index={0}
        expanded={expanded}
        setExpanded={setExpanded}
        title="Contact"
        summary="Email"
      >
        <input
          className="input-style bg-transparent"
          type="email"
          name="email"
          id="email"
          placeholder="Email"
        />
        <label className="pt-4 flex gap-4 items-center" htmlFor="emailing">
          <input type="checkbox" name="emailing" id="emailing" />
          <span className="text-grey-darker">
            M&apos;envoyer les actualités et les offres commerciales
          </span>
        </label>
      </Accordion>
      <div className="relative w-full flex justify-center items-center mt-8">
        <Button className="relative z-10 bg-white px-4 text-accent hover:text-surface transition-all duration-300 ease-out">
          Vous avez déjà un compte ? Se connecter
        </Button>
        <hr className="overflow-visible border-peps-minor h-px absolute top-1/2 left-0 w-full -z-10" />
      </div>
    </>
  );
};

export default CartStepContact;
