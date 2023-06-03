import top from "../../assets/texture/top-page.svg";
import logo from "../../assets/img/logo-sticker.svg";
import Image from "next/image";
import FilterTabs from "../../components/FilterTabs";
import { ProductGrid, Reassurance } from "../../features";
import { GetStaticProps } from "next";
import {
  fetchWooCommerceProducts,
  productAttributes,
} from "../../utils/woocommerceApi";
import { Product } from "../../utils/types/wooCommerceTypes";
import Filters from "../../containers/Filters";
import { useContext, useEffect, useState } from "react";
import { FilterContext } from "../../utils/useProvider";

const Produits = ({...props}) => {
  const [isOpen, setIsOpen] = useState(false);
  const filtersTerms = useContext(FilterContext);
  const [filteredArray, setFilteredArray] = useState([]);
  console.log(filtersTerms.filters);

  const filterArray = (
    array,
    filters
  ) => {
    if (!filters.categories && !filters.attributes) return array;
    return array.filter((item) => {
      let match = true;
      // filter by categories
      if (filters.categories && filters.categories.length > 0) {
        const itemCategories = item.categories.map((cat) =>
          cat.slug.toLowerCase()
        );
        if (
          !filters.categories.every((filterCat) =>
            itemCategories.includes(filterCat.toLowerCase())
          )
        ) {
          match = false;
        }
      }
      // filter by attributes
      if (filters.attributes && filters.attributes.length > 0) {
        if (
          !filters.attributes.some((filterAttr) =>
            checkAttributeMatch(filterAttr.toLowerCase(), item.attributes)
          )
        ) {
          match = false;
        }
      }
      return match;
    });
  };

  const checkAttributeMatch = (filterAttr, attributes) => {
    for (let i = 0; i < attributes.length; i++) {
      if (attributes[i].options) {
        if (
          attributes[i].options
            .map((option) => option.toLowerCase())
            .some((option) => option.includes(filterAttr)) ||
          checkAttributeMatch(filterAttr, attributes[i].options)
        ) {
          return true;
        }
      }
    }
    return false;
  };

  useEffect(() => {
    if (props.products && filtersTerms.filters) {
      let arrayFilter = filterArray(props.products, filtersTerms.filters);
      setFilteredArray(arrayFilter);
    }
  }, [filtersTerms]);
  console.log(filteredArray);

  if (!filteredArray) return <></>;
  return (
    <div>
      <div className="sticky top-0 left-0 w-full h-[7.29vw] z-20">
        <div className="relative w-full h-full">
          <Image src={top} alt="" layout="fill" priority />
        </div>
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
      <ProductGrid products={filteredArray} shoesSizes={props.shoesSizes} />
      <Reassurance />
      <div>
        <Filters
          close={() => setIsOpen(false)}
          isOpen={isOpen}
          shoesSizes={props.shoesSizes}
        />
      </div>
    </div>
  );
};

export default Produits;

export const getStaticProps = async () => {
  const wooCommerceProducts = await fetchWooCommerceProducts().catch((error) =>
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
