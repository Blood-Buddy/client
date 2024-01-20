import { createStackNavigator } from "@react-navigation/stack";
import AccountInformasi from "../pages/AccountInformasi";
import TabNavigator from "./TabNavigator";

const Stack = createStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator initialRouteName="Profile">
      <Stack.Screen
        name="Profile"
        component={TabNavigator}
        options={{ headerShown: false, title: 'Profile' }}
      />

      <Stack.Screen
        name="Account Information"
        component={AccountInformasi}
        options={{ headerShown: false}}
      />
    </Stack.Navigator>
  );
}
