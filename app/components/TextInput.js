import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import defaultStyles from "../config/styles";

// Under this view component we are using Conditional rendering: we want the icon to be optional so we wanna render this only if icon is defined
function AppTextInput({ icon, width = "100%", ...otherProps }) {
  return (
    <View style={[styles.container, { width }]}>
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={20}
          color={defaultStyles.colors.medium}
          style={styles.icon}
        />
      )}
      <TextInput
        placeholderTextColor={defaultStyles.colors.medium}
        style={defaultStyles.text}
        {...otherProps}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.light,
    borderRadius: 25,
    flexDirection: "row", //sets our icons and text input are laid out horizontally
    padding: 15, // So we have some room in our container
    marginVertical: 10, // With this we can seperate multiple text input on the same screen
  },

  icon: {
    marginRight: 10,
    //justifyContent: "center", //centers vertically
    //alignItems: "center", //centers horizontally
  },
});

export default AppTextInput;
