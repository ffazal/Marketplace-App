import React from "react";
import { StyleSheet } from "react-native";

import AppText from "./AppText";

function ErrorMessage({ error }) {
  if (!error) return null; // If no error exists return Null
  return <AppText style={styles.error}>{error}</AppText>;
}

const styles = StyleSheet.create({
  error: { color: "red" },
});

export default ErrorMessage;
