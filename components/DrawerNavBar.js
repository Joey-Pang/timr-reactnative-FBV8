import "react-native-gesture-handler";
import * as React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import LoginPage from "../pages/LoginPage";
import Dashboard from "../pages/Dashboard";
import Todolist from "../pages/Todolist";
import Calendar from "../pages/Calendar";

import CustomDrawerContent from "./DrawerContent";

const Drawer = createDrawerNavigator();

function DrawerNavBar() {
  return (
    <Drawer.Navigator
      useLegacyImplementation
      initialRouteName="Login"
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen
        name="Login"
        component={LoginPage}
        options={{
          headerShown: false,
          gestureEnabled: false,
          swipeEnabled: false,
          drawerItemStyle: { display: "none" },
        }}
      />
      <Drawer.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          drawerActiveTintColor: "#50C0FF",
          drawerLabelStyle: { color: "#565656" },
        }}
      />
      <Drawer.Screen
        name="Todo"
        component={Todolist}
        options={{
          drawerActiveTintColor: "#FFD37D",
          drawerLabelStyle: { color: "#565656" },
        }}
      />
      <Drawer.Screen
        name="Calendar"
        component={Calendar}
        options={{
          drawerActiveTintColor: "#9CFF5F",
          drawerLabelStyle: { color: "#565656" },
        }}
      />
    </Drawer.Navigator>
  );
}

export default DrawerNavBar;
