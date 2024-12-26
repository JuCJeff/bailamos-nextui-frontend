// Once connected to firebase we could remove this file

import { Event, Tag } from "../types";

export const events: Event[] = [
  {
    id: 0,
    title: "¡A Bailar! Wednesdays",
    location: {
      city: "Madison",
      state: "Wisconsin",
      name: "Sotto Night Club",
      address: "303 N Henry St, Madison, WI 53703",
      url: "https://maps.app.goo.gl/4zFChAqXUWVLnbgj6",
      embeddedMap: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2914.3998073794446!2d-89.39265068793738!3d43.07508927101513!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8806533794c167ab%3A0x3295426447c3ef3a!2sSotto%20Night%20Club!5e0!3m2!1sen!2sus!4v1731968626685!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
      timeZone: "CST",
    },
    date: new Date("January 8, 2025 19:00:00"),
    price: "$8",
    duration: [4.5, "hours"],
    img: {
      src: "https://images.squarespace-cdn.com/content/v1/5e14a904c895b10e847a8d8b/1726171852552-KS8DICBEWLQHRC9Z2AZK/A+BAILAR+FLYER+%28NEW+2024+BACHATA%29+WEB.jpg?format=1000w",
    },
    description: [
      "Doors open at 7:00pm",
      "BACHATA lessons 7:30-8:30pm",
      "2 levels of dance lessons",
      "Open dancing 8:30-11:30pm",
      "Guest DJ Tomatillo 🎧",
      "Salsa, Bachata, Cumbia, and Merengue!",
      "Drink specials all night!",
      "Event photography by Luis",
      "$10 cover / $15 for 2 guests (21+)",
    ],
    music: [
      { name: "Bachata", percentage: 40 },
      { name: "Salsa", percentage: 40 },
      { name: "Merengue", percentage: 10 },
      { name: "Others", percentage: 10 },
    ],
  },
  {
    id: 1,
    title: "LA RUMBA 2nd Saturdays",
    location: {
      city: "Madison",
      state: "Wisconsin",
      name: "The Cardinal Bar",
      address: "418 E Wilson St, Madison, WI 53703",
      url: "https://maps.app.goo.gl/vi4VWbccda4757Fr5",
      embeddedMap: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5828.735686925052!2d-89.3797047879374!3d43.07576137101483!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88065314d6a3e5bd%3A0xc49f9e212cbcd5e3!2sthe%20Cardinal%20Bar!5e0!3m2!1sen!2sus!4v1731968775685!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
      timeZone: "CST",
    },
    date: new Date("January 11, 2025 20:00:00"),
    price: "$10",
    duration: [6, "hours"],
    img: {
      src: "https://images.squarespace-cdn.com/content/v1/5e14a904c895b10e847a8d8b/83f2888c-7d90-4499-b796-6d38613a57be/LA+RUMBA+JAN+11+%28BANNER%29+WEB.jpg?format=1000w",
    },
    description: [
      "Latin dance marathon @ The Cardinal!",
      "2 hours of dance lessons (8-10pm)",
      "4 hours of social dancing (10pm-2am)",
      "Featuring DJ LUIS",
      "Salsa & Bachata w/ Cumbia and Merengue",
      "Event photography by Luis",
      "$10 cover (21+)",
    ],
    music: [
      { name: "Bachata", percentage: 30 },
      { name: "Salsa", percentage: 30 },
      { name: "Cumbia", percentage: 20 },
      { name: "Merengue", percentage: 10 },
      { name: "Others", percentage: 10 },
    ],
  },
];

export const musicList: string[] = [
  "bachata",
  "salsa",
  "merengue",
  "cumbia",
  "reggaeton",
  "others",
];

export const tagStylesList: Tag[] = [
  {
    name: "Bachata",
    bgColor: "bg-blue-500",
    shadowColor: "shadow-blue-500/30",
  },
  {
    name: "Salsa",
    bgColor: "bg-orange-500",
    shadowColor: "shadow-orange-500/30",
  },
  {
    name: "Merengue",
    bgColor: "bg-rose-500",
    shadowColor: "shadow-rose-500/30",
  },
  {
    name: "Cumbia",
    bgColor: "bg-green-500",
    shadowColor: "shadow-green-500/30",
  },
  {
    name: "Others",
    bgColor: "bg-gray-500",
    shadowColor: "shadow-gray-500/30",
  },
];
