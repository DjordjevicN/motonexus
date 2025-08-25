export interface IEvent {
  _id: string;
  owner: string;
  title: string;
  startDate: string;
  endDate: string;
  location?: { lat: number; lng: number; name?: string };
  participants: string[];
  coverImageUrl?: string;
  rules: string[];
  description?: string;
  maxRiders?: number;
  country?: string;
  address?: string;
  city?: string;
  price?: number;
  rideType?: "touring" | "offroad" | "track" | "city" | "other" | string;

  createdAt: string;
  updatedAt: string;
  __v?: number;
}
