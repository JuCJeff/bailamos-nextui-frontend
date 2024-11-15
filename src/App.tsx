import { useEffect } from "react";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

import app from "./firebase/firebaseConfig";

import { SearchInput } from "./components/SearchEvent";
import { EventCard } from "./components/EventCard";
import { events } from "./data";

import "./App.css";

import { Event } from "./types";

function App() {
  useEffect(() => {
    console.log("Firebase App initialized:", app); // Check if Firebase app is initialized

    try {
      // Test Firestore
      const db = getFirestore(app);
      console.log("Firestore instance:", db);

      // Test Firebase Authentication
      const auth = getAuth(app);
      console.log("Firebase Auth instance:", auth);
    } catch (error) {
      console.error("Error accessing Firebase services:", error);
    }
  }, []);

  return (
    <>
      <h1 className="font-bold pb-5">Bailamos</h1>
      <div>
        <SearchInput />
      </div>
      {events.map((event: Event, index: number) => (
        <div className="my-5" key={index}>
          <EventCard event={event} />
        </div>
      ))}
    </>
  );
}

export default App;
