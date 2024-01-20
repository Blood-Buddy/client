import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from '@expo/vector-icons';
import Homepage from "../pages/Homepage";
import Schedule from "../pages/Schedule";
import Rewards from "../pages/Rewards";
import Settings from "../pages/Settings";

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
    return (
        <Tab.Navigator initialRouteName="Homepage" screenOptions={{ tabBarInactiveTintColor: "grey", tabBarActiveTintColor: '#AE2111', }}>
            <Tab.Screen name="Homepage" component={Homepage} options={{
                headerShown: false, title: 'Homepage',
                tabBarIcon: ({ focused }) => {
                    if(focused) {
                    return <Ionicons name="home-sharp" size={24} color="#AE2111" />
                    } else {
                        return <Ionicons name="home-outline" size={24} color={'#AE2111'} />
                    }
                }
            }} />
            <Tab.Screen name="Appointment" component={Schedule} options={{
                headerShown: false,
                tabBarIcon: ({ focused }) => {
                    if(focused) {
                    return <Ionicons name="water" size={24} color="#AE2111" />
                    } else {
                        return <Ionicons name="water-outline" size={24} color={'#AE2111'} />
                    }
                }
            }} />
            <Tab.Screen name="Rewards" component={Rewards} options={{
                headerShown: false,
                tabBarIcon: ({ focused }) => {
                    if(focused) {
                    return <Ionicons name="gift" size={24} color="#AE2111" />
                    } else {
                        return <Ionicons name="gift-outline" size={24} color={'#AE2111'} />
                    }
                }
            }} />
            <Tab.Screen name="Settings" component={Settings} options={{
                headerShown: false,
                tabBarIcon: ({ focused }) => {
                    if(focused) {
                    return <Ionicons name="settings" size={24} color="#AE2111" />
                    } else {
                        return <Ionicons name="settings-outline" size={24} color={'#AE2111'} />
                    }
                }
            }} />
        </Tab.Navigator>
    );
}