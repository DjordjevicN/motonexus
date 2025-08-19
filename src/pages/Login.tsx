import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router";
import { ROUTES } from "../constants/routes";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setAuth } from "../features/auth/authSlice";
import logo from "../assets/logo.svg";
import Button from "../components/Button";
import Input from "../components/Input";

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
    <div className="flex justify-center items-center min-h-[100vh] w-full bg-black">
      <div className="min-w-[300px] lg:min-w-[400px]">
        <img src={logo} alt="" className="m-auto mb-20" width={100} />
        <form onSubmit={handleSubmit(handleLogin)} className="max-w-md w-full">
          <Input
            label="Email"
            type="email"
            id="email"
            register={register}
            errors={errors}
          />

          <Input
            label="Password"
            type="password"
            id="password"
            register={register}
            errors={errors}
          />
          <div className="flex justify-between items-center mt-8">
            <Button
              label={isSubmitting ? "Submitting..." : "Continue"}
              onClick={handleSubmit(handleLogin)}
              disabled={isSubmitting}
              loading={isSubmitting}
            />

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
    </div>
  );
};

export default Login;
