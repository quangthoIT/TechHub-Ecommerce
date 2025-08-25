import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../assets/Loading.webm";
import Breadcrums from "../components/Breadcrums";
import { ShoppingCart } from "lucide-react";
import { useCart } from "../context/CartContext";

const SingleProduct = () => {
  const params = useParams();
  const { addtoCart, cartItem } = useCart();
  const [SingleProduct, setSingleProduct] = useState("");

  const getSingleProduct = async () => {
    try {
      const res = await axios.get(
        `https://fakestoreapi.in/api/products/${params.id}`
      );
      const product = res.data.product;
      setSingleProduct(product);
    } catch (error) {
      console.log("Error fetching product:", error);
    }
  };

  useEffect(() => {
    getSingleProduct();
  });

  const OrginalPrice = Math.round(
    SingleProduct.price / (1 - SingleProduct.discount / 100)
  );

  return (
    <>
      {SingleProduct ? (
        <div className="px-4 pb-5 md:px-0">
          <Breadcrums title={SingleProduct.title} />
          <div className="max-w-6xl mx-auto md:p-6 grid grid-cols-[2.5fr_3fr] gap-12">
            {/* Product Image */}
            <div className="w-full">
              <img
                src={SingleProduct.image}
                alt={SingleProduct.title}
                className="rounded-2xl w-full object-cover"
              />
            </div>

            {/* Product Details */}
            <div className="flex flex-col gap-6">
              {/* Product Title */}
              <h1 className="text-2xl font-bold text-gray-700">
                {SingleProduct.title}
              </h1>
              {/* Product Brand */}
              <div className="text-gray-400">
                {SingleProduct.brand?.toUpperCase()}
                <span> / </span>
                {SingleProduct.category?.toUpperCase()}
                <span> / </span>
                {SingleProduct.model?.toUpperCase()}
              </div>
              {/* Product Price */}
              <p className="text-xl text-red-500 font-bold">
                ${SingleProduct.price}
                <span className="line-through text-gray-500 ml-2">
                  ${OrginalPrice}
                </span>
                <span className="bg-red-500 text-white p-2 rounded-md ml-2">
                  {SingleProduct.discount}% discount
                </span>
              </p>
              {/* Product Description */}
              <p className="text-gray-600 text-justify">
                {SingleProduct.description}
              </p>
              {/* Quantity Selector */}
              <div className="flex items-center gap-2">
                <label htmlFor="" className="text-gray-700 font-semibold">
                  Quantity:
                </label>
                <input
                  type="number"
                  min={1}
                  defaultValue={1}
                  className="w-20 border border-gray-300 rounded-md px-2 py-1 focus:outline-none focus:ring-1 focus:ring-red-500"
                />
              </div>
              {/* Add to Cart Button */}
              <div className="mt-2">
                <button
                  className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white font-semibold text-lg py-2 px-6 rounded-lg transition duration-300 cursor-pointer"
                  onClick={() => addtoCart(SingleProduct)}
                >
                  <ShoppingCart className="w-6 h-6" /> Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center h-screen">
          <video muted autoPlay loop width={200}>
            <source src={Loading} type="video/webm" />
          </video>
        </div>
      )}
    </>
  );
};

export default SingleProduct;
