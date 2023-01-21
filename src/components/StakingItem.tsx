import { Text, Image, View, StyleSheet } from "react-native";

export function StakingItem(props: {
  name: string;
  stakedTime: string;
  earnedAmount: string;
  imageFile: string;
}) {
  return (
    <View style={styles.stakingItem}>
      <View>
        <View style={styles.stakingItemImageContainer}>
          <Image
            source={require("../media/car.png")}
            style={styles.stakingItemImage}
          />
        </View>
        <View></View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  stakingItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ff7003",
    width: "350px",
    margin: "5px",
    padding: "2px",
    borderRadius: 0,
  },
  stakingItemImageContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  stakingItemImage: {
    opacity: 1,
    minWidth: "346px",
    minHeight: "170px",
    borderRadius: 0,
  },
});
