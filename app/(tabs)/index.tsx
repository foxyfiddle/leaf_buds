
import RouteToTeaTinButtons from "../../components/index_page/route_button";
import { Text, View, StyleSheet, Image } from "react-native";

export default function Index() {
  

  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/tea_icon.png")}
        style={{
          width: 80, // Set a fixed width for the icon
          height: undefined, // Let the height be determined by the aspect ratio
          aspectRatio: 1, // Maintain a square aspect ratio
          marginBottom: 50,
        }}
      />
        <Text style={styles.title}>Start by adding your first tea to your tea tin</Text>
        <RouteToTeaTinButtons />
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
    paddingHorizontal: 28,
    textAlign: "center",
    lineHeight: 24, // Equivalent to "leading-6"
    letterSpacing: 0.5, // Equivalent to "tracking-wide"
    fontFamily: "Inter_600SemiBold", // Use the Inter font family
  },
});