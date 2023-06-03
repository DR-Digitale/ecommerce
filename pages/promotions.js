import top from "../assets/texture/top-page.svg";
import logo from "../assets/img/logo-sticker.svg";
import Image from "next/image";
import FilterTabs from "../components/FilterTabs";
import { ProductGrid, Reassurance } from "../features";
import { GetStaticProps } from "next";
import { onSaleProducts, productAttributes } from "../utils/woocommerceApi";
import { Product } from "../utils/types/wooCommerceTypes";
import Filters from "../containers/Filters";
import { motion } from "framer-motion";
import { useState } from "react";

const Produits = ({...props}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div className="sticky top-0 left-0 w-full h-[7.29vw] z-20">
        <Image src={top} alt="" layout="fill" />
      </div>
      <div className="fixed top-10 right-9 w-[12.6vw] h-[12.6vw] z-20">
        <Image src={logo} alt="" layout="fill" />
      </div>
      <FilterTabs moreFilter={() => setIsOpen(!isOpen)} />
      <div className="w-full xl:w-[84%] mx-auto px-6 md:px-10 lg:px-20 xl:px-0 mt-12 spacing">
        <p className="text-peps-major text-2xl ">
          Le petit monde des libellules
        </p>
        <h1>La collection de chaussons en cuir</h1>
      </div>
      <ProductGrid products={props.products} shoesSizes={props.shoesSizes} />
      <Reassurance />
      <motion.div>
        <Filters
          close={() => setIsOpen(false)}
          isOpen={isOpen}
          shoesSizes={props.shoesSizes}
        />
      </motion.div>
    </div>
  );
};

export default Produits;

export const getStaticProps = async () => {
  const wooCommerceProducts = await onSaleProducts().catch((error) =>
    console.error(error)
  );

  const wooCommerceProductAttribute = await productAttributes("3").catch(
    (error) => console.error(error)
  );

  if (!wooCommerceProducts) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      products: wooCommerceProducts.data,
      shoesSizes: wooCommerceProductAttribute,
    },
    // revalidate: 60 // regenerate page with new data fetch after 60 seconds
  };
};
