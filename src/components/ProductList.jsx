import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
const ProductList = ({ product }) => {
  const navigate = useNavigate();
  const { addtoCart } = useCart();

  return (
    <div className="space-y-4 mt-4">
      <div className="bg-gray-100 flex gap-7 items-center p-4 rounded-xl hover:scale-102 hover:shadow-md transition-all">
        <img
          src={product.image}
          alt={product.title}
          className="h-50 w-50 rounded-md cursor-pointer hover:scale-101 transition-all"
          onClick={() => navigate(`/products/${product.id}`)}
        />
        <div className="space-y-2">
          <h1
            className="font-bold text-xl line-clamp-3 hover:text-red-600 w-full cursor-pointer"
            onClick={() => navigate(`/products/${product.id}`)}
          >
            {product.title}
          </h1>
          <p className="font-semibold flex gap-2 text-lg items-center">
            <span className="text-3xl">${product.price}</span>(
            {product.discount}% off)
          </p>
          <p>
            Free Delivery
            <span className="font-semibold"> Sat, 6 September</span> <br />
            or Fastest Delivery{" "}
            <span className="font-semibold">Tomorrow, 5 September</span>
          </p>
          <button
            className="bg-red-500 hover:bg-red-600 text-white text-lg font-semibold justify-center items-center py-1 px-3 rounded-md transition duration-300 cursor-pointer"
            onClick={() => addtoCart(product)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
