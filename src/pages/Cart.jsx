import { NotebookText, ShoppingBag, Trash2, Truck } from "lucide-react";
import { useCart } from "../context/CartContext";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";
import emptyCart from "../assets/empty-cart.png";

const Cart = () => {
  const { cartItem, updateQuantity, deleteItem } = useCart(); // Destructure cartItem from the useCart hook
  const { user } = useUser(); // Destructure user from the useUser hook

  const totalPrice = cartItem.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  ); // Tính tống gia cái trong giỏ hàng

  const navigate = useNavigate();

  // State cho địa chỉ giao hàng
  const [provinces, setProvinces] = useState([]);
  const [wards, setWards] = useState([]);

  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [province, setProvince] = useState("");
  const [ward, setWard] = useState("");
  const [detailedAddress, setDetailedAddress] = useState("");

  // Lấy danh sách tỉnh thành từ API
  useEffect(() => {
    fetch("https://provinces.open-api.vn/api/v2/p")
      .then((res) => res.json())
      .then((data) => setProvinces(data));
  }, []);

  // Lấy danh sách phường/xã theo tỉnh/thành phố
  useEffect(() => {
    if (province) {
      fetch(`https://provinces.open-api.vn/api/v2/p/${province}?depth=2`)
        .then((res) => res.json())
        .then((data) => setWards(data.wards || []));
      setWard("");
    }
  }, [province]);

  // Hàm xử lý checkout
  const handleCheckout = () => {
    // Trim để tránh trường hợp nhập toàn dấu cách
    const trimmedName = fullName.trim();
    const trimmedAddress = detailedAddress.trim();

    // Kiểm tra Full Name
    if (!trimmedName) {
      alert("Please enter your full name");
      return;
    }

    // Kiểm tra Phone Number
    if (!/^\d{10}$/.test(phoneNumber)) {
      alert("Phone number must be 10 digits and contain only numbers.");
      return;
    }

    // Kiểm tra Province & Ward
    if (!province || !ward) {
      alert("Please select both Province/City and Ward/Commune.");
      return;
    }

    // Kiểm tra Detailed Address
    if (!trimmedAddress) {
      alert("Please enter a more detailed address");
      return;
    }

    // Full Address
    const fullAddress = `${trimmedAddress}, ${
      ward ? wards.find((w) => w.code == ward)?.name : ""
    }, ${province ? provinces.find((p) => p.code == province)?.name : ""}`;

    // Hiển thị thông tin checkout
    alert(
      `Checkout Successfully!\nName: ${trimmedName}\nPhone: ${phoneNumber}\nAddress: ${fullAddress}`
    );
  };

  return (
    <div className="mt-10 max-w-6xl mx-auto mb-12">
      {cartItem.length > 0 ? (
        <div>
          <h1 className="font-bold text-2xl">My Cart ({cartItem.length})</h1>
          <div>
            <div className="mt-10">
              {cartItem.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="bg-gray-100 p-5 rounded-xl flex items-center justify-between mt-3 w-full"
                  >
                    {/* Product */}
                    <div className="flex items-center gap-4">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-20 h-20 rounded-md"
                      />
                      <div>
                        <h1 className="w-[300px] line-clamp-2">{item.title}</h1>
                        <p className="font-semibold text-red-500 text-lg">
                          ${item.price * item.quantity}
                        </p>
                      </div>
                    </div>
                    {/* Quantity */}
                    <div className="bg-red-500 text-white flex gap-4 p-2 rounded-md font-bold text-xl">
                      <button
                        className="cursor-pointer"
                        onClick={() => updateQuantity(item.id, "decrease")}
                      >
                        -
                      </button>
                      <span className="text-lg">{item?.quantity}</span>
                      <button
                        className="cursor-pointer"
                        onClick={() => updateQuantity(item.id, "increase")}
                      >
                        +
                      </button>
                    </div>
                    {/* Delete */}
                    <div
                      className="text-red-500 cursor-pointer hover:text-red-600 transition-all hover:shadow-2xl p-2 rounded-full"
                      onClick={() => deleteItem(item.id)}
                    >
                      <Trash2 className="w-6 h-6" />
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Delivery Info */}
            <div className="grid grid-cols-2 gap-10 ">
              <div className="bg-gray-100 rounded-md p-5 mt-5 space-y-2 shadow-md">
                <h1 className="font-bold text-xl">Delivery Info</h1>
                {/* Full Name + Phone */}
                <div className="flex gap-4 mt-4">
                  <div className="flex flex-col space-y-1 w-full">
                    <label htmlFor="" className="text-gray-900 font-semibold">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your full name"
                      // value={user.fullName} // Lấy tên người dùng từ tài khoản
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="bg-gray-50 border border-gray-200 rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-gray-400 placeholder:text-gray-500 placeholder:transition-opacity placeholder:duration-800 focus:placeholder:opacity-0"
                    ></input>
                  </div>

                  <div className="flex flex-col space-y-1 w-full">
                    <label htmlFor="" className="text-gray-900 font-semibold">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      placeholder="Enter your phone number"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      className="bg-gray-50 border border-gray-200 rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-gray-400 placeholder:text-gray-500 placeholder:transition-opacity placeholder:duration-800 focus:placeholder:opacity-0"
                    ></input>
                  </div>
                </div>
                {/* Province + Ward */}
                <div className="flex gap-4 mt-4">
                  <div className="flex flex-col space-y-1 w-full">
                    {/* Dropdown chọn Tỉnh/Thành phố */}
                    <label htmlFor="" className="text-gray-900 font-semibold">
                      Province/City <span className="text-red-500">*</span>
                    </label>
                    <select
                      className={`bg-gray-50 border border-gray-200 rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-gray-400 ${
                        province ? "text-black" : "text-gray-500"
                      }`}
                      value={province}
                      onChange={(e) => setProvince(e.target.value)}
                    >
                      <option value="">Select Province/City</option>
                      {provinces.map((p) => (
                        <option key={p.code} value={p.code}>
                          {p.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="flex flex-col space-y-1 w-full">
                    {/* Dropdown chọn Xã/Phường */}
                    <label htmlFor="" className="text-gray-900 font-semibold">
                      Ward/Commune <span className="text-red-500">*</span>
                    </label>
                    <select
                      className={`bg-gray-50 border border-gray-200 rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-gray-400 ${
                        ward ? "text-black" : "text-gray-500"
                      }`}
                      value={ward}
                      onChange={(e) => setWard(e.target.value)}
                    >
                      <option value="">Select Ward/Commune</option>
                      {wards.map((w) => (
                        <option key={w.code} value={w.code}>
                          {w.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                {/* Detailed Address */}
                <div className="flex flex-col space-y-1 mt-4">
                  <label htmlFor="" className="text-gray-900 font-semibold">
                    Detailed Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="House Number, Street"
                    value={detailedAddress}
                    onChange={(e) => setDetailedAddress(e.target.value)}
                    className="bg-gray-50 border border-gray-200 rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-gray-400 placeholder:text-gray-500 placeholder:transition-opacity placeholder:duration-800 focus:placeholder:opacity-0"
                  />
                </div>
                {/* Back + Checkout */}
                <div className="flex justify-end gap-2 mt-5">
                  <button
                    onClick={() => navigate(-1)}
                    className="bg-white text-black border border-gray-200 px-4 py-2 rounded-md cursor-pointer hover:text-white hover:bg-red-600 transition-all duration-300"
                  >
                    Back
                  </button>
                  <button
                    onClick={handleCheckout}
                    className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 transition-all duration-300 cursor-pointer"
                  >
                    Checkout
                  </button>
                </div>
              </div>

              {/* Order Summary */}
              <div className="bg-white rounded-md p-5 mt-5 space-y-2 border border-gray-100 shadow-md h-max">
                <h1 className="font-bold text-xl">Order Summary</h1>
                {/* Total */}
                <div className="flex gap-2 justify-between items-center text-gray-900 mt-3">
                  <h1 className="flex gap-2 items-center text-gray-900">
                    <span>
                      <NotebookText />
                    </span>
                    Items Total
                  </h1>
                  <p>${totalPrice}</p>
                </div>
                {/* Delivery */}
                <div className="flex gap-2 justify-between items-center text-gray-900 mt-3">
                  <h1 className="flex gap-2 items-center">
                    <span>
                      <Truck />
                    </span>
                    Delivery Charge
                  </h1>
                  <p className="text-red-500 font-semibold">
                    <span className="text-gray-900 line-through">$25</span> Free
                  </p>
                </div>
                {/* Handling */}
                <div className="flex gap-2 justify-between items-center text-gray-900 mt-3">
                  <h1 className="flex gap-2 items-center">
                    <span>
                      <ShoppingBag />
                    </span>
                    Handling Charge
                  </h1>
                  <p className="text-red-500 font-semibold">$5</p>
                </div>
                {/* Grand Total */}
                <hr className="text-gray-200 mt-3" />
                <div className="flex gap-2 justify-between items-center text-gray-900 font-semibold text-lg mt-3">
                  <h1>Grand Total</h1>
                  <p>${totalPrice + 5}</p>
                </div>
                {/* Promo Code*/}
                <div>
                  <h1 className="font-semibold text-gray-700 mb-3 mt-4">
                    Apply Promo Code
                  </h1>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Enter code"
                      className="p-2 rounded-md w-full border border-gray-200 focus:outline-none focus:ring-1 focus:ring-gray-400
                      placeholder:text-gray-500 placeholder:transition-opacity placeholder:duration-800 focus:placeholder:opacity-0"
                    />
                    <button className="bg-white text-black border border-gray-200 px-4 py-2 rounded-md cursor-pointer hover:bg-red-600  hover:text-white transition-all duration-300">
                      Apply
                    </button>
                  </div>
                </div>
                <button className="w-full bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 transition-all duration-300 cursor-pointer mt-3">
                  Proceed to Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        // Empty Cart
        <div className="flex flex-col gap-3 justify-between items-center h-[600px]">
          <h1 className="text-4xl text-red-500 font-bold text-muted">
            Oh no! Your cart is empty
          </h1>
          <img src={emptyCart} alt="empty Cart" className="w-[450px]" />
          <button
            className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-md cursor-pointer"
            onClick={() => navigate("/products")}
          >
            Continue Shopping
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
