export type Tag = {
  name: string;
  bgColor: string;
  shadowColor: string;
};

export type Music = {
  name: string;
  percentage: number;
};

export type EventLocation = {
  city: string;
  state: string;
  name: string;
  address: string;
  url: string;
  embeddedMap: string;
  timeZone: string;
};

export type Event = {
  id: number;
  title: string;
  date: Date;
  price: string;
  location: {
    city: string;
    state: string;
    name: string;
    address: string;
    url: string;
    embeddedMap?: string;
    timeZone: string;
  };
  duration: (string | number)[];
  img: {
    src: string;
  };
  description: string[];
  music: Music[];
};

export type CalendarEvent = {
  title: string;
  description: string[];
  start: Date;
  duration: (string | number)[];
  location: string;
};
