import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store.jsx";
import { ToastContainer, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
        <ToastContainer
          position="top-right"
          autoClose={1300}
          limit={3}
          hideProgressBar={false}
          closeOnClick
          pauseOnHover={false}
          draggable
          transition={Zoom}
          theme="light"
        />
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
