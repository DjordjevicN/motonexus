import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router";
import { baseUrl } from "../constants/apiRoutes";
import banner from "../assets/banner.jpeg";
import Toggle from "../components/Toggle";

const MotorcycleDetails = () => {
  const { id } = useParams<{ id: string }>();
  const { data: motorcycle } = useQuery({
    queryKey: ["motorcycle", id],
    queryFn: async () => {
      const response = await fetch(`${baseUrl}/motorcycles/${id}`);
      return response.json();
    },
  });

  const placeBikeOnSale = () => {
    console.log("availableForPurchase");
  };
  return (
    <div>
      <div>
        <Toggle checked={motorcycle?.isForSale} onChange={placeBikeOnSale} />
      </div>
      <div className="mx-auto mt-4">
        <img
          src={banner}
          alt="motorcycle banner"
          className="w-[150px] h-[150px] object-cover rounded-full"
        />
      </div>
      <h1>
        {motorcycle?.make} {motorcycle?.model}
      </h1>
      <div>
        <h2>Basic information</h2>
        <div>
          <p>Engine Capacity: {motorcycle?.engineCapacity}cc</p>
          <p>Horsepower: {motorcycle?.horsepower}hp</p>
          <p>Mileage: ~{motorcycle?.mileage}km</p>
          <p>Description: {motorcycle?.description}</p>
          <p>For Sale: {motorcycle?.isForSale ? "Yes" : "No"}</p>
          <p>Location: {motorcycle?.location}</p>
          <p>Year: {motorcycle?.year}</p>
        </div>
      </div>
    </div>
  );
};

export default MotorcycleDetails;
