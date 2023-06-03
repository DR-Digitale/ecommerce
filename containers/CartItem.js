import Image from "next/image";
import Link from "next/link";
import { Button, CartQty } from "../components";
import Icon from "../components/Icon";
import { motion } from "framer-motion";
import { deleteCartItem, updateCart } from "../utils/cart";
import { useEffect, useRef, useState } from "react";

// const calculatePrice = (quantity, price) => {
//   const formattedPrice = parseFloat(price) * 100;
//   const result = (formattedPrice * quantity) / 100;
//   return result.toFixed(2);
// };

const CartItem = ({ item, products, setCart }) => {
  const [productCount, setProductCount] = useState( item.quantity );
	const [updatingProduct, setUpdatingProduct] = useState( false );
	const [removingProduct, setRemovingProduct] = useState( false );
  const productImg = item?.data?.images?.[0] ?? '';

  const isMounted = useRef( false );

  useEffect( () => {
		isMounted.current = true
		
		// When component is unmounted, set isMounted.current to false.
		return () => {
			isMounted.current = false
		}
	}, [] );
  
  const handleRemoveProductClick = ( event, cartKey ) => {
		event.stopPropagation();
		
		// If the component is unmounted, or still previous item update request is in process, then return.
		if ( !isMounted || updatingProduct ) {
			return;
		}
		
    deleteCartItem( cartKey, setCart, setRemovingProduct );
	};

  const handleQtyChange = ( event, cartKey, type ) => {
		
		if ( typeof window !== "undefined" ) {
			
			event.stopPropagation();
			let newQty;
			
			// If the previous cart request is still updatingProduct or removingProduct, then return.
			if ( updatingProduct || removingProduct || ( 'decrement' === type && 1 === productCount ) ) {
				return;
			}
			
			if ( !type ) {
				newQty = 'increment' === type ? productCount + 1 : productCount - 1;
			} else {
				// If the user tries to delete the count of product, set that to 1 by default ( This will not allow him to reduce it less than zero )
				newQty = ( event.target.value ) ? parseInt( event.target.value ) : 1;
			}
			
			// Set the new qty in state.
			setProductCount( newQty );
			
			if ( products.length ) {
				updateCart(item?.key, newQty, setCart, setUpdatingProduct);
			}
			
		}
	};

  return (
    <motion.div
      layout
      // initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.8, opacity: 0 }}
      transition={{ type: "spring" }}
      key={item?.data?.slug}
      className={`flex items-center justify-between gap-4 w-full mx-auto text-grey-darker border-b border-halftone p-8 ${className}`}
    >
      <div className=" flex items-center gap-8">
        {productImg && (
          <Link href={`/produits/${item?.data?.slug}`}>
            <div className="relative w-[160px] h-[80px] cursor-pointer">
              <Image
                src={productImg?.src}
                alt={productImg?.alt}
                layout="fill"
                objectFit="cover"
              />
            </div>
          </Link>
        )}
        <div className="flex flex-col gap-1">
          <Link href={`/produits/${item?.data?.slug}`}>
            <span className="link-hover cursor-pointer">
              {item?.data?.name}
            </span>
          </Link>
          <span>
            {item?.data?.attributes?.pa_pointure} - {item?.data?.attributes?.pa_couleur}
          </span>
          <span>{item?.line_subtotal} {item?.currency}</span>
          <label className="flex items-center gap-2" htmlFor="gift">
            <input
              className="border-grey-lighter text-accent focus:ring-accent"
              type="checkbox"
              name="cadeau"
              id="gift"
            />
            <span>Ce sera un cadeau (Gratuit)</span>
          </label>
        </div>
      </div>
      <CartQty
        quantity={productCount}
        decrementFunction={( event ) => handleQtyChange( event, item?.cartKey, 'decrement' )}
        incrementFunction={( event ) => handleQtyChange( event, item?.cartKey, 'increment' )}
      />
      <div className="flex items-center gap-[50px]">
        <div className="text-grey-darker">
          {calculatePrice(item?.quantity, item?.data?.price)} €
        </div>
        <Button
          onClickFunction={( event ) => handleRemoveProductClick( event, item?.key )}
          className="hover:text-accent duration-300 transition-all ease-out"
        >
          <Icon icon="trash" size={24} />
        </Button>
      </div>
    </motion.div>
  );
};

export default CartItem;
