import "react-native-gesture-handler";
import * as React from "react";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import { useNavigation } from "@react-navigation/core";
import {
  Button,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";

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
    <View style={{ flex: 1 }}>
      <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
        <Image
          source={require("../images/timr-text.png")}
          style={styles.textimage}
        />
        <Image
          source={require("../images/timr-logo.png")}
          style={styles.texticon}
        />
      </View>

      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>

      <View>
        <TouchableOpacity style={styles.button} onPress={handleSignOut}>
          <Text style={styles.buttonText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default CustomDrawerContent;

const styles = StyleSheet.create({
  textimage: {
    marginTop: 20,
    marginLeft: 13,
    width: "40%",
  },
  texticon: {
    marginLeft: 5,
    marginTop: 10,
    height: 45,
    width: 45,
  },
  button: {
    backgroundColor: "#FF5B5B",
    width: "90%",
    height: 51,
    padding: 15,
    borderRadius: 6,
    marginLeft: 10,
    marginBottom: 10,
  },
  buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
  },
});
