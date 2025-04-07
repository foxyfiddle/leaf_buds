
import SignInHeader from "../../components/Signin_header";
import SignInForm from "../../components/Signin_form";
import SignInDivider from "../../components/Signin_divider";
import SignInButton from "../../components/Signin_social_buttons";
import SignInTerms from "../../components/Signin_terms";
import { Text, View, StyleSheet } from "react-native";

export default function Index() {
  console.log("Home component rendered");
  

  return (
    <View style={styles.container}>
        <Text style={styles.title}>Welcome to the home page</Text>
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
  title: {
    fontSize: 16, // Equivalent to "text-base"
    fontWeight: "600", // Equivalent to "font-semibold"
    color: "black",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14, // Equivalent to "text-sm"
    color: "gray",
    textAlign: "center",
  },
});