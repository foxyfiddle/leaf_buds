import React from "react";
import { View, Text, StyleSheet, Linking, TouchableOpacity } from "react-native";

const SignInTerms = () => {
  const handleTermsPress = () => {
    Linking.openURL("https://example.com/terms"); // Replace with your Terms of Service URL
  };

  const handlePrivacyPress = () => {
    Linking.openURL("https://example.com/privacy"); // Replace with your Privacy Policy URL
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        By clicking continue, you agree to our{" "}
        <Text style={styles.link} onPress={handleTermsPress}>
          Terms of Service
        </Text>{" "}
        and{" "}
        <Text style={styles.link} onPress={handlePrivacyPress}>
          Privacy Policy
        </Text>.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 24,
    alignSelf: "center",
  },
  text: {
    fontSize: 12, // Equivalent to "text-xs"
    lineHeight: 20, // Equivalent to "leading-5"
    textAlign: "center",
    color: "#737373", // Neutral gray color
    /* backgroundColor: "lightblue", */ // Light blue background for testing
    marginHorizontal: 17,
  },
  link: {
    color: "black",
    textDecorationLine: "underline", // Adds an underline to the link
  },
});

export default SignInTerms;