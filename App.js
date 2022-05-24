import "react-native-gesture-handler";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";

import DrawerNavBar from "./components/DrawerNavBar";

export default function App() {
  return (
    <NavigationContainer>
      <DrawerNavBar />
    </NavigationContainer>
  );
}
