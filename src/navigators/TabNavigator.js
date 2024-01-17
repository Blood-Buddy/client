import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Homepage from "../pages/Homepage";
import Schedule from "../pages/Schedule";
import Rewards from "../pages/Rewards";
import Settings from "../pages/Settings";

const Tab = createBottomTabNavigator();

export default function TabNavigator () {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Homepage" component={Homepage} options={{headerShown: false}} />
            <Tab.Screen name="Jadwal" component={Schedule} options={{headerShown: false}} />
            <Tab.Screen name="Rewards" component={Rewards} options={{headerShown: false}} />
            <Tab.Screen name="Pengaturan" component={Settings} options={{headerShown: false}} />
        </Tab.Navigator>
    );
}