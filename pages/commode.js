import top from "../assets/texture/top-page.svg";
import logo from "../assets/img/logo-slipper.svg";
import cartBlob from "../assets/blobs/cartBlob.svg";
import Image from "next/image";
import React from "react";
import Icon from "../components/Icon";
import { GetStaticProps } from "next";

const Commode = () => {
  return (
    <div>
      <div className="sticky top-0 left-0 w-full h-[7.29vw] z-20 ">
        <Image src={top} alt="" layout="fill" />
        <div className="absolute top-[3.125vw] left-[8%] z-40 px-14 text-foreground bg-white rounded-[16px] shadow-[0px_4px_4px_rgba(0,0,0,0.08)]">
          <p className="flex items-center gap-4 border-b border-foreground py-4">
            <Icon icon="sandals" size={24} /> Les chaussons que j&apos;aime bien
            !
          </p>
        </div>
      </div>
      <div className="fixed top-10 right-9 w-[12.6vw] h-[12.6vw] z-20">
        <Image src={logo} alt="" layout="fill" />
        <span className="absolute inline-flex items-center justify-center top-[10px] right-[15px] w-12 h-12">
          <Image src={cartBlob} alt="" layout="fill" />
          <span className="relative z-10 text-white">{1}</span>
        </span>
      </div>
      <div className="w-[84%] mx-auto pb-12">
        <p className="text-peps-major text-2xl font-semibold pb-4">
          Mes coups de coeurs mis de côté jusqu&apos;à ce que je quitte la
          boutique...
        </p>
        <h2>Glissés dans ma commode</h2>
      </div>
    </div>
  );
};

export default Commode;

// export const getStaticProps: GetStaticProps = async () => {
//   const wooCommerceProducts = await onSaleProducts().catch((error) =>
//     console.error(error)
//   );
//   const home = await axios.get(
//     "http://ecommerce.local/wp-json/wp/v2/pages?slug=test"
//   );
//   const media = await axios.get("http://ecommerce.local/wp-json/wp/v2/media");

//   const wooCommerceProductAttribute = await productAttributes("3").catch(
//     (error) => console.error(error)
//   );

//   const wooCommerceBestProduct = await bestProduct("53").catch((error) =>
//     console.error(error)
//   );

//   if (!wooCommerceProducts) {
//     return {
//       notFound: true,
//     };
//   }

//   return {
//     props: {
//       products: wooCommerceProducts.data,
//       medias: media.data,
//       shoesSizes: wooCommerceProductAttribute,
//       bestProduct: wooCommerceBestProduct,
//     },
//     notFound: home?.data?.status === 404,
//     // revalidate: 60 // regenerate page with new data fetch after 60 seconds
//   };
// };
