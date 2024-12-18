import { Event } from "../../types";

interface EventDetailsProps {
  event: Event;
}

export default function EventDetails({ event }: Readonly<EventDetailsProps>) {
  return (
    <>
      <div className="flex-col text-center pt-2">
        <h3 className="text-md font-bold">Time</h3>
        <div>
          {event.date.toLocaleDateString("en-US", {
            weekday: "long",
            year: "numeric",
            month: "short",
            day: "numeric",
          })}
        </div>
        <div>
          {event.date.toLocaleTimeString("en-US", {
            timeZone: event.location.timeZone,
            hour: "numeric",
            minute: "numeric",
          })}
        </div>
      </div>
      <div className="flex-col text-center pt-2">
        <h3 className="text-md font-bold">Location</h3>
        <div className="flex-col">
          <a href={event.location.url} target="_blank">
            {event.location.name}
          </a>
        </div>
      </div>
      <div className="flex-col pt-2">
        <h3 className="text-md text-center font-bold">Price</h3>
        <div className="flex justify-center">{event.price}</div>
      </div>
      <div className="flex-col pt-2">
        <div className="flex-col text-center">
          {event.description.map((line: string, index: number) => (
            <p className="py-1 text-center" key={index}>
              {line}
            </p>
          ))}
        </div>
      </div>
    </>
  );
}
