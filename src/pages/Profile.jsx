import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { logoutUser, updateUser } from "../store/reducers/UserSlice";

function Profile() {
  const { currentUser } = useSelector((state) => state?.UserReducer);

  const {
    register,
    handleSubmit,
  } = useForm({
    defaultValues: {
      username: currentUser?.username,
      password: currentUser?.password,
    },
  });

  let navigate = useNavigate();
  let dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(logoutUser());
    toast.success("User logged out");
    navigate("/");
  };

  const userUpdate = (data) => {
    dispatch(
      updateUser({
        email: currentUser.email,
        newData: {
          username: data.username,
          password: data.password,
        },
      })
    );
    toast.success("Profile updated successfully");
  };

  return currentUser ? (
    <div className="min-h-screen flex items-center justify-center py-10 bg-gray-50">
      <div className="rounded-2xl shadow-lg p-6 md:p-10 w-full max-w-4xl flex flex-col md:flex-row gap-10 bg-white">
        {/* Profile Section */}
        <div className="flex flex-col items-center justify-center md:w-1/3 border-b md:border-b-0 md:border-r border-gray-300 pr-0 md:pr-8 pb-6 md:pb-0">
          <div className="w-24 h-24 md:w-28 md:h-28 rounded-full flex items-center justify-center text-4xl md:text-5xl font-bold text-white bg-green-600 mb-4 shadow-md">
            {currentUser.username?.charAt(0).toUpperCase()}
          </div>
          <h1 className="text-xl md:text-2xl font-semibold mb-1 text-center text-gray-800">
            {currentUser.username}
          </h1>
          <p className="text-center mb-4 text-gray-600">{currentUser.email}</p>

          <button
            onClick={logoutHandler}
            type="button"
            className="bg-red-500 px-6 py-2 rounded-lg font-semibold text-white hover:bg-red-600 transition w-full"
          >
            Logout
          </button>
        </div>

        {/* Form Section */}
        <form
          className="flex-1 flex flex-col justify-center items-center"
          onSubmit={handleSubmit(userUpdate)}
          id='profile-id'
        >
          <h2 className="text-lg md:text-xl font-semibold mb-6 text-gray-800">Update Profile</h2>

          <input
            type="text"
            placeholder="Username"
            className="border border-gray-300 rounded-md bg-white outline-none w-full max-w-xs p-3 mb-4 placeholder-gray-400 focus:border-green-500 focus:ring-1 focus:ring-green-400"
            {...register("username")}
          />

          <input
            type="password"
            placeholder="Password"
            className="border border-gray-300 rounded-md bg-white outline-none w-full max-w-xs p-3 mb-6 placeholder-gray-400 focus:border-green-500 focus:ring-1 focus:ring-green-400"
            {...register("password")}
          />

          <button
            className="bg-green-600 hover:bg-green-700 text-white w-full max-w-xs px-4 py-2 rounded-lg font-semibold text-base transition mb-3"
          >
            Update User
          </button>
        </form>
      </div>
    </div>
  ) : (
    "Loading..."
  );
}

export default Profile;
