import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from '@expo/vector-icons';
import Appointment from "../pages/Appointment";
import Settings from "../pages/Settings";
import HomeHospital from "../pages/hospital/HomeHospital";
import Request from "../pages/hospital/Request";
import { MaterialCommunityIcons } from '@expo/vector-icons';


const Tab = createBottomTabNavigator();

export default function TabNavigatorHospital() {
    return (
        <Tab.Navigator initialRouteName="Homepage" screenOptions={{ tabBarInactiveTintColor: "grey", tabBarActiveTintColor: '#AE2111', }}>
            <Tab.Screen name="Homepage" component={HomeHospital} options={{
                headerShown: false, title: 'Homepage',
                tabBarIcon: ({ focused }) => {
                    if (focused) {
                        return <Ionicons name="home-sharp" size={24} color="#AE2111" />
                    } else {
                        return <Ionicons name="home-outline" size={24} color={'#AE2111'} />
                    }
                }
            }} />
            <Tab.Screen name="Appointment" component={Appointment} options={{
                headerShown: false,
                tabBarIcon: ({ focused }) => {
                    if (focused) {
                        return <Ionicons name="water" size={24} color="#AE2111" />
                    } else {
                        return <Ionicons name="water-outline" size={24} color={'#AE2111'} />
                    }
                }
            }} />
            <Tab.Screen name="Request" component={Request} options={{
                headerShown: false,
                tabBarIcon: ({ focused }) => {
                    if (focused) {
                        return <Ionicons name="add-circle" size={24} color="#AE2111" />
                    } else {
                        return <Ionicons name="add-circle-outline" size={24} color={'#AE2111'} />
                    }
                }
            }} />
            <Tab.Screen name="Settings" component={Settings} options={{
                headerShown: false,
                tabBarIcon: ({ focused }) => {
                    if (focused) {
                        return <Ionicons name="settings" size={24} color="#AE2111" />
                    } else {
                        return <Ionicons name="settings-outline" size={24} color={'#AE2111'} />
                    }
                }
            }} />
        </Tab.Navigator>
    );
}