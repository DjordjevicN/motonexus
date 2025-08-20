import EventCard from "../../features/events/components/EventCard";
import GroupCard from "./GroupCard";
const events = [
  { id: 1, title: "Event 1", date: "2023-10-01" },
  { id: 2, title: "Event 2", date: "2023-10-02" },
  { id: 3, title: "Event 3", date: "2023-10-03" },
];
const myGroups = [1, 2, 3, 4, 5];
const Dashboard = () => {
  return (
    <div className="m-4 min-h-screen">
      <h1 className="text-3xl font-bold text-white mb-6">Dashboard</h1>
      <div className="flex gap-2">
        {/* <div className="min-w-[320px]">
          <p className="text-gray-500 mb-3">My Groups</p>
          <div>
            {myGroups.map((group) => (
              <GroupCard key={group} />
            ))}
          </div>
        </div> */}
        <div className="max-w-3xl">
          <p className="text-gray-500 mb-3">Upcoming Events</p>
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
    </div>
  );
};

export default Dashboard;
