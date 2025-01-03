import { useState } from "react";

import { Checkbox } from "@nextui-org/checkbox";
import { Input, Textarea } from "@nextui-org/input";
import { Button, DateInput, TimeInput } from "@nextui-org/react";
import { useForm, SubmitHandler } from "react-hook-form";

import { Location } from "./Location";
import { ImageUpload } from "./ImageUpload";
import { MusicSelection } from "./MusicSelection";

import { EventFormTemplateInputs } from "../../../types";

export default function EventForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<EventFormTemplateInputs>();

  const onSubmit: SubmitHandler<EventFormTemplateInputs> = (data) => {
    console.log(data);
    reset();
  };

  const [isFreeEvent, setIsFreeEvent] = useState<boolean>(false);

  const handleFreeEvent = () => {
    setIsFreeEvent(!isFreeEvent);
  };

  return (
    <form className="grid-rows grid gap-4" onSubmit={handleSubmit(onSubmit)}>
      <h1 className="my-2">Create event</h1>
      <Input
        type="text"
        label="Event Title"
        {...register("title")}
        isClearable
      />

      {/* Image Upload */}
      <ImageUpload />

      {/* Location */}
      <Location />

      {/* Event date and time */}
      <DateInput label={"Event date"} />
      <TimeInput label="Event Start Time" />
      <TimeInput label="Event End Time" />

      {/* Event Description */}
      <Textarea
        className="w-full"
        label="Description"
        {...register("description", { required: "Description is required" })}
        placeholder="Enter your description"
      />

      {/* Price */}
      <div>
        {!isFreeEvent && (
          <Input
            type="text"
            label="Price"
            {...register("price", { required: true })}
          />
        )}
        <Checkbox className="mt-1" color="secondary" onClick={handleFreeEvent}>
          <p className="hover:text-primary">This is a free event</p>
        </Checkbox>
      </div>

      {/* Music Selection */}
      <MusicSelection />

      <Button
        className="mb-4 hover:bg-primary hover:text-gray-800"
        type="submit"
      >
        Submit
      </Button>
    </form>
  );
}
