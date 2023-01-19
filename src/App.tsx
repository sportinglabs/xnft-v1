import { registerRootComponent } from "expo";
import { RecoilRoot } from "recoil";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useFonts, Inter_900Black } from "@expo-google-fonts/dev";

import { HomeScreen } from "./screens/HomeScreen";
import { StakingScreen } from "./screens/StakingScreen";
import { LeaderboardScreen } from "./screens/LeaderboardScreen";

const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: "#ff7003",
        tabBarStyle: {
          borderTopWidth: 0,
          backgroundColor: "#000000",
        },
        tabBarItemStyle: {
          backgroundColor: "#0a0a0a",
          margin: 5,
          borderRadius: 5,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Stake"
        component={StakingScreen}
        options={{
          headerShown: false,
          tabBarLabel: "Stake",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="view-stream"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
      
        name="Leaderboard"
        component={LeaderboardScreen}
        options={{
          headerShown: false,
          tabBarLabel: "Leaderboard",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="medal" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function App() {
  let [fontsLoaded] = useFonts({
    Inter_900Black,
  });

  return (
    <RecoilRoot>
      <NavigationContainer>
        <TabNavigator />
      </NavigationContainer>
    </RecoilRoot>
  );
}

export default registerRootComponent(App);
