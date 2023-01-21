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
        <View style={styles.stakeDetails}>
          <View style={styles.stakeDetailName}>
            <Text style={styles.stakeDetailText}>Red Bull RB9</Text>
          </View>
          <View style={styles.stakeDetailRate}>
            <Text style={styles.stakeDetailText}>◎10/day</Text>
          </View>
          <View style={styles.stakeDetailEarned}>
            <Text style={styles.stakeDetailText}>◎420</Text>
          </View>
        </View>
        <button style={styles.stakeButton}>Stake</button>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  stakingItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#0a0a0a",
    width: "350px",
    marginTop: "5px",
    marginBottom: "5px",
    padding: "10px",
    borderRadius: 20,
  },
  stakingItemImageContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  stakingItemImage: {
    opacity: 1,
    minWidth: "330px",
    minHeight: "170px",
    borderRadius: 10,
  },

  stakeDetails: {
    flexDirection: "row",
    backgroundColor: "#1f1f1f",
    width: "330px",
    marginTop: "10px",
    padding: "20px",
    borderRadius: 10,
    textAlign: "left",
  },

  //total 310px
  stakeDetailName: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    width: "110px",
  },
  stakeDetailRate: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    width: "90px",
  },
  stakeDetailEarned: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    width: "90px",
  },
  stakeDetailText: { color: "#ff7003", fontFamily: "Inter_400Regular" },
  stakeButton: {
    flexDirection: "row",
    backgroundColor: "#ff7003",
    color: "black",
    width: "330px",
    marginTop: "10px",
    padding: "20px",
    borderWidth: 0,
    borderRadius: 10,
    textAlign: "center",
    fontFamily:"Inter_600SemiBold",
    fontSize:18
  },
});