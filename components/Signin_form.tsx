import React, { useState } from "react";
import { View, TextInput, TouchableOpacity, Text, StyleSheet, Alert } from "react-native";

const SignInForm = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    // Handle form submission
    Alert.alert("Email submitted", email);
    console.log("Email submitted:", email);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="email@domain.com"
        placeholderTextColor="#737373" // Neutral gray color
        value={email}
        onChangeText={(text) => setEmail(text)}
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
      />
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 24,
    width: "100%",
    maxWidth: 327,
    alignSelf: "center",
  },
  input: {
    flex: 1,
    paddingHorizontal: 16, // Match button padding
    paddingVertical: 10, // Match button padding
    width: "100%",
    height: 50, // Match button height
    backgroundColor: "#f4f4f4", // Match button background color
    borderRadius: 8, // Match button border radius
    borderWidth: 1, // Optional: Add border to match button
    borderColor: "#d4d4d4", // Optional: Match button border color
    color: "black",
    fontSize: 16,
    marginBottom: 16,
  },
  button: {
    paddingVertical: 10,
    backgroundColor: "black",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "500",
  },
});

export default SignInForm;