import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  box: {
    width: "100%",
    height: 50,
    paddingHorizontal: 10,
    borderWidth: 1,
    marginTop: 50,
    marginBottom: 50,
  },

  task: {
    backgroundColor: "grey",
    borderTopColor: "black",
    borderTopWidth: 5,
    borderBottomColor: "black",
    borderBottomWidth: 5,
  },

  add: {
    backgroundColor: "#B0C4DE",
    padding: 10,
    width: "100%",
  },

  icon: {
    color: "#DC143C",
    fontSize: 25,
    padding: 10,
    textAlign: "right",
  },
});

export { styles };
