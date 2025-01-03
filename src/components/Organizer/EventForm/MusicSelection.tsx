import { useState } from "react";
import { CheckboxGroup, Checkbox } from "@nextui-org/checkbox";
import { Input } from "@nextui-org/input";

import { musicList } from "../../../data";

export const MusicSelection = () => {
  const [selectedMusic, setSelectedMusic] = useState(["bachata", "salsa"]);
  // Store the numeric input for each checkbox (e.g., bachata: 20, salsa: 30, etc.)
  const [additionalData, setAdditionalData] = useState<{
    [key: string]: number;
  }>({
    bachata: 40,
    salsa: 40,
    merengue: 0,
    reggaeton: 0,
    others: 0,
  });

  // Handle numeric input change
  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    value: string
  ) => {
    const newValue = Math.max(0, Math.min(100, Number(event.target.value))); // Ensure the value is between 0 and 100
    setAdditionalData((prevData) => ({
      ...prevData,
      [value]: newValue,
    }));
  };

  return (
    <CheckboxGroup
      label="Select music"
      color="secondary"
      value={selectedMusic}
      onValueChange={(newSelected) => setSelectedMusic(newSelected)}
    >
      {musicList.map((genre) => (
        <div className="flex" key={genre}>
          <div className="flex w-1/3">
            <Checkbox value={genre}>
              {genre.charAt(0).toUpperCase() + genre.slice(1)}
            </Checkbox>
          </div>
          {selectedMusic.includes(genre) && (
            <Input
              className="ms-4"
              variant="bordered"
              size="sm"
              type="number"
              min={1}
              max={100}
              aria-label={`${genre} percentage`}
              label="Percentage"
              value={String(additionalData[genre] || 0)}
              onChange={(e) => handleInputChange(e, genre)}
            />
          )}
        </div>
      ))}
    </CheckboxGroup>
  );
};
