import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { notfound } from "../utils/images";
import { addToCart } from "../store/reducers/UserSlice";

function ProductTemplate({ item }) {
  const { currentUser } = useSelector((state) => state?.UserReducer);
  const dispatch = useDispatch();

  const addTagzCart = (item) => {
    if (!currentUser) {
      toast.warning("Login to add items to cart");
      return;
    }

    try {
      dispatch(addToCart(item));
      toast.success("Item added to cart");
    } catch (error) {
      toast.error("Failed to add item to cart");
    }
  };

  return (
    <div className="w-full sm:w-[280px] md:w-[300px] bg-white rounded-2xl shadow-md p-5 flex flex-col justify-between transition-all hover:shadow-xl hover:-translate-y-1 duration-300">
      {/* Product Image */}
      <img
        src={item?.image}
        onError={(e) => (e.currentTarget.src = notfound)}
        alt={item.title}
        className="w-full h-48 object-contain mb-4"
      />

      {/* Title */}
      <h2 className="text-base font-semibold mb-2 text-center text-gray-800">
        {item.title.length > 40 ? item.title.slice(0, 40) + "..." : item.title}
      </h2>

      {/* Description */}
      <p className="text-sm text-gray-600 mb-2 text-center">
        {item.description.slice(0, 60)}...
      </p>

      {/* Category */}
      <span className="text-xs font-medium text-indigo-500 uppercase tracking-wide text-center block mb-3">
        {item.category}
      </span>

      {/* Price and Add to Cart Button */}
      <div className="flex items-center justify-between mt-auto">
        <p className="text-green-600 font-bold text-base">${item.price}</p>
        <button
          onClick={() => addTagzCart(item)}
          className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition"
        >
          Add to cart
        </button>
      </div>

      {/* More Info Link */}
      <Link
        to={`/product/${item.id}`}
        className="text-center text-sm text-indigo-600 hover:underline mt-4"
      >
        More Info
      </Link>
    </div>
  );
}

export default ProductTemplate;
