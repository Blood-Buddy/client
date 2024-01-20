import { createStackNavigator } from "@react-navigation/stack";
import AccountInformasi from "../pages/AccountInformasi";
import TabNavigator from "./TabNavigator";

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
        options={{ headerStyle: { backgroundColor: "#F2F2F2", }, headerBackTitleVisible: false }}
      />
    </Stack.Navigator>
  );
}
