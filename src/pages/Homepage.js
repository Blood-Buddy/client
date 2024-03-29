import React, { useEffect, useState } from "react";
import { SafeAreaView, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { Feather, FontAwesome5, Ionicons } from "@expo/vector-icons";
import Axios from "axios";
import * as SecureStore from "expo-secure-store";
import { useIsFocused } from "@react-navigation/native";
import RequestCard from "../components/RequestCard";
import dateFormatter from "../helpers/dateFormatter";
const apiUrl = process.env.EXPO_PUBLIC_API_URL;

export default function Homepage({ navigation }) {
    const isFocused = useIsFocused();
    const [user, setUser] = useState([]);
    const [requests, setRequests] = useState([]);
    const [history, setHistory] = useState([]);

    const fetchUserAndRequests = async () => {
        try {
            const token = await SecureStore.getItemAsync('accessToken');
            // console.log('Token fetched:', token);

            const [userData, requestsData, historyData] = await Promise.all([
                Axios.get(`${apiUrl}user`, { headers: { 'Authorization': `Bearer ${token}` } }),
                Axios.get(`${apiUrl}request`, { headers: { 'Authorization': `Bearer ${token}` } }),
                Axios.get(`${apiUrl}appointment/history`, { headers: { 'Authorization': `Bearer ${token}` } }),
            ]);
            // console.log('User data fetched:', userData.data);
            // console.log('Requests data fetched:', requestsData.data);
            // console.log('History data fetched:', historyData.data);

            setHistory(historyData.data)
            setUser(userData.data );
            setRequests(requestsData.data);
        } catch (error) {
            console.log('Error fetching user and requests:', error);
        }
    };

    useEffect(() => {
        if (isFocused) {
            fetchUserAndRequests();
        }
    }, [isFocused]);

    // console.log(user, "<<< user");
    return (
        <SafeAreaView className="bg-[#F2F2F2]">
            <ScrollView className="px-5 h-full">
                    <View key={user?._id}>
                        <View className="border-b-2 flex-row justify-between items-center border-b-red-700">
                            <Text className="font-bold text-2xl mb-2">Profile</Text>
                            <TouchableOpacity
                                onPress={() => {
                                    navigation.removeListener;
                                    navigation.navigate("Account Information");
                                }}
                            >
                                <Feather name="edit-3" size={24} className="text-red-700" />
                            </TouchableOpacity>
                        </View>

                        <View className="flex-1 flex-row">
                            <View className="mt-2 w-2/3 border-r-2 border-r-red-700">
                                <Text className="font-bold text-lg">{user?.name}</Text>
                                <Text className="text-md text-red-700">{user?.nik}</Text>
                            </View>

                            <View className="w-1/3">
                                <View className="flex-1 flex-row items-center">
                                    <Ionicons name="water" size={32} color="#AE2111" />
                                    <Text className="ml-2 text-4xl font-bold">
                                        {user?.bloodType}
                                    </Text>
                                </View>
                            </View>
                        </View>

                        <View className="flex-1 flex-row h-14 items-center">
                            <View className="mt-2 pr-2 w-1/3 border-r-2 border-r-red-700">
                                <Text className="font-bold text-sm text-red-700">
                                    Total Donor
                                </Text>
                                <Text className="text-md">
                                    {history[0]?.status === 'completed' ?
                                        history[0]?.length > 1 ?
                                            `${history[0]?.length} times` :
                                            '1 time'
                                        : '-'
                                    }
                                </Text>
                            </View>

                            <View className="mt-2 px-2 w-1/3 border-r-2 border-r-red-700">
                                <Text className="font-bold text-sm text-red-700">
                                    Last Donor
                                </Text>
                                <Text className="text-xs">
                                    {history[0]?.status === 'completed' ?
                                        dateFormatter(history[0]?.updatedAt.slice(0, 10)) :
                                        '-'
                                    }
                                </Text>
                            </View>

                            <View className="mt-2 px-2 w-1/3">
                                <Text className="font-bold text-sm text-red-700">Rewards</Text>
                                <View className="flex flex-row items-center">
                                    <FontAwesome5 name="award" size={20} color="#AE2111" />
                                    <Text className="text-lg ml-1">{user?.points}</Text>
                                </View>
                            </View>
                        </View>
                    </View>

                <TouchableOpacity
                    className="mt-2 bg-red-700 p-3 items-center justify-center rounded-lg"
                    onPress={() => {
                        navigation.removeListener;
                        navigation.navigate("History");
                    }}
                >
                    <Text className="text-[#f2f2f2] font-bold text-xl">History</Text>
                </TouchableOpacity>

                <View className="mt-2 border-b-2 flex-row border-b-red-700">
                    <Text className="font-bold text-2xl mb-2">Latest requests</Text>
                </View>

                <RequestCard data={requests} navigation={navigation} />
            </ScrollView>
        </SafeAreaView>
    );
}