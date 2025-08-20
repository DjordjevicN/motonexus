import React from "react";
type Event = {
  id: string;
  title: string;
  startDate: string;
  endDate: string;
  country: string;
};
const EventSlip = ({ event }: { event: Event }) => {
  return (
    <div className="bg-card p-2">
      <h4 className="truncate">{event.title}</h4>
      <p></p>
      <p>Belgrade {event.country}</p>
    </div>
  );
};

export default EventSlip;
