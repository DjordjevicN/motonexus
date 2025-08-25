import EventCard from "../../features/events/components/EventCard";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { baseUrl } from "@/constants/apiRoutes";
import axios from "axios";
import { IEvent } from "@/features/events/types/eventTypes";
import EventFilter, {
  EventFilters,
} from "@/features/events/components/EventFilter";
import { useMemo, useState } from "react";
import { format } from "date-fns";

type EventData = {
  data: IEvent[];
  hasMore: boolean;
  limit: number;
  page: number;
  total: number;
};

const Dashboard = () => {
  const [filters, setFilters] = useState<EventFilters>({ country: "RS" });

  const params = useMemo(
    () => ({
      country: filters.country,
      ...(filters.city ? { city: filters.city } : {}),
      ...(filters.startDate
        ? { startDate: filters.startDate.toISOString().slice(0, 10) }
        : {}),
    }),
    [filters]
  );

  const { data, isLoading } = useQuery<EventData>({
    queryKey: ["events", params],
    queryFn: async () => {
      const res = await axios.get(`${baseUrl}/events`, { params });
      return res.data;
    },
    placeholderData: keepPreviousData,
  });
  const events = data?.data ?? [];

  if (isLoading) return <div>Loading...</div>;
  return (
    <div className="m-4 max-h-screen overflow-auto">
      <h1 className="text-3xl font-bold text-white mb-6">Dashboard</h1>
      <div>
        <EventFilter value={filters} onApply={(next) => setFilters(next)} />
        <div className="mt-4">
          {events?.length > 0 ? (
            events.map((event: IEvent) => {
              return <EventCard key={event._id} event={event} />;
            })
          ) : (
            <div>No events found</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
