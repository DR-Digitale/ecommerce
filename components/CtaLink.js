const CtaLink = () => {
  return (
    <div className="w-full">
      <a href="#" className="inline-block mb-2 link-hover">
        La collection de chausson en cuir
      </a>
      <div className="border-l border-grey-darker flex gap-4 pl-4 mb-7">
        <a href="#" className="bg-halftone py-1 px-4 rounded-full tag-hover">
          Mixte
        </a>
        <a href="#" className="bg-halftone py-1 px-4 rounded-full tag-hover">
          Fille
        </a>
        <a href="#" className="bg-halftone py-1 px-4 rounded-full tag-hover">
          Garçon
        </a>
      </div>
      <a href="#" className="font-semibold inline-block mb-6 link-hover">
        L’atelier de fabrication
      </a>
      <br />
      <a href="#" className="font-semibold link-hover">
        Le petit monde de Charline
      </a>
    </div>
  );
};

export default CtaLink;
