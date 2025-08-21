import { getData } from "../context/DataContext";

const Category = () => {
  const { categoryOnlyData } = getData();

  return (
    <div className="bg-[#101829]">
      <div className="max-w-7xl mx-auto flex gap-4 items-center justify-around py-7 px-4">
        {categoryOnlyData.map((item, index) => {
          return (
            <div key={index}>
              <button className="text-white uppercase bg-gradient-to-r from-red-500 to-purple-700 w-[120px] py-2 px-3 md:py-3 md:px-4 rounded-md hover:scale-105 cursor-pointer">
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
