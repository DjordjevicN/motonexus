import { useForm } from "react-hook-form";
import { UserFormData } from "../features/auth/types/registrationTypes";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";

const Registration = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
    reset,
  } = useForm<UserFormData>({
    mode: "onSubmit",
    defaultValues: {
      displayName: "",
      email: "",
      password: "",
    },
  });

  const registerUser = async (data: UserFormData) => {
    const res = await axios.post("/api/register", data);
    return res.data;
  };

  const { mutate } = useMutation({
    mutationFn: (data: UserFormData) => registerUser(data),
    onError: (error) => {
      console.error("Registration failed:", error);
    },
    onSuccess: (data) => {
      console.log("Registration successful:", data);
      reset();
    },
  });

  const onSubmit = (data: UserFormData) => {
    mutate(data);
  };

  return (
    <div className="flex justify-center items-center min-h-[100vh] w-full">
      <form onSubmit={handleSubmit(onSubmit)} className="max-w-md w-full">
        <div className="flex flex-col mb-4">
          <label htmlFor="displayName">Display Name</label>
          <input
            className="border-b border-b-gray-300 p-2 focus:outline-none"
            placeholder="Enter your display name"
            type="text"
            id="displayName"
            {...register("displayName", {
              required: "Display name is required",
              minLength: { value: 3, message: "At least 3 characters" },
            })}
          />
          {errors.displayName && (
            <span className="text-red-500 text-sm">
              {errors.displayName.message}
            </span>
          )}
        </div>

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

          <button type="button" className="text-blue-500 mt-2 cursor-pointer">
            I need to create an account
          </button>
        </div>
      </form>
    </div>
  );
};

export default Registration;
