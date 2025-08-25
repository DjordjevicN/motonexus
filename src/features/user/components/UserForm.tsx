import { useForm } from "react-hook-form";
import { memo, useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { baseUrl } from "../../../constants/apiRoutes";
import MyInput from "@/components/MyInput";
import { Button } from "@/components/ui/button";
import { IoCloseOutline } from "react-icons/io5";
import { IUser } from "../types/userTypes";
import CountrySelect from "@/components/CountrySelect";

type IUserFormData = {
  displayName: string;
  email: string;
  city: string;
  subscription: "free" | "premium";
  country: string;
};

const UserForm = ({
  close,
  user,
}: {
  close: () => void;
  user: IUser | null;
}) => {
  const [country, setCountry] = useState<string>(user?.country || "RS");
  const qc = useQueryClient();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      displayName: user?.displayName || "",
      email: user?.email || "",
      city: user?.city || "",
      subscription: user?.subscription || "free",
      country: user?.country || "",
    },
  });
  const { mutate } = useMutation({
    mutationFn: async (data: IUserFormData) => {
      const res = await axios.patch(`${baseUrl}/users/${user?._id}`, data);
      return res.data;
    },
    onSuccess: () => {
      console.log("User profile updated successfully");
      qc.invalidateQueries({ queryKey: ["user", user?._id] });
      close();
    },
    onError: () => {
      console.error("Error updating user profile");
    },
  });
  const handleUpdate = (data: IUserFormData) => {
    const userData = {
      ...data,
      country: country,
    };
    mutate(userData);
  };

  return (
    <div className="fixed inset-0 bg-[rgba(0,0,0,0.5)] flex items-center justify-center">
      <div className="bg-card min-w-[320px] p-6">
        <div className="text-end">
          <Button
            variant={"ghost"}
            onClick={() => close()}
            className="cursor-pointer"
          >
            <IoCloseOutline />
          </Button>
        </div>
        <form onSubmit={handleSubmit(handleUpdate)}>
          <MyInput
            label="Name"
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
            label="City"
            type="text"
            id="city"
            register={register}
            errors={errors}
          />

          <CountrySelect
            value={country}
            onSelect={(value) => setCountry(value)}
          />

          <div className="flex flex-col mb-4">
            <label htmlFor="subscription">Subscription</label>
            <select
              id="subscription"
              {...register("subscription")}
              className="border-3 border-border p-2 rounded bg-card text-white mt-2"
            >
              <option value="free">Free</option>
              <option value="premium">Premium</option>
            </select>
          </div>

          <Button disabled={isSubmitting} type="submit">
            Update
          </Button>
        </form>
      </div>
    </div>
  );
};

export default memo(UserForm);
