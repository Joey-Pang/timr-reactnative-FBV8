import "react-native-gesture-handler";
import * as React from "react";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import { useNavigation } from "@react-navigation/core";
import { Button, Text, View, StyleSheet, TouchableOpacity } from "react-native";

import { auth } from "../firebase";

function CustomDrawerContent(props) {
  const navigation = useNavigation();

  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.navigate("Login");
      })
      .catch((error) => alert(error.message));
  };

  return (
    <DrawerContentScrollView key={props}>
      <DrawerItemList {...props} />
      <TouchableOpacity style={styles.button} onPress={handleSignOut}>
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>
    </DrawerContentScrollView>
  );
}

export default CustomDrawerContent;

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#FF5B5B",
    width: "90%",
    padding: 15,
    borderRadius: 6,
    position: "relative",
    // alignItems: "center",
    marginTop: 425,
    marginLeft: 10,
  },
  buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
  },
});
