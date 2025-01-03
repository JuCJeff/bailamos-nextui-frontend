import { useEffect, useState } from "react";

import {
  APIProvider,
  ControlPosition,
  MapControl,
  AdvancedMarker,
  Map,
  useMap,
  useAdvancedMarkerRef,
} from "@vis.gl/react-google-maps";

import { PlaceAutocomplete } from "./PlaceAutoComplete";

const API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

interface MapHandlerProps {
  place: google.maps.places.PlaceResult | null;
  marker: google.maps.marker.AdvancedMarkerElement | null;
}

const MapHandler = ({ place, marker }: MapHandlerProps) => {
  const map = useMap();

  useEffect(() => {
    if (!map || !place || !marker) return;

    if (place.geometry?.viewport) {
      map.fitBounds(place.geometry?.viewport);
    }
    marker.position = place.geometry?.location;
  }, [map, place, marker]);

  return null;
};

export const Location = () => {
  const [markerRef, marker] = useAdvancedMarkerRef();

  const [selectedPlace, setSelectedPlace] =
    useState<google.maps.places.PlaceResult | null>(null);

  return (
    <APIProvider
      apiKey={API_KEY}
      solutionChannel="GMP_devsite_samples_v3_rgmautocomplete"
    >
      <Map
        className="h-96 w-full"
        mapId={"bf51a910020fa25a"}
        defaultZoom={5}
        defaultCenter={{ lat: 43.075, lng: -89.39 }}
        gestureHandling={"greedy"}
        disableDefaultUI={true}
      >
        <AdvancedMarker ref={markerRef} position={null} />
      </Map>
      <MapControl position={ControlPosition.TOP}>
        <div className="mt-2">
          <PlaceAutocomplete onPlaceSelect={setSelectedPlace} />
        </div>
      </MapControl>
      <MapHandler place={selectedPlace} marker={marker} />
    </APIProvider>
  );
};
