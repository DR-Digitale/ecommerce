import React from "react";
import Icon from "./Icon";
import Button from "./Button";

const ContactForm = () => {
  return (
    <div className="max-w-3xl mx-auto rounded-[16px] shadow-[0px_0px_24px_rgba(0,0,0,0.04)]">
      <form className="grid grid-cols-2 gap-[3.5vw] p-8">
        <input
          className="input-style"
          type="text"
          name="Prénom"
          id="firstname"
          placeholder="Prénom"
        />
        <input
          className="input-style"
          type="text"
          name="Nom"
          id="name"
          placeholder="Nom"
        />
        <input
          className="input-style"
          type="email"
          name="Email"
          id="email"
          placeholder="Email"
        />
        <input
          className="input-style"
          type="tel"
          name="Téléphone"
          id="tel"
          placeholder="Téléphone"
        />
        <input
          className="input-style col-span-full"
          type="text"
          name="Objet"
          id="object"
          placeholder="Objet"
        />
        <textarea
          className="textarea col-span-full h-[112px]"
          name="Message"
          id="message"
          placeholder="Message"
        ></textarea>
        <label htmlFor="accept" className="col-span-full flex gap-4">
          <input
            className="mt-1 border-halftone text-accent focus:ring-accent"
            type="checkbox"
            name="accept"
            id="accept"
          />
          <span className="text-grey-darker">
            Le petit monde des libellules collecte vos données pour traiter
            votre demande. En cochant cette case, j&apos;accepte la{" "}
            <a
              className="text-surface link-hover"
              href="/politique-de-confidentialite"
            >
              politique de confidentialité
            </a>
            .
          </span>
        </label>
        <div className="relative col-span-full flex justify-center">
          <div className="bg-white px-8 relative z-10">
            <Button className="button-accent">Enoyer à Charline</Button>
          </div>
          <hr className="gradient-girly w-full h-[3px] rounded-[16px] absolute top-1/2 -translate-y-1/2 " />
        </div>
      </form>
      <div className="p-8 flex justify-between items-center bg-foreground text-white rounded-b-[16px]">
        <h3 className="text-2xl">Besoin d&apos;être conseillé ?</h3>
        <a className="button-outline-white" href="+33">
          <Icon icon="call" size={24} /> Appelez-moi
        </a>
      </div>
    </div>
  );
};

export default ContactForm;
