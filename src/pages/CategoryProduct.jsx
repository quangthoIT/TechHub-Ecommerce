import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../assets/Loading.webm";
import { ChevronLeft } from "lucide-react";
import axios from "axios";
import ProductList from "../components/ProductList";

const CategoryProduct = () => {
  const [searchData, setSearchData] = useState([]);
  const params = useParams();
  const category = params.category;
  console.log(category);
  const getFilterData = async () => {
    try {
      const res = await axios.get(
        `https://fakestoreapi.in/api/products/category?type=${category}`
      );
      const data = res.data.products;
      setSearchData(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getFilterData();
  });
  return (
    <div>
      {searchData.length > 0 ? (
        <div className="max-w-7xl mx-auto mt-10 mb-10 px-4">
          <button className="bg-gray-800 text-white hover:bg-gray-900 rounded-md px-4 py-2 flex items-center gap-2 cursor-pointer mb-5">
            <ChevronLeft /> Back
          </button>
          {searchData.map((product, index) => {
            return <ProductList key={index} product={product} />;
          })}
        </div>
      ) : (
        <div className="flex items-center justify-between h-[400px]">
          <video muted autoPlay loop className="w-[300px] mx-auto">
            <source src={Loading} type="video/webm" />
          </video>
        </div>
      )}
    </div>
  );
};

export default CategoryProduct;
