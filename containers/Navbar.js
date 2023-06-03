import { NavHeading } from "../components";

const Navbar = () => {
  return (
    <div className="flex gap-4 items-center">
      <NavHeading link="/">Accueil</NavHeading>
      <NavHeading link="/panier">Panier</NavHeading>
      <NavHeading link="/paiement">Paiement</NavHeading>
    </div>
  );
};

export default Navbar;
