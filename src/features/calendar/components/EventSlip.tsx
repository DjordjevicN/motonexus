import { IEvent } from "@/features/events/types/eventTypes";
import { Country } from "country-state-city";

const EventSlip = ({ event }: { event: IEvent }) => {
  return (
    <div className="bg-card p-2 mb-1">
      <h4 className="truncate text-white font-bold">{event.title}</h4>
      <p className="text-muted-foreground">
        {event.country ? Country.getCountryByCode(event.country)?.name : ""}
      </p>
    </div>
  );
};

export default EventSlip;
