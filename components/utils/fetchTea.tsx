import { useState, useEffect } from "react";
import supabase from "../../app/config/supabaseClient";

export function useFetchTea() {
  const [fetchError, setFetchError] = useState<string | null>(null);
  const [teas, setTeas] = useState<Array<any>>([]);

  useEffect(() => {
    const fetchTeas = async () => {
      const { data, error } = await supabase
        .from("teas")
        .select("*");

      if (error) {
        console.error("Error fetching teas:", error);
        setFetchError("Could not fetch teas");
        setTeas([]);
      } else {
        console.log("Fetched data:", data); // Log the fetched data
        setTeas(data); // Update the state
        setFetchError(null);
      }
    };

    fetchTeas();
  }, []);

  return { teas, fetchError };
}