import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";

import { MusicTag } from "../MusicTag";
import { Percentage } from "../Percentage";
import { EventDetails } from "../EventDetails";
import { AddToCalendar } from "../AddToCalendar";

import { Event } from "../../types";

interface EventCardProps {
  event: Event;
}

export default function EventCard({ event }: Readonly<EventCardProps>) {
  return (
    <Card className="py-4" shadow="sm">
      <CardHeader className="pb-0 pt-5 px-4 flex-col items-center">
        <h2 className="font-bold">{event.title}</h2>
        <small className="text-md mt-2 text-medium">
          {event.location.city}
        </small>
        <small className="text-sm text-default-500">
          {event.location.state}
        </small>
        <Image
          alt="Card background"
          className="mt-5 object-cover rounded-xl"
          src={event.img.src}
          width={540}
        />
      </CardHeader>
      <CardBody className="flex-col items-center overflow-visible py-2">
        <MusicTag musicList={event.music} />
        <Percentage musicList={event.music} />
        <EventDetails event={event} />
        <AddToCalendar event={event} />
      </CardBody>
    </Card>
  );
}
