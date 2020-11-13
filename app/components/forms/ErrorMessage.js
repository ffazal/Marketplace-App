import React from "react";
import { StyleSheet } from "react-native";

import Text from "../Text";

function ErrorMessage({ error, visible }) {
  if (!visible || !error) return null; // If visible is false or we don't have an error, return null

  return <Text style={styles.error}>{error}</Text>;
}

const styles = StyleSheet.create({
  error: { color: "red" },
});

export default ErrorMessage;
