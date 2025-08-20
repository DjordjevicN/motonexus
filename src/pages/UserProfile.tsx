import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import banner from "../assets/banner.jpeg";
import EventCard from "../features/events/components/EventCard";

const motorcycles = [1, 2, 3, 4, 5];
const events = [
  { id: 1, title: "Event 1", date: "2023-10-01" },
  { id: 2, title: "Event 2", date: "2023-10-02" },
  { id: 3, title: "Event 3", date: "2023-10-03" },
];
const UserProfile = () => {
  const auth = useSelector((state: RootState) => state.auth);
  if (!auth) return <div>Loading...</div>;
  return (
    <div className="text-center overflow-y-auto h-screen">
      <img
        src={banner}
        alt=""
        className="rounded-full object-cover w-[100px] h-[100px] mx-auto mt-20"
      />
      <p className="text-3xl mt-6">DzoniCam</p>
      <p className="text-xs text-text">Joined 30.3.2025</p>
      <p className="text-xs text-text">Belgrade, Serbia</p>
      <div className="mt-10">
        <p className="text-left mb-5 text-text">My motorcycles</p>
        <div className="flex gap-6  flex-wrap">
          {motorcycles.map((motorcycle) => {
            return (
              <div className="max-w-[330px] p-4 bg-card">
                <img src={banner} alt="" className="object-cover  " />
                <h2 className="text-2xl font-semibold">
                  Motorcycle {motorcycle}
                </h2>
                <div className="text-text">
                  <div className="flex items-center gap-2 mb-3 text-accent">
                    <p>1000cc</p>
                    <p>|</p>
                    <p>125hp</p>
                    <p>|</p>
                    <p>10.370</p>
                  </div>
                  <p className="max-h-[110px] overflow-hidden">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Fugiat labore fugit corrupti necessitatibus, tempora quia
                    distinctio quod odit quisquam optio cupiditate ad dolores
                    dignissimos voluptate reprehenderit voluptas. Officiis, quas
                    alias?
                  </p>
                </div>
              </div>
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
