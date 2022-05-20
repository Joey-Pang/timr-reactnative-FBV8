import "react-native-gesture-handler";
import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

import LoginPage from "./pages/LoginPage";
import Homepage from "./pages/Home";
import Todolist from "./pages/Todolist";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Login">
        <Drawer.Screen
          name="Login"
          component={LoginPage}
          options={{ headerShown: false }}
        />
        <Drawer.Screen name="Home" component={Homepage} />
        <Drawer.Screen name="Todo" component={Todolist} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
