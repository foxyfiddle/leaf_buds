import { Link } from "expo-router";
import { Text, View, StyleSheet, Button } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home Page</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "black",
  },
  button: {
    fontSize: 20,
    textDecorationLine: "underline",
    color: "black",
  }
});
