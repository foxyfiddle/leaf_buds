import { router } from "expo-router";
import React from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";

const RouteToTeaTinButtons = () => {
  
    return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push("/(tabs)/tea_tin")}
      >
        <Text style={styles.label}>Go to Tea Tin</Text>
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
    paddingHorizontal: 16,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: "#FF9149",
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

export default RouteToTeaTinButtons;