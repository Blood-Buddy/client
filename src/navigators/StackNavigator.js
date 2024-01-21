import { createStackNavigator } from "@react-navigation/stack";
import AccountInformasi from "../pages/AccountInformasi";
import TabNavigator from "./TabNavigator";
import History from "../pages/History";
import BookAppointment from "../pages/BookAppointment";
import DetailRewards from "../pages/DetailRewards";
import VoucherConfirmation from "../modals/VoucherConfirmation";

const Stack = createStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator initialRouteName="Profile">
      <Stack.Screen
        name="Home"
        component={TabNavigator}
        options={{ headerShown: false, title: "Home" }}
      />

      <Stack.Screen
        name="Account Information"
        component={AccountInformasi}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Book Appointment"
        component={BookAppointment}
        options={{
          headerStyle: { backgroundColor: "#F2F2F2" },
          headerBackTitleVisible: false,
        }}
      />
      <Stack.Screen
        name="Detail Rewards"
        component={DetailRewards}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="History"
        component={History}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Voucher Confirmation"
        component={VoucherConfirmation}
        options={{ presentation: "modal", headerShown: false }}
      />
    </Stack.Navigator>
  );
}
