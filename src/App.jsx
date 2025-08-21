import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import Navbar from "./components/Navbar";
import axios from "axios";
import Footer from "./components/Footer";
import SingleProduct from "./pages/SingleProduct";

const App = () => {
  const [location, setLocation] = useState();
  const [openDropdown, setOpenDropdown] = useState(false);
  const [loadingLocation, setLoadingLocation] = useState(false);
  const [locationError, setLocationError] = useState("");

  const getLocation = async () => {
    setLoadingLocation(true);
    setLocationError(""); // Reset lỗi cũ

    // Kiểm tra xem trình duyệt có hỗ trợ định vị hay không
    if (!navigator.geolocation) {
      setLocationError("The browser does not support geolocation.");
      setLoadingLocation(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
        // console.log(latitude, longitude);
        const url = `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`;

        try {
          const location = await axios.get(url);
          const exactLocation = location.data.address;
          setLocation(exactLocation);
          setOpenDropdown(false); // Đóng mở Dropdown
          // console.log(exactLocation);
        } catch {
          setLocationError("Unable to get address from server."); // Lỗi khi lấy vị trí
        } finally {
          setLoadingLocation(false);
        }
      },
      (err) => {
        if (err.code === 1) {
          setLocationError("You have denied location access."); // Lỗi khi người dùng khóa truy cập vị trí
        } else if (err.code === 2) {
          setLocationError("Location cannot be determined."); // Không thể xác định vị trí
        } else if (err.code === 3) {
          setLocationError(
            "The request to get the location took too long and was canceled."
          ); // Yêu cầu lấy vị trí quá lâu, đã bị hủy.
        } else {
          setLocationError("Unknown error while getting location."); // Lỗi không xác định khi lấy vị trí.
        }
        setLoadingLocation(false);
      }
    );
  };

  useEffect(() => {
    getLocation();
  }, []);

  return (
    <BrowserRouter>
      <Navbar
        location={location}
        getLocation={getLocation}
        openDropdown={openDropdown}
        setOpenDropdown={setOpenDropdown}
        loadingLocation={loadingLocation}
        locationError={locationError}
      />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/products/:id" element={<SingleProduct />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
