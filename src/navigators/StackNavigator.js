import { createStackNavigator } from "@react-navigation/stack";
import AccountInformasi from "../pages/AccountInformasi";
import TabNavigator from "./TabNavigator";
import DetailReward from "../pages/Rewards";
import DetailRewards from "../pages/DetailRewards";

const Stack = createStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator initialRouteName="Profile">
      <Stack.Screen
        name="Home"
        component={TabNavigator}
        options={{ headerShown: false, title: 'Home' }}
      />

      <Stack.Screen
        name="Account Information"
        component={AccountInformasi}
        options={{ headerShown: false }}
      />
    <Stack.Screen
        name="Detail Rewards"
        component={DetailRewards}
        options={{ headerShown: false }}
      />

    </Stack.Navigator>
  );
}
