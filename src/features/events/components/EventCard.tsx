import { CiLocationOn } from "react-icons/ci";
import { useNavigate } from "react-router";
import { LuLink } from "react-icons/lu";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { IEvent } from "../types/eventTypes";
import moment from "moment";

const EventCard = ({ event }: { event: IEvent }) => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(`/event/${event._id}`);
  };
  return (
    <Card
      className="mb-4 bg-card lg:flex gap-3 cursor-pointer"
      onClick={handleNavigate}
    >
      <div>
        <div className="flex items-center gap-6 mb-3 text-xs lg:text-sm mt-4 lg:mt-0">
          <p className="text-accent">
            {moment(event.startDate).format("DD.MM.YYYY")}
          </p>
          <p>|</p>
          <p>BIKE MEET</p>
        </div>
        <div className="text-start">
          <h2 className="lg:text-2xl font-semibold mb-2">{event.title}</h2>
          <p className="text-xs lg:text-sm text-muted-foreground">
            {event.description}
          </p>
        </div>
        <div className="flex flex-col lg:flex-row gap-3 lg:items-center mt-3">
          <div className="flex items-center gap-2 !text-xs lg:text-sm">
            <CiLocationOn />
            <p className="truncate">{event.address}</p>
          </div>
          {event.link && (
            <>
              <p className="hidden lg:block">|</p>
              <div className="flex items-center gap-2">
                <LuLink />
                <a className="text-xs lg:text-sm truncate" href="">
                  {event.link}
                </a>
              </div>
            </>
          )}
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
