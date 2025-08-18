import axios from "axios";
import { useState } from "react";
import { DataContext } from "./DataContext";

const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);

  const fetchAllProducts = async () => {
    try {
      const res = await axios.get(
        "https://fakestoreapi.in/api/products?limit=150"
      );
      console.log(res);
      const userData = res.data.products;
      setData(userData);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <DataContext.Provider value={{ data, setData, fetchAllProducts }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
