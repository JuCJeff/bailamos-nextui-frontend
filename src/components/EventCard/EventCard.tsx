import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";

import EventDetails from "./EventDetails";
import { MusicTag } from "./MusicTag";
import { Percentage } from "./Percentage";
import { AddToCalendar } from "./AddToCalendar";

import { Event } from "../../types";

interface EventCardProps {
  event: Event;
}

export default function EventCard({ event }: Readonly<EventCardProps>) {
  return (
    <Card className="w-[560px] py-4 max-sm:w-full" shadow="sm">
      <CardHeader className="flex-col items-center pb-0">
        <h2 className="font-bold">{event.title}</h2>
        <small className="text-medium mt-2">{event.location.city}</small>
        <small className="text-small text-default-500">
          {event.location.state}
        </small>
      </CardHeader>
      <CardBody className="flex-col items-center py-2">
        <Image
          alt="Card background"
          className="mt-5 object-cover rounded-xl"
          src={event.img.src}
        />
        <div className="flex-col place-items-center">
          <MusicTag musicList={event.music} />
          <Percentage musicList={event.music} />
        </div>
        <EventDetails event={event} />
        <AddToCalendar event={event} />
      </CardBody>
    </Card>
  );
}
