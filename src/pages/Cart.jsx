import { useSelector, useDispatch } from "react-redux";
import { Minus, Plus } from "lucide-react";
import { toast } from "react-toastify";
import {
  decrementQuantity,
  incrementQuantity,
  clearCart,
} from "../store/reducers/UserSlice";

function Cart() {
  const user = useSelector((state) => state?.UserReducer?.currentUser);
  const cart = user?.cart || [];
  const dispatch = useDispatch();

  const handleIncrease = (id) => dispatch(incrementQuantity(id));
  const handleDecrease = (id) => dispatch(decrementQuantity(id));

  const cartTotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleCheckout = () => {
    if (cart.length === 0) return;

    toast.success("✅ Order placed! Your items will be delivered to your address.");
    dispatch(clearCart()); // custom action to empty the cart
  };

  return (
    <div className="max-w-4xl min-h-screen mx-auto px-4 py-8 mt-10">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>

      {cart.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        <>
          <div className="space-y-4">
            {cart.map((item, idx) => (
              <div
                key={item.id}
                className="flex items-center gap-6 border-b pb-4"
              >
                <span className="font-bold w-6">{idx + 1}.</span>
                <img loading="lazy"
                  src={item.image}
                  alt={item.title}
                  className="w-16 h-16 object-cover rounded"
                />
                <div className="flex-1">
                  <h2 className="font-semibold">{item.title}</h2>
                  <div className="flex items-center gap-2 mt-1">
                    <button
                      onClick={() => handleDecrease(item.id)}
                      className="bg-gray-200 px-2 rounded hover:bg-gray-300"
                    >
                      <Minus size={16} />
                    </button>
                    <span className="px-2">{item.quantity}</span>
                    <button
                      onClick={() => handleIncrease(item.id)}
                      className="bg-gray-200 px-2 rounded hover:bg-gray-300"
                    >
                      <Plus size={16} />
                    </button>
                  </div>
                </div>
                <div className="text-sm font-medium">
                  ₹{item.price} × {item.quantity} = ₹
                  {item.price * item.quantity}
                </div>
              </div>
            ))}
          </div>

          <div className="text-right mt-6 text-xl font-semibold">
            Total: ₹{cartTotal}
          </div>

          <div className="text-right mt-4">
            <button
              onClick={handleCheckout}
              className="bg-green-600 text-white font-semibold px-6 py-2 rounded hover:bg-green-700 transition"
            >
              Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
