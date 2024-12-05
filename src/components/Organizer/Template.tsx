import { useState } from "react";

import { CheckboxGroup, Checkbox } from "@nextui-org/checkbox";
import { Input, Textarea } from "@nextui-org/input";
import { Button, DateInput, TimeInput } from "@nextui-org/react";

import { useForm, SubmitHandler } from "react-hook-form";

import { EventFormTemplateInputs } from "../../types";

export default function Template() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm<EventFormTemplateInputs>();

  const onSubmit: SubmitHandler<EventFormTemplateInputs> = (data) => {
    console.log(data);
    reset();
  };

  const [selected, setSelected] = useState(["bachata", "salsa"]);

  return (
    <form className="grid-rows grid gap-4" onSubmit={handleSubmit(onSubmit)}>
      <h1 className="my-2">Create event</h1>
      <Input
        type="text"
        label="Event Title"
        {...register("title")}
        isClearable
      />
      <Input type="text" label="Location" />
      <DateInput label={"Event date"} />
      <TimeInput label="Event Start Time" />
      <TimeInput label="Event End Time" />
      <Input
        type="text"
        label="Price"
        {...register("price", { required: true })}
      />
      <Textarea
        className="w-full"
        label="Description"
        {...register("description", { required: "Description is required" })}
        placeholder="Enter your description"
      />
      <CheckboxGroup
        label="Select music"
        color="secondary"
        value={selected}
        onValueChange={setSelected}
      >
        <Checkbox value="bachata">Bachata</Checkbox>
        <Checkbox value="salsa">Salsa</Checkbox>
        <Checkbox value="merengue">Merengue</Checkbox>
        <Checkbox value="reggaeton">Reggaeton</Checkbox>
        <Checkbox value="others">Others</Checkbox>
      </CheckboxGroup>
      <Button className="mb-4 bg-primary text-gray-800" type="submit">
        Submit
      </Button>
    </form>
  );
}
