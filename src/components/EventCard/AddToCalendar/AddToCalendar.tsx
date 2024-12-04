import { google } from "calendar-link";

import { CalendarEvent, Event } from "../../types";

interface AddToCalendarProps {
  event: Event;
}

export default function AddToCalendar({ event }: Readonly<AddToCalendarProps>) {
  const calendarEvent: CalendarEvent = {
    title: event.title,
    description: event.description, // Need to adjust this so it could display multiple lines
    start: event.date,
    duration: event.duration,
    location: event.location.address,
  };

  const googleLink = (google as any)(calendarEvent);

  return (
    <ul className="pt-2 flex-col justify-center">
      <li className="flex justify-center">
        <a href={googleLink} target="_blank">
          Add to Google Calendar
        </a>
      </li>
    </ul>
  );
}
