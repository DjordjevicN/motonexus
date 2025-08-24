import Input from "../../../components/Input";
import { useForm } from "react-hook-form";
import Button from "../../../components/Button";
import { memo } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { baseUrl } from "../../../constants/apiRoutes";
import { IUser } from "../../../types/userTypes";

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
    console.log(data);
    mutate(data);
  };

  return (
    <div className="fixed inset-0 bg-[rgba(0,0,0,0.5)] flex items-center justify-center">
      <div className="bg-card min-w-[320px] p-6">
        <button onClick={close}>close</button>
        <form onSubmit={handleSubmit(handleUpdate)}>
          <Input
            label="Name"
            type="text"
            id="displayName"
            register={register}
            errors={errors}
          />
          <Input
            label="Email"
            type="email"
            id="email"
            register={register}
            errors={errors}
          />
          <Input
            label="City"
            type="text"
            id="city"
            register={register}
            errors={errors}
          />
          <Input
            label="Country"
            type="text"
            id="country"
            register={register}
            errors={errors}
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

          <Button disabled={isSubmitting} label="Update" type="submit" />
        </form>
      </div>
    </div>
  );
};

export default memo(UserForm);
