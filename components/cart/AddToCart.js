import { useContext, useState } from "react";
import { addToCart } from "../../utils/cart";
import Icon from "../Icon";
import cx from 'classnames'
import { CartContext } from "../../utils/useProvider";

import { isEmpty } from 'lodash';

const AddToCart = ({ product, variations, selectedSize, selectedColor }) => {

	const [cart, setCart] = useContext(CartContext);
	const [ isAddedToCart, setIsAddedToCart ] = useState(false);
	const [ loading, setLoading ] = useState(false);
	const addToCartBtnClasses = cx(
		'py-4 px-8 inline-flex items-center justify-center gap-4  rounded-[64px]  transition-all duration-500 ease-out',
		{
			'bg-background hover:bg-white': !loading,
			'bg-grey-lighter' : loading
		}
	)

	const variation = (selectedSize, selectedColor) => {
		if(selectedSize !== "") {
			let selectedVarations = []
			const sizeMatchedItems = variations.find(item => item.attributes.find(attribute => attribute.option === selectedSize));

			selectedVarations.push(sizeMatchedItems);

			const variationItem = selectedVarations?.find(item => item.attributes.find(attribute => attribute.option === selectedColor));

			return variationItem;
		}
		return null;
	} 

	const selectedVariation = variation(selectedSize, selectedColor);

	if(isEmpty( product )) {
		return null;
	}
 
	return (
			<button 
				className={`${addToCartBtnClasses} text-surface`}
				onClick={() => addToCart(product?.id ?? 0, 1, setCart, setIsAddedToCart, setLoading)}
				disabled={loading}
			>
				<Icon icon="shoppingBag" size={22} /> {loading ? "Ajout en cours..." : "Ajouter au panier"}
			</button>
	);
}

export default AddToCart;