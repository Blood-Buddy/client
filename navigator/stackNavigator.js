import { createStackNavigator } from "@react-navigation/stack";
import Login from "../screens/login";

const Stack = createStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="login" component={Login} />
    </Stack.Navigator>
  );
}
