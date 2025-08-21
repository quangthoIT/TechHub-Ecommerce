import { ShoppingCart } from "lucide-react";

const ProductCard = ({ product }) => {
  return (
    <div className="border relative border-gray-100 rounded-2xl cursor-pointer hover:scale-105 hover:shadow-2xl transition-all p-2 h-max">
      <img src={product.image} alt="" className="bg-gray-100 aspect-square" />
      <h1 className="line-clamp-2 p-1 font-semibold">{product.title}</h1>
      <p className="my-2 text-lg text-gray-800 font-bold">${product.price}</p>
      <button className="bg-red-500 hover:bg-red-600 text-white text-lg font-semibold w-full justify-center items-center py-2 px-3 rounded-lg transition duration-300 cursor-pointer flex gap-2">
        <ShoppingCart /> Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
