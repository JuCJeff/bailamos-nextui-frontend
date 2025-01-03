import { useState } from "react";
import ImageUploading, { ImageListType } from "react-images-uploading";

interface Image {
  data_url: string; // Base64 image data
  file: File; // The image file
}

export const ImageUpload = () => {
  const [images, setImages] = useState<Image[]>([]);

  const onChange = (imageList: ImageListType, addUpdateIndex?: number[]) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList as Image[]);
  };

  return (
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
              <div key={image.data_url} className="image-item">
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
  );
};
