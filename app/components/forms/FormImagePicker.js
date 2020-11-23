import React from "react";
import { useFormikContext } from "formik";

import ErrorMessage from "./ErrorMessage";
import ImageInputList from "../ImageInputList";

function FormImagePicker({ name }) {
  const { errors, setFieldValue, touched, values } = useFormikContext();
  const imageUris = values[name];
  // Add Image
  const handleAdd = (uri) => {
    setFieldValue(name, [...imageUris, uri]); // [... takes the copy of our original array and add the new image uri at the end] // setFieldValue has 2 properties (name, value)
  };

  //Remove image
  const handleRemove = (uri) => {
    setFieldValue(
      name,
      imageUris.filter((imageUri) => imageUri !== uri)
    ); //filter method to get all the uris expect for the one thats here (uri) which is removed
  };

  return (
    // Since we have multiple components here, we have to wrap them into React Fragment
    <React.Fragment>
      <ImageInputList
        imageUris={imageUris}
        onAddImage={handleAdd}
        onRemoveImage={handleRemove}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </React.Fragment>
  );
}

export default FormImagePicker;
