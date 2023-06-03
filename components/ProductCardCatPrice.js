import { sanitize } from "../utils/purifyHtml";

const ProductCardCatPrice = ({ category, subCategory, price, className, ...props }) => {
  return (
    <div className={`flex flex-wrap gap-4 my-6 pl-4 border-l ${className}`}>
      {category && <span className={props.tagStyle}>{category}</span>}
      {subCategory && <span className={props.tagStyle}>{subCategory}</span>}
      {price && (
        <div
          className="hidden sm:flex sm:items-center card_price"
          dangerouslySetInnerHTML={{
            __html: sanitize(price ?? ""),
          }}
        />
      )}
    </div>
  );
};

export default ProductCardCatPrice;
