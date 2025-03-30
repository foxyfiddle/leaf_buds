import { Key, ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react";
import { useFetchUsers } from "../../components/utils/fetchEmail";
import { Text, View, StyleSheet } from "react-native";

export default function Index() {
  const { users, fetchError } = useFetchUsers(); // Use the custom hook

  return (
    <View style={styles.container}>
      {fetchError && <Text style={styles.text}>{fetchError}</Text>}
      {users && (
        <View>
          {users.map((user: { id: Key | null | undefined; user_email: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; }) => (
            <Text key={user.id} style={styles.emailText}>
              {user.user_email}
            </Text>
          ))}
        </View>
      )}
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
