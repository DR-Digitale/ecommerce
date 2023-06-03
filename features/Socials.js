import SectionTitle from "../components/SectionTitle";
import lion from "../assets/icon/lion.svg";

const Socials = () => {
  return (
    <section className="pb-32">
      <SectionTitle
        icon={lion}
        teaser="Le Petit Monde des Libellules est actif sur les réseaux !"
        title="Nous suivre"
        linkIcon1="instagram"
        linkLabel1="Sur Instragram"
        url1="https://www.instagram.com/lepetitmondedeslibellules/"
        linkIcon2="facebook"
        linkLabel2="Sur Facebook"
        url2="https://www.facebook.com/people/Le-petit-monde-des-libellules-chaussons-en-cuir/100063505815832/"
        linkClass="button-outline"
      />
    </section>
  );
};

export default Socials;
