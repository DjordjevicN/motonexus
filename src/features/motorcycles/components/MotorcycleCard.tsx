import { IMotorcycle } from "../../../types/motorcycleTypes";
import z900 from "../../../assets/z900.png";
import { useNavigate } from "react-router";
import { Card } from "@/components/ui/card";

const MotorcycleCard = ({ motorcycle }: { motorcycle: IMotorcycle }) => {
  const navigate = useNavigate();
  return (
    <Card
      className="max-w-[330px] p-4 bg-card cursor-pointer"
      onClick={() => navigate(`/motorcycles/${motorcycle._id}`)}
    >
      <img src={z900} alt="" className="object-cover" />
      <h2 className="text-md font-semibold">
        {motorcycle.make} {motorcycle.model}{" "}
      </h2>
      <div className="text-text">
        <div className="flex items-center justify-center gap-2 text-accent">
          <p>{motorcycle.engineCapacity}cc</p>
          <p>|</p>
          <p>{motorcycle.horsepower}hp</p>
          <p>|</p>
          <p>~{motorcycle.mileage}km</p>
        </div>
        <p className="max-h-[110px] text-start overflow-hidden whitespace-pre-line">
          {motorcycle.description}
        </p>
      </div>
    </Card>
  );
};

export default MotorcycleCard;
