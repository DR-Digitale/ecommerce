import React from "react";
import {
  productAttributes,
  productBySlug,
  productVariation,
  relatedProducts,
} from "../../utils/woocommerceApi";
import ProductDetails from "../../features/ProductDetails";
import Guarantee from "../../features/Guarantee";
import Testimonials from "../../features/Testimonials";
import { RelatedProduct } from "../../features/FeaturedProduct";

const Products = ({ product, variation, shoesSizes, relatedProducts }) => {

  return (
    <div className="overflow-hidden">
      <ProductDetails
        product={product}
        variation={variation}
        shoesSizes={shoesSizes}
      />
      <Guarantee />
      <Testimonials />
      <RelatedProduct products={relatedProducts} shoesSizes={shoesSizes} />
    </div>
  );
};

export default Products;

export const getServerSideProps = async ({
  query: { slug },
}) => {
  const wooCommerceProduct = await productBySlug(slug).catch((error) =>
    console.error(error)
  );

  const data = await wooCommerceProduct;

  let id = data[0].id;
  let relatedIds = data[0].related_ids.toString();

  const wooCommerceProductVariation = await productVariation(id).catch(
    (error) => console.error(error)
  );

  const wooCommerceProductAttribute = await productAttributes("3").catch(
    (error) => console.error(error)
  );

  const woocommerceRelatedProducts = await relatedProducts(relatedIds).catch(
    (error) => console.error(error)
  );

  if (!wooCommerceProduct) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      product: wooCommerceProduct,
      variation: wooCommerceProductVariation,
      shoesSizes: wooCommerceProductAttribute,
      relatedProducts: woocommerceRelatedProducts,
    },
    // revalidate: 60 // regenerate page with new data fetch after 60 seconds
  };
};
