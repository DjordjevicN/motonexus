import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router";
import { ROUTES } from "../constants/routes";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setAuth } from "../features/auth/authSlice";

type LoginUserTypes = {
  email: string;
  password: string;
};

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<LoginUserTypes>({
    mode: "onSubmit",
    defaultValues: {
      email: "nikola@gmail.com",
      password: "djalokin3223",
    },
  });

  const { mutate, isPending } = useMutation({
    mutationFn: async (data: LoginUserTypes) => {
      const res = await axios.post("http://localhost:4000/users/login", data, {
        withCredentials: true,
      });
      return res.data;
    },
    onSuccess: (data) => {
      const { user } = data;
      dispatch(setAuth(user));
      reset();
      navigate(ROUTES.DASHBOARD);
    },
    onError: (err) => {
      console.error("Login failed:", err);
    },
  });

  const handleLogin = (data: LoginUserTypes) => {
    mutate(data);
  };
  if (isPending) return <div>Loading...</div>;
  return (
    <div className="flex justify-center items-center min-h-[100vh] w-full">
      <form onSubmit={handleSubmit(handleLogin)} className="max-w-md w-full">
        <div className="mb-4 flex flex-col">
          <label htmlFor="email">Email</label>
          <input
            className="border-b border-b-gray-300 p-2 focus:outline-none"
            placeholder="Enter your email"
            type="email"
            id="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Invalid email address",
              },
            })}
          />
          {errors.email && (
            <span className="text-red-500 text-sm">{errors.email.message}</span>
          )}
        </div>
        <div className="mb-4 flex flex-col">
          <label htmlFor="password">Password</label>
          <input
            className="border-b border-b-gray-300 p-2 focus:outline-none"
            type="password"
            id="password"
            placeholder="Enter your password"
            {...register("password", {
              required: "Password is required",
              minLength: { value: 6, message: "Min 6 characters" },
            })}
          />
          {errors.password && (
            <span className="text-red-500 text-sm">
              {errors.password.message}
            </span>
          )}
        </div>
        <div className="flex justify-between items-center">
          <button
            className="bg-blue-500 text-white p-2 rounded cursor-pointer"
            type="submit"
          >
            {isSubmitting ? "Submitting..." : "Continue"}
          </button>

          <Link
            to={ROUTES.REGISTER}
            type="button"
            className="text-blue-500 mt-2 cursor-pointer"
          >
            I need to create an account
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
