import supabase from "../config/supabaseClient"; // Adjust the path as necessaryclear

export async function fetchEmail() {
    try {
      const { data, error } = await supabase
        .from('users') // Replace with your table name
        .select() // Specify the column you want to fetch
        .limit(1); // Fetch only one email (optional)
      
      if (error) {
        console.error('Error fetching email:', error);
        return null;
      }
  
      return data && data[0]?.email; // Return the first email
    } catch (err) {
      console.error('Unexpected error:', err);
      return null;
    }
  }