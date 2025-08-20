import {
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  format,
  parseISO,
  getDay,
  isToday,
  isWithinInterval,
} from "date-fns";
import { memo, useEffect, useRef } from "react";

const Calendar = () => {
  const monthRefs = useRef<(HTMLDivElement | null)[]>([]);
  const year = new Date().getFullYear();
  const months = Array.from({ length: 12 }, (_, i) => new Date(year, i, 1));

  const getWeekdayIndex = (date: Date) => (getDay(date) + 6) % 7;
  const events = [
    {
      id: "1",
      title: "Event 1",
      startDate: "2025-01-05",
      endDate: "2025-01-05",
      country: "USA",
    },
    {
      id: "2",
      title: "Event 2",
      startDate: "2025-01-02",
      endDate: "2025-01-02",
      country: "Canada",
    },
  ];

  useEffect(() => {
    const timeout = setTimeout(() => {
      const currentMonthIndex = new Date().getMonth();
      const target = monthRefs.current[currentMonthIndex];
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 1000);
    return () => clearTimeout(timeout);
  }, []);
  return (
    <>
      <div className="mt-4 h-screen flex flex-col pr-4">
        <div className="flex flex-col gap-8  overflow-auto min-w-[1400px] lg:overflow-y-auto">
          {months.map((month, index) => {
            const monthStart = startOfMonth(month);
            const monthEnd = endOfMonth(month);
            const days = eachDayOfInterval({
              start: monthStart,
              end: monthEnd,
            });

            const leadingEmptyDays = Array.from({
              length: getWeekdayIndex(monthStart),
            });

            return (
              <div
                key={month.toString()}
                ref={(el) => {
                  monthRefs.current[index] = el;
                }}
              >
                <h3 className="text-center font-semibold mb-2 text-lg">
                  {format(month, "MMMM")} {year}
                </h3>
                <div className="grid grid-cols-7 gap-1 text-xs">
                  {/* Weekday headers */}
                  {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map(
                    (day) => (
                      <div
                        key={day}
                        className="text-center font-semibold text-gray-600"
                      >
                        {day}
                      </div>
                    )
                  )}

                  {/* Leading empty days */}
                  {leadingEmptyDays.map((_, i) => (
                    <div key={`empty-${i}`} className="p-1 h-[200px]" />
                  ))}

                  {/* Days of the month */}
                  {days.map((day) => {
                    const dayEvents = [...events].filter((ev) => {
                      const eventStart = parseISO(ev.startDate);
                      const eventEnd = parseISO(ev.endDate);
                      return isWithinInterval(day, {
                        start: eventStart,
                        end: eventEnd,
                      });
                    });

                    const isCurrentDay = isToday(day);
                    return (
                      <div
                        key={day.toString()}
                        className={`cursor-pointer border border-border rounded p-1 min-h-[200px] ${
                          isCurrentDay ? "border-orange-600" : ""
                        } ${dayEvents.length ? "" : ""}`}
                        title={`${dayEvents.length} event(s)`}
                        onClick={() => {
                          console.log(dayEvents);
                        }}
                      >
                        <div className={`flex gap-2 items-center mb-2`}>
                          <span>{format(day, "d")}</span>
                          <span className="text-gray-500">
                            {format(day, "EEE")}
                          </span>
                        </div>
                        {dayEvents.length > 0 && (
                          <div className="mt-2 overflow-y-scroll max-h-[300px]">
                            {dayEvents.map((event) => {
                              return <div key={event.id}>{event.title}</div>;
                            })}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default memo(Calendar);
