import { useContext, useEffect } from "react";
import { getData } from "../context/DataContext";

const Category = () => {
  const { data, fetchAllProducts } = getData();

  const getUniqueCategory = (data, property) => {
    let newVal = data?.map((curElem) => {
      return curElem[property];
    });
    newVal = [...new Set(newVal)];
    return newVal;
  };

  const categoryOnlyData = getUniqueCategory(data, "category");
  console.log(categoryOnlyData);

  useEffect(() => {
    fetchAllProducts();
  }, []);

  return (
    <div className="bg-[#101829]">
      <div className="max-w-7xl mx-auto flex gap-4 items-center justify-around py-7 px-4">
        {categoryOnlyData.map((item, index) => {
          return (
            <div key={index}>
              <button className="text-white uppercase bg-gradient-to-r from-red-500 to-purple-700 w-[120px] px-3 py-2 rounded-md hover:scale-105 cursor-pointer">
                {item}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Category;
