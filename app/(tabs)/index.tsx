import { Key, ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react";
import { useFetchUsers } from "../../components/utils/fetchEmail";
import { Text, View, StyleSheet } from "react-native";

export default function Index() {
  const { users, fetchError } = useFetchUsers(); // Use the custom hook

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to Tea Buds!</Text>
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
  emailText: {
    fontSize: 16,
    color: "black",
  },
});
