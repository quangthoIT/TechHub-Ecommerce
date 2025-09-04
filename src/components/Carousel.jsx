import { useEffect } from "react";
import { getData } from "../context/DataContext.jsx";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Category from "./Category.jsx";

const Carousel = () => {
  const { data, fetchAllProducts } = getData();
  // console.log(data);

  useEffect(() => {
    fetchAllProducts();
  }, []);

  const SamplePrevArrow = ({ className, onClick }) => (
    <div onClick={onClick} className={`${className} z-10`}>
      <ArrowLeft
        size={32}
        color="white"
        className="bg-red-500 rounded-full p-1 absolute left-[50px] top-1/2 -translate-y-1/2 cursor-pointer hover:bg-red-600 hover:scale-105"
      />
    </div>
  );

  const SampleNextArrow = ({ className, onClick }) => (
    <div onClick={onClick} className={`${className} z-10`}>
      <ArrowRight
        size={32}
        color="white"
        className="bg-red-500 rounded-full p-1 absolute right-[50px] top-1/2 -translate-y-1/2 cursor-pointer hover:bg-red-600 hover:scale-105"
      />
    </div>
  );

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Chế độ tự chạy
    autoplaySpeed: 5000, // Thời gian mỗi slide
    pauseOnHover: false, // Dừng khi hover
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextArrow />,
  };

  return (
    <div>
      <Slider {...settings}>
        {data?.slice(0, 7)?.map((item, index) => {
          return (
            <div
              key={index}
              className="bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e] -z-10]"
            >
              <div className="flex flex-col md:flex-row gap-10 justify-center h-[550px] md:h-[700px] my-20 md:my-0 items-center px-4">
                <div className="md:space-y-6 space-y-3">
                  <h3 className="text-red-500 fony-semibold font-sans md:text-xl text-base capitalize">
                    Powering your world with the best in electronics
                  </h3>
                  <h1 className="text-white font-bold md:text-3xl text-xl uppercase line-clamp-3 md:w-[600px]">
                    {item.title}
                  </h1>
                  <p className="md:w-[600px] text-sm md:text-lg text-gray-400 md:line-clamp-4 line-clamp-3 pr-7">
                    {item.description}
                  </p>
                  <button className="bg-gradient-to-r from-red-500  to-purple-700 text-white py-2 px-4 md:py-3 md:px-6 rounded-lg cursor-pointer hover:scale-105">
                    Shop Now
                  </button>
                </div>

                <div>
                  <img
                    src={item.image}
                    alt={item.name}
                    className="rounded-full w-[300px] md:w-[500px] bg-gray-200 hover:scale-105 transition-all shadow-2xl shadow-red-400"
                  />
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
      <Category />
    </div>
  );
};

export default Carousel;
