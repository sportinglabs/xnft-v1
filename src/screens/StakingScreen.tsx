import { Text, View, StyleSheet, ScrollView } from "react-native";
import { StakingItem } from "../components/StakingItem";
import { usePools } from "../hooks/usePools";

export function StakingScreen() {
  const { pools, loading, error } = usePools();

  console.log(pools);

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
            <StakingItem
              name={"Red Bull RB9"}
              rate={10}
              earnedAmount={430}
              imageFile={"../media/car.png"}
            />
            <StakingItem
              name={"Red Bull RB9"}
              rate={10}
              earnedAmount={430}
              imageFile={"../media/car.png"}
            />
            <StakingItem
              name={"Red Bull RB9"}
              rate={10}
              earnedAmount={430}
              imageFile={"../media/car.png"}
            />
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
    fontFamily: "Kanit_600SemiBold",
    
  },
  stakingTitleContainer: {
    width: "100%",
  },
});
