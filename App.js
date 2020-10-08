import React from "react";
import {
  Dimensions,
  StyleSheet,
  StatusBar,
  View,
  SafeAreaView,
  Button,
  Alert,
  Platform,
} from "react-native";
import { useDimensions } from "@react-native-community/hooks";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";

export default function App() {
  return <ViewImageScreen />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    //justifyContent: "center",
    //alignItems: "center",
  },
});
