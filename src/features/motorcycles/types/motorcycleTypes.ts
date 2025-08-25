export interface IMotorcycle {
  _id: string;
  owner: string;
  make: string;
  model: string;
  title: string;
  description: string;
  motorcycleType:
    | "sport"
    | "naked"
    | "touring"
    | "cruiser"
    | "adventure"
    | "other";

  engineCapacity: number;
  horsepower: number;
  transmission: "manual" | "automatic";
  mileage: number;
  year: number;
  price: number;
  isPriceFixed: boolean;
  availableForPurchase: boolean;
  isNew: boolean;
  isNewMotorcycle: boolean;
  keyForKey: string;
  mainImage: string;
  photos: string[];
  registeredUntil: string;
  updatedAt: string;
  __v: number;
}
