import MyInput from "@/components/MyInput";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { MotorcycleFormData } from "../types/motorcycleFormTypes";
import { IoCloseOutline } from "react-icons/io5";
import { useMutation } from "@tanstack/react-query";
import { baseUrl } from "@/constants/apiRoutes";
import axios from "axios";
import { useNotify } from "@/hooks/useNotify";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

const MotorcycleForm = ({ close }: { close: () => void }) => {
  const notify = useNotify();
  const { auth } = useSelector((state: RootState) => state.auth);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      make: "",
      model: "",
      year: 0,
      mainImage: "",
      photos: [],
      price: 0,
      availableForPurchase: false,
      title: "",
      isNew: false,
      isPriceFixed: false,
      keyForKey: "",
      motorcycleType: "",
      engineCapacity: 0,
      horsepower: 0,
      mileage: 0,
      transmission: "",
      registeredUntil: "",
      description: "",
    },
  });

  const { mutate } = useMutation({
    mutationFn: async (data: MotorcycleFormData) => {
      const res = await axios.post(`${baseUrl}/motorcycles`, data);
      return res.data;
    },
    onSuccess: () => {
      notify.success("Motorcycle created successfully");
      close();
    },
  });
  console.log(auth);

  const handleNewMotorcycle = (data: MotorcycleFormData) => {
    const newMotorcycleData = {
      ...data,
      photos: ["neki url"],
      mainImage: "neki url",
      owner: auth._id,
    };
    mutate(newMotorcycleData);
  };

  return (
    <div className="fixed inset-0 bg-[rgba(0,0,0,0.5)] flex items-center justify-center">
      <div className="bg-card min-w-[320px] w-[80%] p-6 max-h-[80%] overflow-auto">
        <div className="text-end ">
          <Button
            variant={"ghost"}
            onClick={() => close()}
            className="cursor-pointer"
          >
            <IoCloseOutline />
          </Button>
        </div>
        <form onSubmit={handleSubmit(handleNewMotorcycle)} className="w-full">
          <div className="lg:flex gap-6">
            <div className="w-full">
              <MyInput
                label="Title"
                type="text"
                id="title"
                register={register}
                errors={errors}
              />
              <MyInput
                label="Make"
                type="text"
                id="make"
                register={register}
                errors={errors}
              />
              <MyInput
                label="Model"
                type="text"
                id="model"
                register={register}
                errors={errors}
              />
              <MyInput
                label="Year"
                type="number"
                id="year"
                register={register}
                errors={errors}
              />
              <MyInput
                label="Main Image"
                type="file"
                id="mainImage"
                register={register}
                errors={errors}
              />
              <MyInput
                label="Photos"
                type="file"
                id="photos"
                register={register}
                errors={errors}
              />
              <MyInput
                label="Price"
                type="number"
                id="price"
                register={register}
                errors={errors}
              />
            </div>
            <div className="w-full">
              <MyInput
                label="Motorcycle Type"
                type="text"
                id="motorcycleType"
                register={register}
                errors={errors}
              />
              <MyInput
                label="Engine Capacity"
                type="number"
                id="engineCapacity"
                register={register}
                errors={errors}
              />
              <MyInput
                label="Horsepower"
                type="number"
                id="horsepower"
                register={register}
                errors={errors}
              />
              <MyInput
                label="Mileage"
                type="number"
                id="mileage"
                register={register}
                errors={errors}
              />
              <MyInput
                label="Transmission"
                type="text"
                id="transmission"
                register={register}
                errors={errors}
              />
              <MyInput
                label="Registered Until"
                type="text"
                id="registeredUntil"
                register={register}
                errors={errors}
              />
              <MyInput
                label="Description"
                type="text"
                id="description"
                register={register}
                errors={errors}
              />
            </div>
          </div>
          <div className="text-end">
            <Button disabled={isSubmitting} type="submit" className="">
              Create
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MotorcycleForm;
