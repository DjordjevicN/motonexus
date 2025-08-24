import { CountrySelect } from "@/components/CountrySelect";
import EventCard from "../../features/events/components/EventCard";

const events = [
  { id: 1, title: "Event 1", date: "2023-10-01" },
  { id: 2, title: "Event 2", date: "2023-10-02" },
  { id: 3, title: "Event 3", date: "2023-10-03" },
];
const myGroups = [1, 2, 3, 4, 5];
const Dashboard = () => {
  return (
    <div className="m-4 min-h-screen">
      <CountrySelect value="RS" onSelect={(value) => console.log(value)} />
      <h1 className="text-3xl font-bold text-white mb-6">Dashboard</h1>
      <div className="flex gap-2 flex-wrap">
        <div className="max-w-3xl">
          <p className="text-gray-500 mb-3">Upcoming Events</p>
          <div>
            {events.map((event) => (
              <EventCard key={event.id} id={event.id} />
            ))}
          </div>
        </div>
        <div className="max-w-3xl">
          <p className="text-gray-500 mb-3">Attending Events</p>
          <div>
            {events.map((event) => (
              <EventCard key={event.id} id={event.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
