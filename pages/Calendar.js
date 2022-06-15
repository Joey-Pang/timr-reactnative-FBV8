import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import DatePicker from "react-native-modern-datepicker";

function Calendarpage({ navigation }) {
  const [selectedDate, setSelectedDate] = useState("");

  function convertDigitIn(str) {
    return str.split("/").reverse().join("/");
  }

  return (
    <View style={{ marginTop: 35 }}>
      <TouchableOpacity
        style={styles.hamMenu}
        onPress={() => navigation.openDrawer()}
      >
        <Image source={require("../images/ham-menu.png")} />
      </TouchableOpacity>
      <Text style={styles.headerText}>Calendar</Text>

      <View style={styles.calendarContainer}>
        <DatePicker
          mode="calendar"
          onSelectedChange={(date) => setSelectedDate(date)}
          style={{ borderRadius: 10 }}
        />
      </View>

      <View>
        <Text>Selected Date</Text>
        <Text>{convertDigitIn(selectedDate.toString())}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  hamMenu: {
    marginLeft: 20,
  },
  headerText: {
    marginLeft: 20,
    fontSize: 36,
    fontWeight: "400",
  },
  calendarContainer: {
    marginTop: 40,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 30,
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  items: {
    marginTop: 30,
  },
  container: {
    flex: 1,
    backgroundColor: "#c7c7c7",
  },
});

export default Calendarpage;
