import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../store/reducers/UserSlice";
import { toast } from "react-toastify";
import {notfound} from "../utils/images";

function ProductDetails() {
  const { id } = useParams();
  const { products } = useSelector((state) => state.ProductReducer);
  const { currentUser } = useSelector((state) => state.UserReducer);
  const dispatch = useDispatch();

  const product = products.find((p) => p.id === id);

  const addToCartHandler = () => {
    if (!currentUser) {
      toast.warning("Login to add items to cart");
      return;
    }

    try {
      dispatch(addToCart(product));
      toast.success("Item added to cart");
    } catch (error) {
      toast.error("Failed to add item to cart");
    }
  };

  if (!product)
    return <div className="text-center py-20">Product Not Found</div>;

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-10 bg-gray-50">
      <div className="max-w-4xl w-full flex flex-col md:flex-row gap-8 bg-white rounded-xl shadow-lg p-6">
        {/* Image Section */}
        <div className="flex-1 flex items-center justify-center">
          <img
            loading="lazy"
            src={product.image}
            onError={(e) => (e.currentTarget.src = notfound)}
            alt={product.title}
            className="max-w-full max-h-96 object-contain rounded"
          />
        </div>

        {/* Product Details */}
        <div className="flex-1 flex flex-col justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-800 mb-4">
              {product.title}
            </h1>
            <p className="text-gray-600 text-base mb-4">
              {product.description}
            </p>
            {product.quantities && (
              <p className="text-sm text-gray-500 mb-2 font-medium">
                Quantities: {product.quantities}
              </p>
            )}
            <p className="text-lg font-bold text-green-600 mb-6">
              ₹{product.price}
            </p>
          </div>

          <button
            onClick={addToCartHandler}
            className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-all duration-300 mt-4"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
