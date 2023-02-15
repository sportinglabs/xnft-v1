import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Pressable,
  GestureResponderEvent,
} from "react-native";
import { BoardItem } from "../components/BoardItem";
import { useEffect, useState } from "react";

export function LeaderboardScreen() {
  useEffect(() => {}, []);
  const [count, setCount] = useState(0);
  const [filtered, setFiltered] = useState(false);
  const [items, setItems] = useState([
    { rank: 1, name: "rustintern", total: 1200, last: 10 },
    { rank: 2, name: "Lazycipher", total: 1100, last: 10 },
    { rank: 3, name: "dinesh", total: 1000, last: 10 },
    { rank: 4, name: "M2DT", total: 900, last: 10 },
    { rank: 5, name: "Kulture", total: 800, last: 10 },
    { rank: 6, name: "Brandon", total: 700, last: 10 },
    { rank: 7, name: "John", total: 600, last: 10 },
    { rank: 1, name: "rustintern", total: 1200, last: 10 },
    { rank: 2, name: "Lazycipher", total: 1100, last: 10 },
    { rank: 3, name: "dinesh", total: 1000, last: 10 },
    { rank: 4, name: "M2DT", total: 900, last: 10 },
    { rank: 5, name: "Kulture", total: 800, last: 10 },
    { rank: 6, name: "Brandon", total: 700, last: 10 },
    { rank: 7, name: "John", total: 600, last: 10 },
    { rank: 1, name: "rustintern", total: 1200, last: 10 },
    { rank: 2, name: "Lazycipher", total: 1100, last: 10 },
    { rank: 3, name: "dinesh", total: 1000, last: 10 },
    { rank: 4, name: "M2DT", total: 900, last: 10 },
    { rank: 5, name: "Kulture", total: 800, last: 10 },
    { rank: 6, name: "Brandon", total: 700, last: 10 },
    { rank: 7, name: "John", total: 600, last: 10 },
    { rank: 1, name: "rustintern", total: 1200, last: 10 },
    { rank: 2, name: "Lazycipher", total: 1100, last: 10 },
    { rank: 3, name: "dinesh", total: 1000, last: 10 },
    { rank: 4, name: "M2DT", total: 900, last: 10 },
    { rank: 5, name: "Kulture", total: 800, last: 10 },
    { rank: 6, name: "Brandon", total: 700, last: 10 },
    { rank: 7, name: "John", total: 600, last: 10 },
  ]);

  const sort = (props: { filter: string }) => {
    if (filtered) {
      if (props.filter == "rank") {
        let sortedProducts = items.sort((p1, p2) =>
          p1.rank < p2.rank ? 1 : p1.rank > p2.rank ? -1 : 0
        );
        setItems(sortedProducts);
        setCount(count + 1);
        setFiltered(!filtered);
      }
      if (props.filter == "name") {
        let sortedProducts = items.sort((p1, p2) =>
          p1.name < p2.name ? 1 : p1.name > p2.name ? -1 : 0
        );
        setItems(sortedProducts);
        setCount(count + 1);
        setFiltered(!filtered);
      }
      if (props.filter == "total") {
        let sortedProducts = items.sort((p1, p2) =>
          p1.total < p2.total ? 1 : p1.total > p2.total ? -1 : 0
        );
        setItems(sortedProducts);
        setCount(count + 1);
        setFiltered(!filtered);
      }
      if (props.filter == "last") {
        let sortedProducts = items.sort((p1, p2) =>
          p1.last < p2.last ? 1 : p1.last > p2.last ? -1 : 0
        );
        setItems(sortedProducts);
        setCount(count + 1);
        setFiltered(!filtered);
      }
    } else {
      if (props.filter == "rank") {
        let sortedProducts = items.sort((p1, p2) =>
          p1.rank > p2.rank ? 1 : p1.rank < p2.rank ? -1 : 0
        );
        setItems(sortedProducts);
        setCount(count + 1);
        setFiltered(!filtered);
      }
      if (props.filter == "name") {
        let sortedProducts = items.sort((p1, p2) =>
          p1.name > p2.name ? 1 : p1.name < p2.name ? -1 : 0
        );
        setItems(sortedProducts);
        setCount(count + 1);
        setFiltered(!filtered);
      }
      if (props.filter == "total") {
        let sortedProducts = items.sort((p1, p2) =>
          p1.total > p2.total ? 1 : p1.total < p2.total ? -1 : 0
        );
        setItems(sortedProducts);
        setCount(count + 1);
        setFiltered(!filtered);
      }
      if (props.filter == "last") {
        let sortedProducts = items.sort((p1, p2) =>
          p1.last > p2.last ? 1 : p1.last < p2.last ? -1 : 0
        );
        setItems(sortedProducts);
        setCount(count + 1);
        setFiltered(!filtered);
      }
    }
  };
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
    >
      <View style={styles.leaderboard}>
        <View style={styles.leaderboardContent}>
          <View>
            <Text style={styles.leaderboardTitle}>Leaderboard</Text>
            <View style={styles.leaderboardCategoryRow}>
              <Pressable
                style={styles.leaderboardCellRank}
                onPress={(pressed) => {
                  sort({ filter: "rank" });
                }}
              >
                <Text style={styles.leaderboardCategoryName}>#</Text>
              </Pressable>

              <Pressable
                style={styles.leaderboardCellName}
                onPress={(pressed) => {
                  sort({ filter: "name" });
                }}
              >
                <Text style={styles.leaderboardCategoryName}>Name</Text>
              </Pressable>
              <Pressable
                style={styles.leaderboardCellTotal}
                onPress={(pressed) => {
                  sort({ filter: "total" });
                }}
              >
                <Text style={styles.leaderboardCategoryName}>Total</Text>
              </Pressable>
              <Pressable
                style={styles.leaderboardCellLast}
                onPress={(pressed) => {
                  sort({ filter: "last" });
                }}
              >
                <Text style={styles.leaderboardCategoryName}>Last</Text>
              </Pressable>
            </View>
            {items.map((item, index) => (
              <BoardItem
                rank={item.rank.toString()}
                name={item.name}
                total={item.total.toString()}
                last={item.last.toString()}
                key={index}
              />
            ))}
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  leaderboard: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "center",
    margin: "",
    padding: "0",
    backgroundColor: "black",
    minHeight: "100vh",
  },
  leaderboardContent: {
    paddingTop: "15vh",
  },
  leaderboardTitle: {
    color: "#24DCA2",
    fontSize: 32,
    textAlign: "center",
    fontFamily: "sonara-rounded",
  },
  leaderboardTitleContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  leaderboardCategoryRow: {
    flexDirection: "row",
    width: "350px",
    marginTop: "5px",
    marginBottom: "5px",
    padding: "20px",
    borderRadius: 10,
    textAlign: "left",
  },
  leaderboardCategoryName: {
    color: "#a8edd7",
    fontFamily: "jetbrains-regular",
  },
  leaderboardCellRank: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    width: "30px",
    margin: 1,
  },
  leaderboardCellName: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    width: "150px",
    margin: 1,
  },
  leaderboardCellTotal: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    width: "63px",
    margin: 1,
  },
  leaderboardCellLast: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    width: "63px",
    margin: 1,
  },
});
