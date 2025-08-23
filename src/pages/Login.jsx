import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../store/reducers/UserSlice";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Eye, EyeOff, Mail, LockKeyhole } from "lucide-react";

function Login() {
  const { currentUser, error } = useSelector((state) => state.UserReducer);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [showPassword, setShowPassword] = useState(false);
  const togglePassword = () => setShowPassword((prev) => !prev);

  useEffect(() => {
    if (currentUser) {
      toast.success("Login successful!");
      navigate("/");
    }
  }, [currentUser, navigate]);

  useEffect(() => {
    if (error) {
      toast.error("Invalid credentials!");
    }
  }, [error]);

  const UserLoggedIn = (data) => {
    dispatch(loginUser(data));
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-gray-200">
      <form
        onSubmit={handleSubmit(UserLoggedIn)}
        className="w-full max-w-md sm:w-[80%] md:w-[60%] lg:w-[40%] bg-white p-8 rounded-lg shadow-md space-y-6"
      >
        <h2 className="text-2xl font-semibold text-center">
          Login to Your Account
        </h2>

        {/* Email */}
        <div className="flex flex-col">
          <label className="text-sm text-gray-700 mb-1">Email</label>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500">
              <Mail size={18} />
            </span>
            <input
              type="email"
              placeholder="user@gmail.com"
              className="pl-10 pr-4 py-2 rounded w-full border-b outline-none "
              {...register("email", { required: true })}
            />
          </div>
          {errors.email && (
            <span className="text-red-500 text-xs mt-1">Email is required</span>
          )}
        </div>

        {/* Password */}
        <div className="flex flex-col">
          <label className="text-sm text-gray-700 mb-1">Password</label>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500">
              <LockKeyhole size={18} />
            </span>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="pl-10 pr-10 py-2 rounded w-full border-b outline-none"
              {...register("password", {
                required: true,
              })}
            />
            <span
              className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer text-gray-500"
              onClick={togglePassword}
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </span>
          </div>
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
        <p className="text-sm text-gray-700 text-center">
          Not registered yet?{" "}
          <span
            onClick={() => navigate("/register")}
            className="text-blue-600 cursor-pointer hover:underline"
          >
            Register
          </span>
        </p>
      </form>
    </div>
  );
}

export default Login;
