export type MotorcycleFormData = {
  make: string;
  model: string;
  year: number;
  mainImage: string;
  photos: string[];
  price: number;
  availableForPurchase: boolean;
  title: string;
  isNew: boolean;
  isPriceFixed: boolean;
  keyForKey: string;
  motorcycleType: string;
  engineCapacity: number;
  horsepower: number;
  mileage: number;
  transmission: string;
  registeredUntil: string; // use string for ISO in form
  description: string;
};
