import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../store/reducers/UserSlice";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { i } from "motion/react-client";

function Login() {
  const { currentUser } = useSelector((state) => state.UserReducer);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    currentUser && navigate('/')
  },[])
  
  const UserLoggedIn = (data) => {
    dispatch(loginUser(data));

    if (currentUser) {
      navigate("/");
      toast.success("Login successful!");
    } 
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-gray-100 ">
      <form
        onSubmit={handleSubmit(UserLoggedIn)}
        className="w-full max-w-md sm:w-[80%] md:w-[60%] lg:w-[40%] bg-white  p-8 rounded-lg shadow-md  space-y-6"
      >
        <h2 className="text-2xl font-semibold  text-center">
          Login to Your Account
        </h2>

        {/* Email Field */}
        <div className="flex flex-col">
          <label className="text-sm text-gray-700  mb-1">Email</label>
          <input
            type="email"
            placeholder="user@gmail.com"
            className="px-4 py-2 rounded flex-1 border-b outline-none focus:ring-2 ring-blue-400"
            {...register("email", { required: true })}
          />
          {errors.email && (
            <span className="text-red-500 text-xs mt-1">Email is required</span>
          )}
        </div>

        {/* Password Field */}
        <div className="flex flex-col">
          <label className="text-sm text-gray-700  mb-1">Password</label>
          <input
            type="password"
            placeholder="Password"
            className="px-4 py-2 rounded flex-1 border-b outline-none focus:ring-2 ring-blue-400"
            {...register("password", {
              required: true,
            })}
          />
          {errors.password?.type === "required" && (
            <span className="text-red-500 text-xs mt-1">
              Password is required
            </span>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-green-600 text-white py-1 cursor-pointer rounded hover:bg-green-700 transition text-xl font-semibold"
        >
          Login
        </button>

        {/* Register redirect */}
        <p className="text-sm text-gray-700  text-center">
          Not registered yet?{" "}
          <span
            onClick={() => navigate("/register")}
            className="text-blue-600  cursor-pointer hover:underline"
          >
            Register
          </span>
        </p>
      </form>
    </div>
  );
}

export default Login;
