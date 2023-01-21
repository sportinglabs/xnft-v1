import { Text, View, StyleSheet, ScrollView } from "react-native";
import { StakingItem } from "../components/StakingItem";

export function StakingScreen() {
  const items = [
    { rank: "1", name: "rustintern", total: "1200", last: "10" },
    { rank: "2", name: "Lazycipher", total: "1100", last: "10" },
    { rank: "3", name: "dinesh", total: "1000", last: "10" },
    { rank: "4", name: "M2DT", total: "900", last: "10" },
    { rank: "5", name: "Kulture", total: "800", last: "10" },
    { rank: "6", name: "Brandon", total: "700", last: "10" },
    { rank: "7", name: "John", total: "600", last: "10" },
    { rank: "1", name: "rustintern", total: "1200", last: "10" },
    { rank: "2", name: "Lazycipher", total: "1100", last: "10" },
    { rank: "3", name: "dinesh", total: "1000", last: "10" },
    { rank: "4", name: "M2DT", total: "900", last: "10" },
    { rank: "5", name: "Kulture", total: "800", last: "10" },
    { rank: "6", name: "Brandon", total: "700", last: "10" },
    { rank: "7", name: "John", total: "600", last: "10" },
    { rank: "1", name: "rustintern", total: "1200", last: "10" },
    { rank: "2", name: "Lazycipher", total: "1100", last: "10" },
    { rank: "3", name: "dinesh", total: "1000", last: "10" },
    { rank: "4", name: "M2DT", total: "900", last: "10" },
    { rank: "5", name: "Kulture", total: "800", last: "10" },
    { rank: "6", name: "Brandon", total: "700", last: "10" },
    { rank: "7", name: "John", total: "600", last: "10" },
    { rank: "1", name: "rustintern", total: "1200", last: "10" },
    { rank: "2", name: "Lazycipher", total: "1100", last: "10" },
    { rank: "3", name: "dinesh", total: "1000", last: "10" },
    { rank: "4", name: "M2DT", total: "900", last: "10" },
    { rank: "5", name: "Kulture", total: "800", last: "10" },
    { rank: "6", name: "Brandon", total: "700", last: "10" },
    { rank: "7", name: "John", total: "600", last: "10" },
  ];
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
    >
      <View style={styles.staking}>
        <View style={styles.stakingContent}>
          <View>
            <View style={styles.stakingTitleContainer}>
              <Text style={styles.stakingTitle}>Staking</Text>
            </View>
            {items.map((item, index) => (
              <StakingItem
                name={item.name}
                stakedTime={"2h 49min"}
                earnedAmount={"210 SOL"}
                imageFile={"../media/car.png"}
              />
            ))}
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  staking: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "center",
    margin: "",
    padding: "0",
    backgroundColor: "black",
    minHeight: "100vh",
  },
  stakingContent: {
    paddingTop: "15vh",
  },
  stakingTitle: {
    color: "#FFFFFF",
    fontSize: 32,
    fontWeight: "800",
    textAlign: "center",
    fontFamily: "Inter_900Black",
  },
  stakingTitleContainer: {
    width: "100%",
  },
});
