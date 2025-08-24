import { CiLocationOn } from "react-icons/ci";
import { useNavigate } from "react-router";
import { LuLink } from "react-icons/lu";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

type EventCardProps = {
  id: string | number;
};

const EventCard = ({ id }: EventCardProps) => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(`/event/${id}`);
  };
  return (
    <Card
      className="mb-4 bg-card lg:flex gap-3 cursor-pointer"
      onClick={handleNavigate}
    >
      <div>
        <div className="flex items-center gap-6 mb-3 text-xs lg:text-sm mt-4 lg:mt-0">
          <p className="text-accent">99.08.2025</p>
          <p>|</p>
          <p>BIKE MEET</p>
        </div>
        <h2 className="lg:text-2xl font-semibold mb-2">
          Mod n' Mini Night (Classic Scooters)
        </h2>
        <div>
          <p className="text-xs lg:text-sm text-muted-foreground">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            odio, veniam quam repudiandae suscipit nam error atque quae tempora,
            optio aspernatur assumenda eos quis voluptatem voluptas in totam
            aliquid nemo!
          </p>
        </div>
        <div className="flex flex-col lg:flex-row gap-3 lg:items-center mt-3">
          <div className="flex items-center gap-2 !text-xs lg:text-sm">
            <CiLocationOn />
            <p className="truncate">Ace Café, Stonebridge, NW10 7UD</p>
          </div>
          <p className="hidden lg:block">|</p>
          <div className="flex items-center gap-2">
            <LuLink />
            <a className="text-xs lg:text-sm truncate" href="">
              mamagoca.com
            </a>
          </div>
          <p className="hidden lg:block">|</p>
          <div>
            <Button variant={"ghost"} className="text-xs lg:text-sm truncate">
              Add to calendar
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default EventCard;
