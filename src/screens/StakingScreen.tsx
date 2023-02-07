import { Text, View, StyleSheet, ScrollView } from "react-native";
import { usePublicKey } from "react-xnft";
import { Connection, clusterApiUrl, PublicKey } from "@solana/web3.js";

import { StakingItem } from "../components/StakingItem";
import { usePools } from "../hooks/usePools";
import { stake } from "../sdk";

export function StakingScreen() {
  const { pools, loading, error } = usePools();

  const stakeFunction = async () => {
    try {
      const connection = new Connection(clusterApiUrl("devnet")); //create a connection
      const wallet = usePublicKey(); //initialize wallet
      console.log(wallet.toBase58()); //test wallet

      const response = await stake(
        connection,
        wallet,
        new PublicKey("AuSEFWEjek6qveQotqHRZxFhGRdEb1Wwub4gSCqaqLpT")
      ); //execute staking function

      console.log(response); //print out
    } catch (e) {
      console.error(e);
    }
  };
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
              stakeFunction={stakeFunction}
            />
            <StakingItem
              name={"Red Bull RB9"}
              rate={10}
              earnedAmount={430}
              stakeFunction={stakeFunction}
            />
            <StakingItem
              name={"Red Bull RB9"}
              rate={10}
              earnedAmount={430}
              stakeFunction={stakeFunction}
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
