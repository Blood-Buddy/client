import { createStackNavigator } from "@react-navigation/stack";
import AccountInformasi from "../pages/AccountInformasi";
import TabNavigator from "./TabNavigator";
import History from "../pages/History";
import BookAppointment from "../pages/BookAppointment";
import DetailRewards from "../pages/DetailRewards";
import { useContext } from "react";
import { LoginContext } from "../context/LoginContext";
import Login from "../pages/login";
import Register from "../pages/register";
import MyVoucher from "../pages/MyVoucher";
import TabNavigatorHospital from "./TabNavigatorHospital";

const Stack = createStackNavigator();

export default function StackNavigator() {
  const { isLoggedIn, role } = useContext(LoginContext);
  return (
    <Stack.Navigator>
      {isLoggedIn ? (
        role === "hospital" ? (
          <Stack.Screen
            name="Homepage Hospital"
            component={TabNavigatorHospital}
            options={{ headerShown: false, title: "Homepage", }}
          />
        ) : (
          <>
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
                headerShown: false,
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
              name="My Voucher"
              component={MyVoucher}
              options={{ headerShown: false }}
            />
          </>
        )
      ) : (
        <>
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Register"
            component={Register}
            options={{ headerShown: false }}
          />
        </>
      )}
    </Stack.Navigator>
  );
}
