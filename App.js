import { NavigationContainer } from "@react-navigation/native";
import React, { useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import ImageInputList from "./app/components/ImageInputList";
import Screen from "./app/components/Screen";
import AppNavigator from "./app/navigation/AppNavigator";
import AuthNavigator from "./app/navigation/AuthNavigator";
import navigationTheme from "./app/navigation/navigationTheme";
import ListingEditScreen from "./app/screens/ListingEditScreen";

import NetInfo from "@react-native-community/netinfo";

//useEffect gets executed everytime our component gets rendered but since we only wanna run it the first time, useEffect hook has this additional optional parameter that we can set as empty list. Therefore, now this will only run once
export default function App() {
  return (
    <NavigationContainer theme={navigationTheme}>
      <AppNavigator />
    </NavigationContainer>
  );
}
