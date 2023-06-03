import React from "react";
import { FacebookShareButton, EmailShareButton } from "react-share";
import Icon from "./Icon";


const Share = ({...props}) => {
  const url = process.env.NEXT_PUBLIC_FRONT_URL;
  const title = "Le petit monde des libellules, chaussons en cuir souple";
  const hashtag = "#chaussons, #chaussonsencuirsouple";
  const message =
    "Bonjour, votre ami(e) a souhaité vous partager cet article qui est susceptible de vous intéresser à l'adresse suivante : \n" +
    props.currentUrl.toString() +
    "\n Visitez notre site pour découvrir l'ensemble de nos produits : ";
  return (
    <div>
      <h5 className="text-accent">Partager sur les réseaux sociaux</h5>
      <div className="border-b border-grey-lighter py-8">
        <FacebookShareButton url={url} quote={title} hashtag={hashtag}>
          <div className="flex items-center gap-4 py-4 px-8 rounded-[64px] bg-halftone tag-hover">
            <Icon icon="facebook" size={24} /> Facebook
          </div>
        </FacebookShareButton>
      </div>
      <h5 className="py-8 text-accent">Envoyer par email</h5>
      <EmailShareButton
        url={url}
        subject={"Cet article est suceptible de vous intéresser"}
        body={message}
      >
        <div className="flex items-center gap-4 py-4 px-8 rounded-[64px] bg-halftone tag-hover">
          <Icon icon="mail" size={24} /> Courriel
        </div>
      </EmailShareButton>
    </div>
  );
};

export default Share;
