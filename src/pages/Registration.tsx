import { set, useForm } from "react-hook-form";
import { UserFormData } from "../features/auth/types/registrationTypes";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { Link, useNavigate } from "react-router";
import { ROUTES } from "../constants/routes";
import logo from "../assets/logo.svg";
import { useNotify } from "../hooks/useNotify";
import { API_URL } from "../constants/urls";
import { useDispatch } from "react-redux";
import { setAuth } from "../features/auth/authSlice";
import MyInput from "@/components/MyInput";
import { Button } from "@/components/ui/button";

const Registration = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const notify = useNotify();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
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
    const res = await axios.post(`${API_URL}/users`, data);
    return res.data;
  };

  const { mutate } = useMutation({
    mutationFn: (data: UserFormData) => registerUser(data),
    onError: (error) => {
      console.error("Registration failed:", error);
      notify.error("Registration failed!");
    },
    onSuccess: (data) => {
      reset();
      notify.success("Registration successful!");
      dispatch(setAuth(data));
      setTimeout(() => {
        navigate(ROUTES.DASHBOARD);
      }, 2000);
    },
  });

  const onSubmit = (data: UserFormData) => {
    mutate(data);
  };

  return (
    <div className="flex bg-black justify-center items-center min-h-[100vh] w-full">
      <div className="min-w-[300px] lg:min-w-[400px]">
        <img src={logo} alt="" className="m-auto mb-20" width={100} />
        <form onSubmit={handleSubmit(onSubmit)} className="max-w-md w-full">
          <MyInput
            label="Display Name"
            type="text"
            id="displayName"
            register={register}
            errors={errors}
          />

          <MyInput
            label="Email"
            type="email"
            id="email"
            register={register}
            errors={errors}
          />

          <MyInput
            label="Password"
            type="password"
            id="password"
            register={register}
            errors={errors}
          />

          <div className="flex justify-between items-center mt-8">
            <Button onClick={handleSubmit(onSubmit)} disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Continue"}
            </Button>

            <Link to={ROUTES.LOGIN} className="text-accent mt-2 cursor-pointer">
              I have an account
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Registration;
