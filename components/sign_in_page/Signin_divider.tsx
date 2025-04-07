
import React from "react";
import { View, Text, StyleSheet } from "react-native";

const SignInDivider = () => {
  return (
    <View style={styles.container}>
      <View style={styles.line} />
      <Text style={styles.text}>or</Text>
      <View style={styles.line} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 24,
    width: 327,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: "#d4d4d4", // Neutral color for the line
    marginHorizontal: 8,
  },
  text: {
    fontSize: 14,
    color: "#737373", // Neutral text color
    textAlign: "center",
  },
});

export default SignInDivider;