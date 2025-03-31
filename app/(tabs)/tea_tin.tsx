import { Key, ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react";
import { useFetchTea } from "../../components/utils/fetchTea";
import { Text, View, StyleSheet } from "react-native";

export default function TeaScreen() {
  const { teas, fetchError } = useFetchTea(); // Use the custom hook

  return (
    <View style={styles.container}>
      {fetchError && <Text style={styles.text}>{fetchError}</Text>}
      {teas && (
        <View>
          {teas.map((tea: { id: Key | null | undefined; tea_name: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; tea_origin: string}) => (
            <Text key={tea.id} style={styles.emailText}>
              {tea.tea_name} | {tea.tea_origin}
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