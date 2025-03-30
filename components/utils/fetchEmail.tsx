import { useState, useEffect } from "react";
import supabase from "../../app/config/supabaseClient";

export function useFetchUsers() {
  const [fetchError, setFetchError] = useState<string | null>(null);
  const [users, setUsers] = useState<Array<any>>([]);

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
        setFetchError(null);
      }
    };

    fetchUsers();
  }, []);

  return { users, fetchError };
}