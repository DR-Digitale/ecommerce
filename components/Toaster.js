import Image from "next/image";
import React, { useState } from "react";
import Button from "./Button";
import Icon from "./Icon";
import successIcon from "../assets/icon/success.svg";
import alertIcon from "../assets/icon/alert.svg";
import infoIcon from "../assets/icon/info.svg";
import warningIcon from "../assets/icon/warning.svg";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

const toast = {
  hidden: { y: "-150vh", opacity: 0, x: "-50%" },
  visible: { y: "0", opacity: 1, x: "-50%" },
};

const Toaster = ({...props}) => {
  const { onClose, toastType, show } = props;
  let title = "";
  let text = "";
  let icon = "";

  switch (toastType) {
    case "success":
      icon = successIcon;
      (title = "C'est dans le panier !"),
        (text = "La paire de chausson vient d'être ajoutée au panier.");
      break;
    case "info":
      icon = infoIcon;
      (title = "Vous ne voyez plus certains chaussons ?"),
        (text =
          "Depuis votre dernière ouverture de la commode, certains chaussons ont été vendus et ne sont plus disponibles.");
      break;
    case "warning":
      icon = warningIcon;
      (title = "Erreur de saisie"),
        (text = "Vérifier les information saisies, ça n'est pas valide.");
      break;
    case "alert":
      icon = alertIcon;
      (title = "Une erreur s'est produite..."),
        (text =
          "Oups, le service a été interrompu. \nVeuillez recharger la page.");
      break;
    case "missing-size":
      icon = warningIcon;
      (title = "Impossible d'ajouter au panier."),
        (text = "Veuillez sélectionner une taille.");
      break;

    default:
      break;
  }

  return (
    <AnimatePresence initial={false} onExitComplete={onClose}>
      <motion.div
        variants={toast}
        animate={show ? "visible" : "hidden"}
        className={`fixed z-50 top-5 left-1/2 w-[480px] mx-auto bg-white rounded-[32px] px-8 pb-8 pt-20 border-t-4 text-center border-${toastType}`}
      >
        <Button className="absolute top-8 right-8" onClickFunction={onClose}>
          <Icon icon="cancel" size={24} />
        </Button>
        <div className={`flex flex-col gap-6 text-${toastType}-accent`}>
          {icon && (
            <div className="relative w-20 h-20 mx-auto">
              <Image src={icon} alt="" layout="fill" />
            </div>
          )}
          {title && <h5>{title}</h5>}
          {text && <p>{text}</p>}
          {toastType === "success" && (
            <div className="flex justify-between items-center">
              <Link href="/panier">
                <a className="text-success-accent bg-success-muted py-4 px-8 rounded-[64px] hover:bg-success-accent hover:text-white transition-all duration-500 ease-out">
                  Voir mon panier
                </a>
              </Link>
              <Link href="/produits">
                <a className="bg-success-accent text-white  py-4 px-8 rounded-[64px] hover:text-success-accent hover:bg-success-muted transition-all duration-500 ease-out">
                  <Icon icon="sandals" size={24} />
                </a>
              </Link>
            </div>
          )}
          {toastType === "alert" && (
            <Link href="/">
              <a className="w-auto text-alert-accent bg-alert-muted py-4 px-8 rounded-[64px] hover:bg-alert transition-all duration-500 ease-out">
                <Icon icon="back" size={24} /> Retourner à l&apos;accueil
              </a>
            </Link>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Toaster;
