import Image from "next/image";
import { addLineItem } from "../store/slices/cartSlice";
import { ProductCardInfo } from "../components";
import Icon from "../components/Icon";
import defaultImage from "../assets/img/woocommerce-placeholder.png";
import { sanitize } from "../utils/purifyHtml";
import { AnimatePresence, motion } from "framer-motion";

const ProductCard = ({ product, shoesSizes }) => {

  return (
    <motion.div
      layout
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      className="rounded-[32px] border border-halftone shadow-sm flex flex-col h-full"
    >
      <div>
        <div className="relative w-full aspect-square">
          <Image
            className="rounded-t-[32px]"
            src={product.images[0] ? product.images[0].src : defaultImage}
            alt={product.images[0] ? product.images[0].alt : ""}
            layout="fill"
            objectFit="cover"
          />
          {product.on_sale && (
            <span className="absolute inline-flex items-center bg-halftone text-foreground top-4 right-4 py-2 px-4 rounded-[64px]">
              <Icon icon="check" size={20} /> En promotion
            </span>
          )}
          <div
            className="absolute bottom-4 left-4 card_price"
            dangerouslySetInnerHTML={{
              __html: sanitize(product?.price_html ?? ""),
            }}
          />
        </div>
      </div>
      <ProductCardInfo
        label={product.name}
        price={product.price_html}
        shortDescription={product.short_description}
        categories={product.categories}
        shoesSizes={shoesSizes}
        slug={product.slug}
        attributes={product.attributes}
      />
    </motion.div>
  );
};

export default ProductCard;
