import CtaLink from "./CtaLink";

const Welcome = () => {
  return (
    <>
      <h1 className="font-medium pb-8 text-2xl">
        Bienvenue dans la boutique <br />
        <span className="text-xl text-accent font-semibold">
          Le petit monde des libellules
        </span>
      </h1>
      <CtaLink />
    </>
  );
};

export default Welcome;
