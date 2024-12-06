import { useState } from "react";

import { CheckboxGroup, Checkbox } from "@nextui-org/checkbox";
import { Input, Textarea } from "@nextui-org/input";
import { Button, DateInput, TimeInput } from "@nextui-org/react";
import ImageUploading, { ImageListType } from "react-images-uploading";
import { useForm, SubmitHandler } from "react-hook-form";

import { musicList } from "../../data";

import { EventFormTemplateInputs } from "../../types";

interface Image {
  data_url: string; // Base64 image data
  file: File; // The image file
}

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

  const [images, setImages] = useState<Image[]>([]);
  const [isFreeEvent, setIsFreeEvent] = useState<boolean>(false);
  const [selected, setSelected] = useState(["bachata", "salsa"]);

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

  const onChange = (imageList: ImageListType, addUpdateIndex?: number[]) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList as Image[]);
  };

  const handleFreeEvent = () => {
    setIsFreeEvent(!isFreeEvent);
  };

  // Handle checkbox change (add/remove checkbox from selected list)
  const handleCheckboxChange = (value: string) => {
    setSelected((prevSelected) =>
      prevSelected.includes(value)
        ? prevSelected.filter((item) => item !== value)
        : [...prevSelected, value]
    );
  };

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
    <form className="grid-rows grid gap-4" onSubmit={handleSubmit(onSubmit)}>
      <h1 className="my-2">Create event</h1>
      <Input
        type="text"
        label="Event Title"
        {...register("title")}
        isClearable
      />
      <div>
        <ImageUploading
          multiple={false} // Only allow 1 image
          value={images}
          onChange={onChange}
          dataURLKey="data_url"
        >
          {({
            imageList,
            onImageUpload,
            onImageUpdate,
            onImageRemove,
            isDragging,
            dragProps,
          }) => (
            // write your building UI
            <div className="upload__image-wrapper">
              <button
                className="hover:text-primary"
                style={isDragging ? { color: "lime" } : undefined}
                onClick={onImageUpload}
                {...dragProps}
              >
                Click or Drop image here
              </button>
              &nbsp;
              {imageList.map((image, index) => (
                <div key={index} className="image-item">
                  <img src={image["data_url"]} alt="" width="540" />
                  <div className="image-item__btn-wrapper">
                    <button onClick={() => onImageUpdate(index)}>Update</button>
                    <button onClick={() => onImageRemove(index)}>Remove</button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </ImageUploading>
      </div>
      <Input type="text" label="Location" />
      <DateInput label={"Event date"} />
      <TimeInput label="Event Start Time" />
      <TimeInput label="Event End Time" />
      <Textarea
        className="w-full"
        label="Description"
        {...register("description", { required: "Description is required" })}
        placeholder="Enter your description"
      />
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
      <CheckboxGroup
        label="Select music"
        color="secondary"
        value={selected}
        onValueChange={(newSelected) => setSelected(newSelected as string[])}
      >
        {musicList.map((genre) => (
          <div className="flex" key={genre}>
            <div className="flex w-1/3">
              <Checkbox value={genre}>
                {genre.charAt(0).toUpperCase() + genre.slice(1)}
              </Checkbox>
            </div>
            {selected.includes(genre) && (
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
      <Button
        className="mb-4 hover:bg-primary hover:text-gray-800"
        type="submit"
      >
        Submit
      </Button>
    </form>
  );
}
