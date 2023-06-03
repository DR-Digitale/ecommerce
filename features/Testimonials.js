import SectionTitle from "../components/SectionTitle";
import fish from "../assets/icon/fish.svg";

const Testimonials = ({...props}) => {
  return (
    <section className={`pb-32 ${props.className}`}>
      <SectionTitle
        icon={fish}
        teaser="Avis des clients"
        title="Ce que les parents en pensent..."
        buttonIcon="needHelp"
        buttonLabel="Être conseillé par Charline"
        buttonClass="button-accent"
      />
    </section>
  );
};

export default Testimonials;
