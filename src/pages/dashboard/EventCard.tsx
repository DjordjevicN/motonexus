import React from "react";
import placeholder from "../../assets/homepageBg.png";
import { CiLocationOn } from "react-icons/ci";
import { useNavigate } from "react-router";
import { LuLink } from "react-icons/lu";

type EventCardProps = {
  title: string;
  date: string;
  id: string | number;
};
const EventCard = ({ title, date, id }: EventCardProps) => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(`/event/${id}`);
  };
  return (
    <div
      className="border-border border rounded p-4 mb-4 bg-card lg:flex gap-3"
      onClick={handleNavigate}
    >
      <div className="w-[150px]">
        <img src={placeholder} alt="" />
      </div>
      <div>
        <div className="flex items-center gap-6 mb-3 text-xs lg:text-sm mt-4 lg:mt-0">
          <p className="text-blue-400">99.08.2025</p>
          <p>|</p>
          <p>BIKE MEET</p>
        </div>
        <h2 className="lg:text-2xl font-semibold mb-2">
          Mod n' Mini Night (Classic Scooters)
        </h2>
        <div>
          <p className="text-xs lg:text-sm">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            odio, veniam quam repudiandae suscipit nam error atque quae tempora,
            optio aspernatur assumenda eos quis voluptatem voluptas in totam
            aliquid nemo!
          </p>
        </div>
        <div className="flex flex-col lg:flex-row gap-3 lg:items-center mt-3">
          <div className="flex items-center gap-2 text-xs lg:text-sm">
            <CiLocationOn />
            <p>Ace Café, Stonebridge, NW10 7UD</p>
          </div>
          <p className="hidden lg:block">|</p>
          <div className="flex items-center gap-2">
            <LuLink />
            <a className="text-xs lg:text-sm" href="">
              mamagoca.com
            </a>
          </div>
          <p className="hidden lg:block">|</p>
          <div>
            <p className="text-xs lg:text-sm">Add to calendar</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
