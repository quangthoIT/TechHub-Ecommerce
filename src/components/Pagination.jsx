const getPages = ({ current, total }) => {
  const pages = [];
  if (total <= 5) {
    for (let i = 1; i <= total; i++) {
      pages.push(i);
    }
  } else {
    if (current <= 3) {
      pages.push(1, 2, 3, "...", total);
    } else if (current >= total - 2) {
      pages.push(1, "...", total - 2, total - 1, total);
    } else {
      pages.push(1, "...", current - 1, current, current + 1, "...", total);
    }
  }
  return pages;
};
const Pagination = ({ page, pageHandler, dynamicPage }) => {
  return (
    <div className="m-10 flex items-center justify-center space-x-2">
      <button
        disabled={page === 1}
        onClick={() => pageHandler(page - 1)}
        className={`${
          page === 1 ? "bg-red-400" : "bg-red-500 hover:bg-red-600"
        } text-white px-3 py-1 rounded-md cursor-pointer `}
      >
        Prev
      </button>
      {getPages({ current: page, total: dynamicPage })?.map((item, index) => {
        return (
          <span
            key={index}
            onClick={() => typeof item === "number" && pageHandler(item)}
            className={`cursor-pointer ${
              item === page ? "font-bold text-red-600" : "text-black"
            }`}
          >
            {item}
          </span>
        );
      })}
      <button
        disabled={page === dynamicPage}
        onClick={() => pageHandler(page + 1)}
        className={`${
          page === dynamicPage ? "bg-red-400" : "bg-red-500 hover:bg-red-600"
        } text-white px-3 py-1 rounded-md cursor-pointer`}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
