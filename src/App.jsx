import { useDispatch } from "react-redux";
import MainRoutes from "./routes/MainRoutes";
import { ArrowUp } from "lucide-react";
import { useEffect } from "react";
import { loadProduct } from "./store/reducers/ProductSlice";
import { getProducts } from "./data/db";
import { loginUser } from "./store/reducers/UserSlice";
import 'react-toastify/dist/ReactToastify.css';


function App() {
  const dispatch = useDispatch();
  let data = JSON.parse(localStorage.getItem("currentUser"));
  useEffect(() => {
    getProducts && dispatch(loadProduct(getProducts));
    if (data) {
      dispatch(loginUser(data));
    }
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen w-full relative overflow-x-hidden">
      <MainRoutes />

      <button
        className="absolute z-50 bottom-4 right-4 bg-yellow-400 px-4 py-2 rounded-md shadow-md hover:bg-yellow-500 transition"
        onClick={scrollToTop}
      >
        <ArrowUp />
      </button>
    </div>
  );
}

export default App;
