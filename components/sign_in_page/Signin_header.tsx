import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const SignInHeader = () => {
  return (
    <View style={styles.header}>
      {/* <Image
        source={{
          uri: "https://imgs.search.brave.com/V9EYAlipzRh9sYx5OCGlNp766NFSv2HLCpCpxjJcgZI/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/d29ybGR2ZWN0b3Js/b2dvLmNvbS9sb2dv/cy9iaXRmaW5leC1s/ZWFmLnN2Zw",
        }}
        style={styles.logo}
      /> */}
      <Text style={styles.title}>Leaf Buds</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "column",
    alignItems: "center",
    marginLeft: 20,
    width: 200,
    maxWidth: "100%",
  },
  logo: {
    width: 50, // Set a fixed width for the logo
    height: undefined, // Let the height be determined by the aspect ratio
    aspectRatio: 1, // Maintain a square aspect ratio
    marginBottom: 50,
  },
  title: {
    marginTop: 20,
    marginBottom: 70,
    fontSize: 24,
    fontWeight: "600",
    textAlign: "center",
    color: "black",
  },
});

export default SignInHeader;