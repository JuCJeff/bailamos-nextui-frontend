// Once connected to firebase we could remove this file

import { Event, Tag } from "../types";

export const events: Event[] = [
  {
    id: 0,
    title: "Live Latin Thursdays",
    location: {
      city: "Madison",
      state: "Wisconsin",
      name: "The Cardinal Bar",
      address: "418 E Wilson St, Madison, WI 53703",
      url: "https://maps.app.goo.gl/DWqkuoTanPoyjr7z8",
      embeddedMap: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5828.735684168066!2d-89.3771245!3d43.0757614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88065314d6a3e5bd%3A0xc49f9e212cbcd5e3!2sthe%20Cardinal%20Bar!5e0!3m2!1sen!2sus!4v1731626571606!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
      timeZone: "CST",
    },
    date: new Date("November 14, 2024 20:30:00"),
    price: "$10",
    duration: [4.5, "hours"],
    img: {
      src: "https://images.squarespace-cdn.com/content/v1/5e14a904c895b10e847a8d8b/c6c3ba51-a41b-4179-a668-1882f0159bd7/REBULU+CARDINAL+11-14+WEB.jpg?format=1000w",
    },
    description: [
      "Weekly live music @ The Cardinal!",
      "Featuring REBULÚ GROUP",
      "SALSA lesson 8:30-9:30pm",
      "Live/DJ Music 9:30pm-1am",
      "Featuring DJ FRANCIS",
      "Salsa, Bachata, Cumbia & Merengue",
      "$10 cover (18+)",
    ],
    music: [
      { name: "Bachata", percentage: 20 },
      { name: "Salsa", percentage: 60 },
      { name: "Cumbia", percentage: 10 },
      { name: "Others", percentage: 10 },
    ],
  },
  {
    id: 1,
    title: "SANCTUARY Social",
    location: {
      city: "Madison",
      state: "Wisconsin",
      name: "Grace Episcopal Church",
      address: "116 W Washington Ave, Madison, WI 53703",
      url: "https://maps.app.goo.gl/UNdwZtDB33mtRCHD8",
      embeddedMap: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5828.906987271395!2d-89.3857103!3d43.0739604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880653391dcb75b7%3A0x2e3d4f3250e95f46!2sGrace%20Episcopal%20Church!5e0!3m2!1sen!2sus!4v1731626721528!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
      timeZone: "CST",
    },
    date: new Date("November 15, 2024 20:00:00"),
    price: "$15",
    duration: [4, "hours"],
    img: {
      src: "https://images.squarespace-cdn.com/content/v1/5e14a904c895b10e847a8d8b/1285cf42-6bbc-4ba1-9651-d7d1fa10b72b/_NOV+15+2024+SANCTUARY_+WEB.jpg?format=1000w",
    },
    description: [
      "Our monthly social on Capitol Square!",
      "Dance lessons from 8:30-9:30pm",
      "Social dancing from 9:30pm-12:30am",
      "Featuring DJ Diem Classic (Chicago, IL)",
      "Refreshments available",
      "Dress to impress!",
      "Event photography by Luis",
      "All ages welcome",
    ],
    music: [
      { name: "Bachata", percentage: 40 },
      { name: "Salsa", percentage: 40 },
      { name: "Cumbia", percentage: 10 },
      { name: "Others", percentage: 10 },
    ],
  },
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
