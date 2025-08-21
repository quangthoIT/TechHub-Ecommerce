import { Link } from "react-router-dom";

const Breadcrums = ({ title }) => {
  return (
    <div className="max-w-6xl mx-auto my-10">
      {/* Sử dụng Link để chuyển trang */}
      <h1 className="text-xl text-gray-700 font-semibold">
        <Link to="/" className="cursor-pointer hover:text-red-500">
          Home
        </Link>
        <span> / </span>
        <Link to="/products" className="cursor-pointer hover:text-red-500">
          Products
        </Link>
        <span> / </span>
        <span>{title}</span>
      </h1>
    </div>
  );
};

export default Breadcrums;
