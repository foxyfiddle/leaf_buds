import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet, Alert } from "react-native";

type SocialButtonProps = {
  icon: string;
  label: string;
  onPress: () => void;
};

const SocialButton: React.FC<SocialButtonProps> = ({ icon, label, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <View style={styles.buttonContent}>
        <Image source={{ uri: icon }} style={styles.icon} />
        <Text style={styles.label}>{label}</Text>
      </View>
    </TouchableOpacity>
  );
};

const SignInSocialButtons = () => {
  const handleGoogleSignIn = () => {
    Alert.alert("Sign in with Google");
    console.log("Sign in with Google");
  };

  const handleAppleSignIn = () => {
    Alert.alert("Sign in with Apple");
    console.log("Sign in with Apple");
  };

  return (
    <View style={styles.container}>
      <SocialButton
        icon="https://cdn.builder.io/api/v1/image/assets/TEMP/6e86c302247d8213673a8b041259abb3edcd98ce?placeholderIfAbsent=true&apiKey=2ad245b80287461b93420a0104a26e78"
        label="Continue with Google"
        onPress={handleGoogleSignIn}
      />
      <SocialButton
        icon="https://cdn.builder.io/api/v1/image/assets/TEMP/e06f07c1739becba824c6ebe2a3a20fbd8947482?placeholderIfAbsent=true&apiKey=2ad245b80287461b93420a0104a26e78"
        label="Continue with Apple"
        onPress={handleAppleSignIn}
      />
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
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
    paddingHorizontal: 16,
    backgroundColor: "#f4f4f4",
    borderRadius: 8,
    marginBottom: 8,
  },
  buttonContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 8,
  },
  label: {
    fontSize: 14,
    color: "#000",
    fontWeight: "500",
  },
});

export default SignInSocialButtons;