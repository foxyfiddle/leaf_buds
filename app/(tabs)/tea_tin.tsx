import { Key } from "react";
import { useFetchTea } from "../../components/utils/fetchTea";
import { Text, View, StyleSheet } from "react-native";

export default function TeaScreen() {
  const { teas, fetchError } = useFetchTea(); // Use the custom hook

  return (
    <View style={styles.container}>
      {fetchError && <Text style={styles.text}>{fetchError}</Text>}
      {teas && teas.length > 0 ? (
        <View style={styles.table}>
          {/* Table Header */}
          <View style={styles.tableRow}>
            <Text style={[styles.tableCell, styles.headerCell]}>Name</Text>
            <Text style={[styles.tableCell, styles.headerCell]}>Origin</Text>
          </View>

          {/* Table Rows */}
          {teas.map((tea: { id: Key; tea_name: string; tea_origin: string }) => (
            <View key={tea.id} style={styles.tableRow}>
              <Text style={styles.tableCell}>{tea.tea_name}</Text>
              <Text style={styles.tableCell}>{tea.tea_origin}</Text>
            </View>
          ))}
        </View>
      ) : (
        <Text style={styles.text}>No teas available</Text>
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
    padding: 16,
  },
  text: {
    color: "black",
    fontSize: 16,
    marginBottom: 8,
  },
  table: {
    width: "100%",
    borderWidth: 1,
    borderColor: "black",
  },
  tableRow: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderColor: "black",
  },
  tableCell: {
    flex: 1,
    padding: 8,
    textAlign: "center",
    fontSize: 14,
  },
  headerCell: {
    fontWeight: "bold",
    backgroundColor: "#f0f0f0",
  },
});