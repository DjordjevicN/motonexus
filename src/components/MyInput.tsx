import React from "react";
import { Input } from "./ui/input";
type INPUT_PROPS = {
  label: string;
  type: string;
  id: string;
  register: any;
  errors: any;
  required?: boolean;
};
const MyInput = ({
  label,
  type,
  id,
  register,
  errors,
  required,
}: INPUT_PROPS) => {
  return (
    <div className="flex flex-col mb-4 w-full">
      <label htmlFor={id} className="mb-2">
        {label}
      </label>
      <Input
        className="border rounded-sm border-border p-2 focus:outline-none"
        placeholder={`Enter your ${label.toLowerCase()}`}
        type={type}
        id={id}
        {...register(id, {
          required: required ? `${label} is required` : false,
          minLength: { value: 1, message: "At least 1 character" },
        })}
      />
      {errors[id] && (
        <span className="text-red-500 text-sm">{errors[id].message}</span>
      )}
    </div>
  );
};

export default MyInput;
