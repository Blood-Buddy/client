import { useIsFocused } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import * as SecureStore from 'expo-secure-store';
import Axios from "axios";
import dateFormatter from "../../helpers/dateFormatter";

export default function DetailAppointment({ route, navigation }) {
    const apiUrl = process.env.EXPO_PUBLIC_API_URL;
    const { appointment } = route.params;
    // console.log(appointment, "app");

    const isFocused = useIsFocused();
    const [appointments, setAppointments] = useState([]);

    const getAppointment = async () => {
        try {
            const token = await SecureStore.getItemAsync('accessToken');
            const response = await Axios.get(`${apiUrl}appointment/${appointment._id}`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            setAppointments(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    const cancelAppointment = async (id) => {
        console.log(id, "cancel appointment");
        try {
            const token = await SecureStore.getItemAsync('accessToken');
            const response = await Axios.put(`${apiUrl}appointment/status/${id}`, {
                status: "canceled"
            },{
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            console.log(response, "response cancel appointment");
            navigation.navigate('Homepage');
        } catch (error) {
            console.log(error, "error cancel appointment");
        }
    }

    const completeAppointment = async (id) => {
        console.log(id, "accept appointment");
        try {
            const token = await SecureStore.getItemAsync('accessToken');
            const response = await Axios.put(`${apiUrl}appointment/status/${id}`, {
                status: "completed"
            }, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            console.log(response, "response accept appointment");
            navigation.navigate('Homepage');
        } catch (error) {
            console.log(error, "error accept appointment");
        }
    }

    useEffect(() => {
        if (isFocused) {
            getAppointment();
        }
    }, [isFocused])

    return (
        <SafeAreaView>
            <View key={appointments?._id} className="bg-white mt-5 rounded-md mx-3">
                <View className="bg-red-700 rounded-md h-12 justify-center">
                    <Text className="text-white text-lg font-semibold ml-3 ">
                        Donor Detail
                    </Text>
                </View>
                {/* {console.log(item, 'item')} */}

                <View className="flex flex-row">
                    <Text className="mt-2 ml-3 text-lg">Donor name</Text>
                    <Text style={styles.textAddress}>
                        : {appointments?.name}
                    </Text>
                </View>
                <View className="flex flex-row">
                    <Text className="mt-2 ml-3 text-lg">NIK</Text>
                    <Text style={styles.textPhone}>: {appointments?.nik}</Text>
                </View>
                <View className="flex flex-row">
                    <Text className="mt-2 ml-3 text-lg">Address</Text>
                    <Text style={styles.textPhone}>: {appointments?.address}</Text>
                </View>
                <View className="flex flex-row">
                    <Text className="mt-2 ml-3 text-lg">Email</Text>
                    <Text style={styles.textPhone}>: {appointments?.email}</Text>
                </View>
                <View className="flex flex-row">
                    <Text className="mt-2 ml-3 text-lg">Blood type</Text>
                    <Text style={styles.textPhone}>: {appointments?.bloodType}</Text>
                </View>
                <View className="flex flex-row">
                    <Text className="mt-2 ml-3 text-lg">Phone</Text>
                    <Text style={styles.textPhone}>: {appointments?.phoneNumber}</Text>
                </View>

                <View className='my-2'>
                    <View className="flex-row items-center">
                        <View className="pr-2 w-1/3 border-r-2 h-14 border-r-red-700 items-center justify-center">
                            <Text className="font-bold text-sm text-red-700">Date</Text>
                            <Text className="text-xs text-center">{appointments?.date?.slice(0, 10)}</Text>
                        </View>
                        <View className="px-2 w-1/3 border-r-2 border-r-red-700 h-14 items-center justify-center">
                            <Text className="font-bold text-sm text-red-700">Session</Text>
                            <Text className="text-md">
                                {appointments?.session === 1 ? "06.00 - 11.30" : appointments?.session === 2 ? "13.30 - 18.00" : ""}
                            </Text>
                        </View>

                        <View className="px-2 w-1/3 items-center">
                            <Text className="font-bold text-sm text-red-700 ">Status</Text>
                            <Text className={`text-md ${appointments?.status === 'completed' ? 'text-green-500' : appointments?.status === 'canceled' ? 'text-red-700' : 'text-black/50'}`}>
                                {appointments?.status?.charAt(0).toUpperCase() + appointments?.status?.slice(1)}
                            </Text>

                        </View>

                    </View>
                    <View className="mt-2 flex flex-row self-end">
                        <View className='w-24'>
                            <TouchableOpacity onPress={() => cancelAppointment(appointments?._id)} className="mt-2 bg-red-700 p-2 items-center justify-center rounded-lg">
                                <Text className="text-[#f2f2f2] font-bold text-md">Cancel</Text>
                            </TouchableOpacity>
                        </View>

                        <View className='w-24 mx-4'>
                            <TouchableOpacity onPress={() => {
                                completeAppointment(appointments?._id)
                            }} className="mt-2 bg-green-700 p-2 items-center justify-center rounded-lg">
                                <Text className="text-[#f2f2f2] font-bold text-md">Complete</Text>
                            </TouchableOpacity>
                        </View>



                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    borderBottom: {
        borderBottomColor: "red",
        borderBottomWidth: 1,
    },
    imgVoucher: {
        marginLeft: -50,
        width: 90,
        height: 90,
    },
    pointsContainer: {
        flexDirection: "row",
        alignItems: "center",
    },
    textAddress: {
        marginTop: 12,
        marginLeft: 3,
        fontSize: 17,
        justifyContent: "center",
        width: 300,
    },
    textPhone: {
        marginTop: 12,
        marginLeft: 16,
        fontSize: 17,
        justifyContent: "center",
        width: 300,
    },
    line: {
        height: 47,
        borderColor: "black",
        borderWidth: 1.5,
        marginLeft: 8,
    },
});