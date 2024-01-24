import Axios from "axios";
import { useEffect, useState } from "react";
import { Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from "react-native";
import * as SecureStore from 'expo-secure-store';
import dateFormatter from "../helpers/dateFormatter";
import { useIsFocused } from "@react-navigation/core";
export default function Appointment() {
    const apiUrl = process.env.EXPO_PUBLIC_API_URL;
    const isFocused = useIsFocused();
    const [appointments, setAppointments] = useState([]);


    const fetchAppointments = async () => {
        try {
            const token = await SecureStore.getItemAsync('accessToken');
            const response = await Axios.get(`${apiUrl}appointment`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            setAppointments(response.data);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        if (isFocused) {
            fetchAppointments();
        }
    }, [isFocused]);

    if (appointments.length !== 0) {
        return (
            <SafeAreaView>
                <View className='border-b-2 border-red-700 mx-3'>
                    <Text className='text-2xl font-bold'>Your Appointment</Text>
                </View>
                <ScrollView className='h-full mt-1'>

                    {/* Appointment Card */}
                    <View className='mx-3 rounded-lg'>
                        {appointments.map((item, index) => (
                            <View key={item._id}>
                                <View className="bg-red-700 mt-3 p-3 rounded-t-lg">
                                    <Text className="text-white text-lg font-bold">Hospital Destination</Text>
                                </View>
                                <View className='p-3 bg-white rounded-b-lg'>
                                    <Text className="text-red-700 text-2xl font-bold">{item?.hospital[0]?.name}</Text>
                                    <Text className='mt-2'>Address: {item?.hospital[0]?.address[0]}</Text>
                                    <Text className='mt-2'>{`Phone Number: (021) 1234567 `}</Text>
                                    <View>

                                        <View className="flex-row items-center">
                                            <View className="mt-2 pr-2 w-1/3 border-r-2 h-14 border-r-red-700 items-center justify-center">
                                                <Text className="font-bold text-sm text-red-700">Date</Text>
                                                <Text className="text-md text-center">{item?.date}</Text>
                                            </View>
                                            <View className="mt-2 px-2 w-1/3 border-r-2 border-r-red-700 h-14 items-center justify-center">
                                                <Text className="font-bold text-sm text-red-700">Session</Text>
                                                <Text className="text-md">
                                                    {item?.session === 1 ? "06.00 - 11.30" : item?.session === 2 ? "13.30 - 18.00" : ""}
                                                </Text>
                                            </View>

                                            <View className="px-2 w-1/3 items-center">
                                                <Text className="font-bold text-sm text-red-700 ">Status</Text>
                                                <Text className="text-md text-black/50">{item?.status.charAt(0).toUpperCase() + item?.status.slice(1)}</Text>
                                            </View>
                                        </View>
                                    </View>
                                    <View className="mt-2 flex flex-row self-end">
                                        <View className='w-24'>
                                            <TouchableOpacity className="mt-2 bg-red-700 p-2 items-center justify-center rounded-lg">
                                                <Text className="text-[#f2f2f2] font-bold text-md">Cancel</Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        ))}
                    </View>
                </ScrollView>
            </SafeAreaView>
        );
    } else {
        return (
            <SafeAreaView>
                <View className='border-b-2 border-red-700 mx-3'>
                    <Text className='text-2xl font-bold'>Your Appointment</Text>
                </View>
                <View className='items-center justify-center mt-24'>
                    <Image source={require('../../assets/bloodbuddy.png')} className='object-cover h-96 w-96'></Image>
                    <View className='-mt-32 items-center justify-center'>
                        <Text className='text-center text-4xl font-bold text-red-700'>Oops!</Text>
                        <Text className='text-center text-lg'>You currently do not have any appointment.</Text>
                    </View>
                </View>
            </SafeAreaView>
        );
    }
}