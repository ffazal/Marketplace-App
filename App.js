import React, {useState} from "react";

import Screen from "./app/components/Screen";
import AppTextInput from "./app/components/AppTextInput"

export default function App() {
  return (
    <Screen>
      <AppTextInput placeholder="Username" icon="email" />
    </Screen>
  );
}
