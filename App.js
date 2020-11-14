import React, { useEffect } from "react";
import ListingEditScreen from "./app/screens/ListingEditScreen";
import Screen from "./app/components/Screen";

import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";

//useEffect gets executed everytime our component gets rendered but since we only wanna run it the first time, useEffect hook has this additional optional parameter that we can set as empty list. Therefore, now this will only run once
export default function App() {
  const requestPermission = async () => { // Reqest method internally uses the Permission API
    const { granted } = await ImagePicker.requestCameraPermissionsAsync(); // Async method so we have to await it to get the result
    if (!granted) alert("You need to enable permission to access the library");
  };

  useEffect(() => {
    requestPermission();
  }, []);

  return <Screen></Screen>;
}
