import { ShoppingCart } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const { addtoCart, cartItem } = useCart();

  return (
    <div className="border relative border-gray-100 rounded-2xl cursor-pointer hover:scale-105 hover:shadow-2xl transition-all p-2 h-max">
      {/* Sử dụng navigate để chuyển trang */}
      <img
        src={product.image}
        alt=""
        className="bg-gray-100 aspect-square"
        onClick={() => navigate(`/products/${product.id}`)}
      />
      <h1
        className="line-clamp-2 p-1 font-semibold"
        onClick={() => navigate(`/products/${product.id}`)}
      >
        {product.title}
      </h1>

      <p className="my-2 text-lg text-gray-800 font-bold">${product.price}</p>
      <button
        className="bg-red-500 hover:bg-red-600 text-white text-lg font-semibold w-full justify-center items-center py-2 px-3 rounded-lg transition duration-300 cursor-pointer flex gap-2"
        onClick={() => addtoCart(product)}
      >
        <ShoppingCart className="w-6 h-6" /> Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
