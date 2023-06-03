import React, { useState, useEffect, createContext } from "react";

export const ReRenderContext = createContext();
export const SizeContext = createContext();
export const FooterContext = createContext();
export const OrderStepContext = createContext();
export const CartSummaryContext = createContext();
export const FilterContext = createContext();
export const CartContext = createContext([
	{},
	() => {}
]);

const Provider = ({ children }) => {
  const reRender = ReRender();
  const [selectedSize, setSelectedSize] = useState("");
  const [footerType, setFooterType] = useState("");
  const [orderStep, setOrderStep] = useState(1);
  const [cartSummary, setCartSummary] = useState([]);
  const [filters, setFilters] = useState({
    categories: [],
    attributes: [],
  });
  const [ cart, setCart ] = useState( null );

  useEffect( () => {
    if ( typeof window !== "undefined" ) {
      let cartData = localStorage.getItem( 'next-cart' );
      cartData = null !== cartData ? JSON.parse( cartData ) : '';
      setCart( cartData );
    }
  }, [] );
  
  useEffect( () => {
    if ( typeof window !== "undefined" ) {
      localStorage.setItem('next-cart', JSON.stringify(cart));
    }
  }, [ cart ] );
  console.log(cart)
  return (
    <ReRenderContext.Provider value={reRender}>
      <CartContext.Provider value={ [ cart, setCart ] }>
        <FooterContext.Provider value={{ footerType, setFooterType }}>
          <FilterContext.Provider value={{ filters, setFilters }}>
            <SizeContext.Provider value={{ selectedSize, setSelectedSize }}>
              <OrderStepContext.Provider value={{ orderStep, setOrderStep }}>
                  <CartSummaryContext.Provider
                    value={{ cartSummary, setCartSummary }}
                  >
                    {children}
                  </CartSummaryContext.Provider>
              </OrderStepContext.Provider>
            </SizeContext.Provider>
          </FilterContext.Provider>
        </FooterContext.Provider>
        </CartContext.Provider>
    </ReRenderContext.Provider>
  );
};

export default Provider;

const ReRender = () => {
  const [width, setWidth] = useState(0); // default width, detect on server.
  let handleResize;
  useEffect(() => {
    if (typeof window !== "undefined") {
      if (!width) {
        return setWidth(window.innerWidth);
      } else {
        handleResize = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
      }
    }
  }, [width, handleResize]);
  return width;
};
