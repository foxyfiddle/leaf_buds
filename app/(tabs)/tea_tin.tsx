import { Text, View, StyleSheet } from "react-native";

export default function AboutScreen() {
  return (
    <View
      style={styles.container}
    >
      <Text style={styles.text}>List of Tea</Text>
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
  }
});