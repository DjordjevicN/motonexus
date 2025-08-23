import React from "react";
import { IMotorcycle } from "../../../types/motorcycleTypes";
import banner from "../../../assets/banner.jpeg";
import { useNavigate } from "react-router";

const MotorcycleCard = ({ motorcycle }: { motorcycle: IMotorcycle }) => {
  const navigate = useNavigate();
  return (
    <div
      className="max-w-[330px] p-4 bg-card cursor-pointer"
      onClick={() => navigate(`/motorcycles/${motorcycle._id}`)}
    >
      <img src={banner} alt="" className="object-cover  " />
      <h2 className="text-2xl font-semibold mt-3">
        {motorcycle.make} {motorcycle.model}{" "}
      </h2>
      <div className="text-text">
        <div className="flex items-center gap-2 mb-3 text-accent">
          <p>{motorcycle.engineCapacity}cc</p>
          <p>|</p>
          <p>{motorcycle.horsepower}hp</p>
          <p>|</p>
          <p>~{motorcycle.mileage}km</p>
        </div>
        <p className="max-h-[110px] overflow-hidden whitespace-pre-line">
          {motorcycle.description}
        </p>
      </div>
    </div>
  );
};

export default MotorcycleCard;
