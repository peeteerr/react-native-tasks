import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { styles } from "../style";

export default function DisplayTasks(props) {
  return (
    <View style={styles.task}>
      <Text>task number: {props.index}</Text>

      <Text>Title: {props.task}</Text>

      <TouchableOpacity
        onPress={() => {
          props.delete(props.index);
        }}
      >
        <MaterialIcons name="Delete Task" style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
}
