import React, { useState } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  Button,
  KeyboardAvoidingView,
} from "react-native";

import { styles } from "../style";
export default function AddTask(props) {
  const [Task, setTask] = useState("");
  const SendTask = (value) => {
    props.getTask(value);
    setTask(null);
  };
  return (
    <KeyboardAvoidingView>
      <View>
        <TextInput
          style={styles.box}
          placeholder="Enter Task .."
          value={Task}
          onChangeText={(text) => {
            setTask(text);
          }}
        />
        <Text>{Task}</Text>

        <TouchableOpacity
          onPress={() => {
            SendTask(Task);
          }}
          style={styles.add}
        >
          <Text>Add</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}
