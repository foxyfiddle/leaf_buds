import React, { useState } from "react";
import { View, TextInput, TouchableOpacity, Text, StyleSheet, Alert } from "react-native";
import { supabase } from "../../app/config/supabaseClient"; // Import the Supabase client
import { router } from "expo-router";

const SignInForm = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = async () => {
    if (!email) {
      Alert.alert("Error", "Please enter an email address.");
      return;
    }

    try {
      // Check if the email already exists in the database
      const { data: existingUser, error: fetchError } = await supabase
        .from("users") // Replace "users" with your table name
        .select("*")
        .eq("user_email", email)
        .single();

      if (fetchError && fetchError.code !== "PGRST116") {
        // Handle unexpected errors (e.g., network issues)
        console.error("Error fetching user:", fetchError);
        Alert.alert("Error", "An error occurred while checking the email.");
        return;
      }

      if (existingUser) {
        // Email already exists
        router.push("/(tabs)");
        return;
      }

      // Insert the email into the database
      const { data: newUser, error: insertError } = await supabase
        .from("users") // Replace "users" with your table name
        .insert([{ user_email: email }]);

      if (insertError) {
        console.error("Error inserting user:", insertError);
        Alert.alert("Error", "An error occurred while saving the email.");
        return;
      }

      // Success
      Alert.alert("Success", "Email registered successfully!");
      console.log("New user added:", newUser);
    } catch (error) {
      console.error("Unexpected error:", error);
      Alert.alert("Error", "An unexpected error occurred.");
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="email@domain.com"
        placeholderTextColor="#737373"
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
    paddingHorizontal: 16,
    paddingVertical: 10,
    width: "100%",
    height: 50,
    backgroundColor: "#f4f4f4",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#white",
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