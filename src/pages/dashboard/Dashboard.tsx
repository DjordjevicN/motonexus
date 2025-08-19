import React from "react";
const events = [
  { id: 1, title: "Event 1", date: "2023-10-01" },
  { id: 2, title: "Event 2", date: "2023-10-02" },
  { id: 3, title: "Event 3", date: "2023-10-03" },
];
const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <p>Upcoming Events</p>
      <div>
        {events.map((event) => (
          <p key={event.id}>
            {event.title} - {event.date}
          </p>
        ))}
      </div>
      <p>More features coming soon!</p>
    </div>
  );
};

export default Dashboard;
