import MyInput from "@/components/MyInput";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { MotorcycleFormData } from "../types/motorcycleFormTypes";
import { IoCloseOutline } from "react-icons/io5";

const MotorcycleForm = ({ close }: { close: () => void }) => {
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

  const handleNewMotorcycle = (data: MotorcycleFormData) => {
    console.log(data);
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
        <form onSubmit={handleSubmit(handleNewMotorcycle)}>
          <MyInput
            label="Make"
            type="text"
            id="make"
            register={register}
            errors={errors}
          />

          <Button disabled={isSubmitting} type="submit">
            Update
          </Button>
        </form>
      </div>
    </div>
  );
};

export default MotorcycleForm;
