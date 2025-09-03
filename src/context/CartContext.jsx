import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";

export const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
  const [cartItem, setCartItem] = useState([]);
  const addtoCart = (product, quantity = 1) => {
    // Ép price từ API về number
    const numericPrice = Number(product.price);
    const itemInCart = cartItem.find((item) => item.id === product.id);
    if (itemInCart) {
      // Nếu đã có thì cộng thêm quantity mới
      const updatedCart = cartItem.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + quantity }
          : item
      );
      setCartItem(updatedCart);
      toast.success("Product quantity is updated !");
    } else {
      // Add the new item to the cart
      setCartItem([...cartItem, { ...product, price: numericPrice, quantity }]);
      toast.success("Product is added to cart !");
    }
  };

  const updateQuantity = (productId, action) => {
    setCartItem(
      cartItem
        .map((item) => {
          if (item.id === productId) {
            let newUnit = item.quantity;
            if (action === "increase") {
              newUnit = item.quantity + 1;
              toast.success("Quantity is increased !");
            } else if (action === "decrease") {
              newUnit = item.quantity - 1;
              toast.success("Quantity is decreased !");
            }
            return newUnit > 0 ? { ...item, quantity: newUnit } : null;
          }
          return item;
        })
        .filter((item) => item !== null)
    );
  };

  const deleteItem = (productId) => {
    setCartItem(cartItem.filter((item) => item.id !== productId));
    toast.success("Product is removed from cart !");
  };

  return (
    <CartContext.Provider
      value={{ cartItem, setCartItem, addtoCart, updateQuantity, deleteItem }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
