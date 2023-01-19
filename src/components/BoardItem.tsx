import { Text, View, StyleSheet } from "react-native";

export function BoardItem(props: {
  rank: string;
  name: string;
  total: string;
  last: string;
}) {
  return (
    <View style={styles.boardItem}>
      <View style={styles.boardCell}>
        <Text style={styles.boardCellText}>{props.rank}</Text>
      </View>
      <View style={styles.boardCell}>
        <Text style={styles.boardCellText}>{props.name}</Text>
      </View>
      <View style={styles.boardCell}>
        <Text style={styles.boardCellText}>◎{props.total}</Text>
      </View>
      <View style={styles.boardCell}>
        <Text style={styles.boardCellText}>◎{props.last}</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  boardItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#ff7003",
    width: "90vw",
    margin: "5px",
    padding: "20px",
    borderRadius: 10,
  },
  boardCell: {},
  boardCellText: { color: "black", fontWeight: "800" },
});
