import Header from "../components/Header";
import { SearchInput } from "../components/SearchEvent";
import { EventCard } from "../components/EventCard";

import { events } from "../data";

import { Event } from "../types";

export default function HomePage() {
  return (
    <>
      <Header />
      <div className="flex justify-center px-4 max-sm:w-full">
        <SearchInput />
      </div>
      <div className="flex-col justify-center">
        {events.map((event: Event, index: number) => (
          <div className="flex justify-center mx-2 my-5" key={`${event.id}-${index}`}>
            <EventCard event={event} />
          </div>
        ))}
      </div>
    </>
  );
}
