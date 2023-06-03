import {
  bestProduct,
  onSaleProducts,
  productAttributes,
} from "../utils/woocommerceApi";
import { ProductGrid, Reassurance, Hero, About } from "../features";
import { NavLayout } from "../layout";
import axios from "axios";
import HomeProductDetail from "../features/HomeProductDetail";
import Socials from "../features/Socials";
import Testimonials from "../features/Testimonials";
import FeaturedProduct from "../features/FeaturedProduct";
import { useSession } from "next-auth/react";

export default function Home({ products, home, medias, shoesSizes, bestProduct }) {

  // console.log("--WooCommerce Products: ", products);
  console.log("Wordpress home: ", home);
  let pictures = medias.map((media) => media.id);
  // console.log("Media home: ", medias);
  // console.log("Image :", medias[pictures.indexOf(home.image_hero)].source_url);
  const session = useSession();
  console.log("session :", session);
  return (
    <div className="overflow-hidden">
      <NavLayout title="Menu" description="Menu page">
        <Hero />
        <HomeProductDetail shoesSizes={shoesSizes} bestProduct={bestProduct} />
        <Reassurance background />
        <FeaturedProduct products={products} shoesSizes={shoesSizes} />
        <About />
        <Socials />
        <Testimonials />
        {/* image={medias[pictures.indexOf(home.image_hero)].source_url}
        alt={medias[pictures.indexOf(home.image_hero)].alt_text} */}
      </NavLayout>
    </div>
  );
}

export const getStaticProps = async () => {
  const wooCommerceProducts = await onSaleProducts().catch((error) =>
    console.error(error)
  );
  const home = await axios.get(
    "http://www.lepetitmondedeslibellules.fr/wp-json/wp/v2/pages?slug=test"
  );
  const media = await axios.get("http://www.lepetitmondedeslibellules.fr/wp-json/wp/v2/media");

  const wooCommerceProductAttribute = await productAttributes("3").catch(
    (error) => console.error(error)
  );

  const wooCommerceBestProduct = await bestProduct("680").catch((error) =>
    console.error(error)
  );

  if (!wooCommerceProducts) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      products: wooCommerceProducts.data,
      medias: media.data,
      shoesSizes: wooCommerceProductAttribute,
      bestProduct: wooCommerceBestProduct,
    },
    notFound: home?.data?.status === 404,
    // revalidate: 60 // regenerate page with new data fetch after 60 seconds
  };
};
