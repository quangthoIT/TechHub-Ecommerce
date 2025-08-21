import { getData } from "../context/DataContext";
import { ListFilter } from "lucide-react";
const FilterSection = ({
  search,
  setSearch,
  brand,
  setBrand,
  category,
  setCategory,
  priceRange,
  setPriceRange,
  handleBrandChange,
  handleCategoryChange,
  sortOption,
  setSortOption,
}) => {
  const { categoryOnlyData, brandOnlyData } = getData();

  const sortedBrands = [
    "All",
    ...brandOnlyData
      .filter((b) => b !== "All")
      .sort((a, b) => a.localeCompare(b)),
  ];

  return (
    <div className="bg-gray-100 mt-11 mb-10 p-6 rounded-xl h-max">
      {/* Search Input */}
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="bg-white p-2 rounded-md border-gray-400 border-1"
      />

      {/* Category Only Data */}
      <h1 className="mt-4 font-semibold text-xl">Category</h1>
      <div className="flex flex-col gap-2 mt-3">
        {categoryOnlyData?.map((item, index) => {
          return (
            <div key={index} className="flex items-center gap-2">
              <input
                type="checkbox"
                name={item}
                checked={category === item}
                value={item}
                onChange={handleCategoryChange}
                className="accent-red-500 cursor-pointer w-4 h-4"
              />
              <button className="cursor-pointer uppercase ">{item}</button>
            </div>
          );
        })}
      </div>

      {/* Brand Only Data */}
      <h1 className="mt-4 font-semibold text-xl">Brand</h1>
      <select
        name=""
        id=""
        value={brand}
        onChange={handleBrandChange}
        className="bg-white p-2 border-gray-200 border-2 rounded-md w-full mt-3 cursor-pointer"
      >
        {sortedBrands?.map((item, index) => {
          return (
            <option key={index} value={item}>
              {item.toUpperCase()}
            </option>
          );
        })}
      </select>

      {/* Price Range */}
      <h1 className="mt-4 font-semibold text-xl">Price Range</h1>
      <div className="flex flex-col gap-2 mt-3">
        <label htmlFor="">
          Price Range: ${priceRange[0]} - ${priceRange[1]}
        </label>
        <input
          type="range"
          name=""
          id=""
          min={0}
          max={5000}
          value={priceRange[1]}
          onChange={(e) =>
            setPriceRange([priceRange[0], Number(e.target.value)])
          }
          className="accent-red-500 cursor-pointer"
        ></input>
      </div>

      {/* Sort By */}
      <h1 className="mt-4 font-semibold text-xl">Sort By</h1>
      <select
        value={sortOption}
        onChange={(e) => setSortOption(e.target.value)}
        className="bg-white p-2 border-gray-200 border-2 rounded-md w-full mt-3 cursor-pointer"
      >
        <option value="default">Default</option>
        <option value="priceLowHigh">Price: Low → High</option>
        <option value="priceHighLow">Price: High → Low</option>
        <option value="az">Name: A → Z</option>
        <option value="za">Name: Z → A</option>
      </select>

      {/* Button Reset */}
      <button
        className="bg-red-500 hover:bg-red-600 text-white font-semibold w-full py-2 px-4 rounded-lg transition duration-300 cursor-pointer mt-3"
        onClick={() => {
          setSearch("");
          setCategory("All");
          setBrand("All");
          setSortOption("default");
          setPriceRange([0, 5000]);
        }}
      >
        Reset Filters
      </button>
    </div>
  );
};

export default FilterSection;
