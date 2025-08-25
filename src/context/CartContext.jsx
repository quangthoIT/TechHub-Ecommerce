import { createContext, useContext, useState } from "react";

export const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
  const [cartItem, setCartItem] = useState([]);
  const addtoCart = (product) => {
    setCartItem([...cartItem, product]);
    console.log("Product added to cart:", cartItem);
  };
  return (
    <CartContext.Provider value={{ cartItem, setCartItem, addtoCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
