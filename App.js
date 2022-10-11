import { useState } from "react";
import {
  Keyboard,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Button,
} from "react-native";
import AddTask from "./Components/AddTask";
import DisplayTasks from "./Components/DisplayTasks";

export default function App() {
  const [allTasks, setAllTasks] = useState([]);
  const [resTask, setResTask] = useState([]);

  const getTask = (task) => {
    setAllTasks([...allTasks, task]);
    Keyboard.dismiss();
  };

  const deleteTask = (index) => {
    setAllTasks(
      allTasks.filter((task, ind) => {
        return ind != index - 1;
      })
    );
  };
  const deleteAllTask = (index) => {
    setAllTasks([]);
  };
  return (
    <View style={styles.cont}>
      <AddTask getTask={getTask} />
      <ScrollView>
        {allTasks.map((task, index) => {
          return (
            <View key={index}>
              <DisplayTasks index={index + 1} task={task} delete={deleteTask} />
            </View>
          );
        })}
      </ScrollView>
      <Button onPress={deleteAllTask} color={"#DC143C"} title="Delete All" />
    </View>
  );
}

const styles = StyleSheet.create({
  cont: {
    margin: 20,
  },
});
