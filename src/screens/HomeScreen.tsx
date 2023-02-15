import { Text, View, StyleSheet, Image } from "react-native";

export function HomeScreen() {
  return (
    <View style={styles.home}>
      <View>
        <View>
          <Image
            source={require("../media/logo.png")}
            style={styles.homeLogoImage}
          />
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  home: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "",
    padding: "0",
    backgroundColor: "black",
    minHeight: "100vh",
  },
  homeLogoImage: { opacity: 1, width: 200, height: 200 },
});
