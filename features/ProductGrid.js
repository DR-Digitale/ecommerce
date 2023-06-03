import { ProductCard } from "../containers";
import { useContext } from "react";
import { ReRenderContext } from "../utils/useProvider";
import { ProductsSlide } from "../containers/Slider";
import { AnimatePresence, motion } from "framer-motion";

const ProductGrid = ({...props}) => {
  const { products, shoesSizes } = props;
  const width = useContext(ReRenderContext);

  return (
    <>
      {width >= 768 ? (
        <motion.section
          layout
          className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6 xl:w-[84%] mx-auto px-6 md:px-10 lg:px-20 xl:px-0 spacing"
        >
          <AnimatePresence>
            {products.map((product) => {
              return (
                <ProductCard
                  product={product}
                  key={product.id}
                  shoesSizes={shoesSizes}
                />
              );
            })}
          </AnimatePresence>
        </motion.section>
      ) : (
        <div className="px-6">
          <ProductsSlide slideName="products">
            {products.map((product) => {
              return (
                <ProductCard
                  product={product}
                  key={product.id}
                  shoesSizes={shoesSizes}
                />
              );
            })}
          </ProductsSlide>
        </div>
      )}
    </>
  );
};

export default ProductGrid;
