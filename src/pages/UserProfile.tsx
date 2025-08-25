import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import z900 from "../assets/z900.png";
import EventCard from "../features/events/components/EventCard";
import { useQuery } from "@tanstack/react-query";
import { baseUrl } from "../constants/apiRoutes";
import MotorcycleCard from "../features/motorcycles/components/MotorcycleCard";
import { useCallback, useState } from "react";
import UserForm from "../features/user/components/UserForm";
import { Button } from "@/components/ui/button";
import { clearAuth } from "@/features/auth/authSlice";
import Pill from "@/components/Pill";
import MotorcycleForm from "@/features/motorcycles/components/MotorcycleForm";
import { IMotorcycle } from "@/features/motorcycles/types/motorcycleTypes";
import { IEvent } from "@/features/events/types/eventTypes";

const UserProfile = () => {
  const dispatch = useDispatch();
  const [isEditUserModalOpen, setIsEditUserModalOpen] = useState(false);
  const [isAddMotorcycleModalOpen, setIsAddMotorcycleModalOpen] =
    useState(false);
  const { auth } = useSelector((state: RootState) => state.auth);
  const userId = auth?._id ?? (auth as any)?.id ?? null;

  const { data: user } = useQuery({
    queryKey: ["user", userId],
    queryFn: async () => {
      const response = await fetch(`${baseUrl}/users/${userId}`);
      return response.json();
    },
  });

  const { data: motorcycles } = useQuery({
    queryKey: ["motorcycles", userId],
    enabled: !!userId,
    queryFn: async () => {
      const response = await fetch(`${baseUrl}/motorcycles/owner/${userId}`);
      return response.json();
    },
  });

  const { data: events } = useQuery({
    queryKey: ["events", userId],
    enabled: !!userId,
    queryFn: async () => {
      const response = await fetch(`${baseUrl}/events/owner/${userId}`);
      return response.json();
    },
  });

  const toggleEditUserModal = useCallback(() => {
    setIsEditUserModalOpen((prev) => !prev);
  }, []);

  const handleLogout = () => {
    dispatch(clearAuth());
  };

  const toggleAddMotorcycle = useCallback(() => {
    setIsAddMotorcycleModalOpen(!isAddMotorcycleModalOpen);
  }, [isAddMotorcycleModalOpen]);
  if (!user || !motorcycles || !events) return <div>Loading...</div>;
  return (
    <>
      <div className="text-center overflow-y-auto h-screen">
        <img
          src={z900}
          alt=""
          className="rounded-full object-cover w-[100px] h-[100px] mx-auto mt-20"
        />
        <div className="w-full mt-6 flex items-center gap-3 justify-center">
          <p className="text-3xl capitalize">{user.displayName}</p>
          <Pill>{user.subscription}</Pill>
        </div>
        <p className="text-xs text-text">{user.createdAt}</p>
        <p className="text-xs text-text">
          {user.city}, {user.country}
        </p>
        <div className="flex gap-3 mx-auto w-full items-center mt-6 justify-center">
          <Button onClick={toggleEditUserModal}>Edit Profile</Button>
          <Button onClick={handleLogout}>Logout</Button>
        </div>
        <div className="mt-10">
          <div className="flex gap-3 items-center">
            <p className="text-left mb-5 text-text">My motorcycles</p>
            <Button
              variant="outline"
              className="mb-5"
              onClick={toggleAddMotorcycle}
            >
              Add Motorcycle
            </Button>
          </div>
          <div className="flex gap-6 flex-wrap justify-center lg:justify-start">
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
            {events.map((event: IEvent) => (
              <EventCard key={event._id} event={event} />
            ))}
          </div>
        </div>
      </div>
      {isEditUserModalOpen && (
        <UserForm user={user} close={toggleEditUserModal} />
      )}
      {isAddMotorcycleModalOpen && (
        <MotorcycleForm close={toggleAddMotorcycle} />
      )}
    </>
  );
};

export default UserProfile;
