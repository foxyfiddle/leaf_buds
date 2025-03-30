import supabase from "../config/supabaseClient";
import { useEffect, useState } from "react";
import { fetchEmail } from "../../components/utils/fetchEmail";
import { Link } from "expo-router";
import { Text, View, StyleSheet, Button } from "react-native";

export default function Index() {
  const [fetchError, setFetchError] = useState<string | null>(null);
  const [users, setUsers] = useState<any[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const { data, error } = await supabase
        .from("users")
        .select("*");
    
      if (error) {
        console.error("Error fetching users:", error);
        setFetchError("Could not fetch users");
        setUsers([]);
      } else {
        console.log("Fetched data:", data); // Log the fetched data
        setUsers(data); // Update the state
        console.log(users);
        setFetchError(null);
      }
    };

    fetchUsers();
  }, []);

  // New useEffect to monitor `users` state
  useEffect(() => {
    console.log("Updated users state:", users);
  }, [users]);

  return (
    <View style={styles.container}>
      {fetchError && <Text style={styles.text}>{fetchError}</Text>}
      {users && (
        <View>
          {users.map((user) => (
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
  button: {
    fontSize: 20,
    textDecorationLine: "underline",
    color: "black",
  },
  emailText: {
    fontSize: 16,
    color: "black",
  }
});
