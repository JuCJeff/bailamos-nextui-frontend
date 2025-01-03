import { useRef, useEffect, useState, useCallback } from "react";
import { useMapsLibrary } from "@vis.gl/react-google-maps";
import { Input } from "@nextui-org/input";

interface Props {
  onPlaceSelect: (place: google.maps.places.PlaceResult | null) => void;
}

export const PlaceAutocomplete = ({ onPlaceSelect }: Props) => {
  const [placeAutocomplete, setPlaceAutocomplete] =
    useState<google.maps.places.Autocomplete | null>(null);
  const [input, setInput] = useState<string>("");
  const [place, setPlace] = useState<google.maps.places.PlaceResult | null>(
    null
  );

  const inputRef = useRef<HTMLInputElement>(null);
  const places = useMapsLibrary("places");

  const handlePlaceSelect = useCallback(() => {
    if (!placeAutocomplete) return;

    const placeObject = placeAutocomplete.getPlace();
    onPlaceSelect(placeObject);
    setPlace(placeObject);
    console.log(placeObject);
    setInput(placeObject?.name ?? "");
  }, [onPlaceSelect, placeAutocomplete]);

  useEffect(() => {
    if (!places || !inputRef.current) return;

    const options = {
      fields: ["geometry", "name", "formatted_address", "types"],
    };

    const autocomplete = new places.Autocomplete(inputRef.current, options);
    setPlaceAutocomplete(autocomplete);

    return () => {
      // Cleanup listener on unmount
      placeAutocomplete?.unbindAll();
    };
  }, [places]);

  useEffect(() => {
    if (placeAutocomplete) {
      placeAutocomplete.addListener("place_changed", handlePlaceSelect);
    }
  }, [onPlaceSelect, placeAutocomplete]);

  const handleInputChange = (value: string) => {
    setInput(value);
  };

  return (
    <div>
      <Input
        type="text"
        ref={inputRef}
        onValueChange={handleInputChange}
        value={input}
        isClearable
      />
    </div>
  );
};
