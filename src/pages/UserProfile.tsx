import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import banner from "../assets/banner.jpeg";
import EventCard from "../features/events/components/EventCard";
import { IUser } from "../types/userTypes";
import { useQuery } from "@tanstack/react-query";
import { baseUrl } from "../constants/apiRoutes";
import { IMotorcycle } from "../types/motorcycleTypes";
import MotorcycleCard from "../features/motorcycles/components/MotorcycleCard";

const events = [
  { id: 1, title: "Event 1", date: "2023-10-01" },
  { id: 2, title: "Event 2", date: "2023-10-02" },
  { id: 3, title: "Event 3", date: "2023-10-03" },
];
const UserProfile = () => {
  const auth = useSelector((state: RootState) => state.auth);
  const user: IUser | null = auth?.auth;
  const userId = user?._id ?? (user as any)?.id ?? null;
  const { data: motorcycles } = useQuery({
    queryKey: ["motorcycles", userId],
    enabled: !!userId,
    queryFn: async () => {
      const response = await fetch(`${baseUrl}/motorcycles/owner/${userId}`);
      return response.json();
    },
  });

  if (!user) return <div>Loading...</div>;
  return (
    <div className="text-center overflow-y-auto h-screen">
      <img
        src={banner}
        alt=""
        className="rounded-full object-cover w-[100px] h-[100px] mx-auto mt-20"
      />
      <p className="text-3xl mt-6 capitalize">{user.displayName}</p>
      <p className="text-xs text-text">{user.createdAt}</p>
      <p className="text-xs text-text">
        {user.city}, {user.country}
      </p>
      <div className="mt-10">
        <p className="text-left mb-5 text-text">My motorcycles</p>
        <div className="flex gap-6  flex-wrap">
          {motorcycles.map((motorcycle: IMotorcycle) => {
            return (
              <MotorcycleCard key={motorcycle._id} motorcycle={motorcycle} />
            );
          })}
        </div>
      </div>
      <div className="max-w-3xl mt-10">
        <p className="text-gray-500 mb-3 text-left">Attending Events</p>
        <div>
          {events.map((event) => (
            <EventCard
              key={event.id}
              title={event.title}
              date={event.date}
              id={event.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
