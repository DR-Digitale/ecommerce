const Price = ({ price, reducedPrice, className }) => {

  return (
    <div
      className={`border border-peps-major rounded-[64px]  ${className} ${
        !reducedPrice && "py-1 px-4 bg-peps-major text-white"
      }
      `}
    >
      {reducedPrice ? (
        <>
          <span className="inline-flex items-center px-4 bg-white text-surface rounded-l-[64px] line-through sm:px-4 sm:py-1">
            {price}
          </span>
          <span className=" inline-flex items-center px-4 bg-peps-major rounded-r-[64px] text-white sm:px-4 sm:py-1">
            {reducedPrice && reducedPrice}
          </span>
        </>
      ) : (
        <>{price}</>
      )}
    </div>
  );
};

export default Price;
