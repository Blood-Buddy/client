import {
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Feather, FontAwesome5, Ionicons } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import RequestCard from "../components/RequestCard";
import WideButton from "../components/WideButton";
import { Animated } from "react-native";
import Axios from "axios";
import * as SecureStore from 'expo-secure-store';

const av = new Animated.Value(0);
av.addListener(() => {
  return;
});

export default function Homepage({ navigation }) {
  // console.log(token);
  const apiUrl = process.env.EXPO_PUBLIC_API_URL;
  const [user, setUser] = useState([]);
  const fetchUser = async () => {
    let token = await SecureStore.getItemAsync('accessToken')
    // console.log(token, "tokennnnn");
    try {
      const response = await Axios.get(`${apiUrl}user`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      // console.log(response.data, "data user");
      setUser(response.data);
    } catch (error) {
      console.log(error, "homepage");
      // throw error
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <SafeAreaView className="bg-[#F2F2F2]">
      <ScrollView className="px-5 h-full">
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

        {user.map((item) => (
          <View key={item.id}>
            <View className="flex-1 flex-row">
              <View className="mt-2 w-2/3 border-r-2 border-r-red-700">
                <Text className="font-bold text-lg">{item.name}</Text>
                <Text className="text-md text-red-700">{item.nik}</Text>
              </View>

              <View className="w-1/3">
                <View className="flex-1 flex-row items-center">
                  <Ionicons name="water" size={32} color="#AE2111" />
                  <Text className="ml-2 text-4xl font-bold">
                    {item.bloodType}
                  </Text>
                </View>
              </View>
            </View>

            <View className="flex-1 flex-row h-14 items-center">
              <View className="mt-2 pr-2 w-1/3 border-r-2 border-r-red-700">
                <Text className="font-bold text-sm text-red-700">
                  Total Donor
                </Text>
                <Text className="text-md">0 time</Text>
              </View>
              <View className="mt-2 px-2 w-1/3 border-r-2 border-r-red-700">
                <Text className="font-bold text-sm text-red-700">
                  Last Donor
                </Text>
                <Text className="text-md ">24-12-2024</Text>
              </View>

              <View className="mt-2 px-2 w-1/3">
                <Text className="font-bold text-sm text-red-700">Rewards</Text>
                <View className="flex flex-row items-center">
                  <FontAwesome5 name="award" size={20} color="#AE2111" />
                  <Text className="text-lg ml-1">{item.points}</Text>
                </View>
              </View>
            </View>
          </View>
        ))}

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

        <RequestCard navigation={navigation} />
      </ScrollView>
    </SafeAreaView>
  );
}
