import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Feather, FontAwesome5 } from "@expo/vector-icons";
import React from "react";
import RequestCard from "../components/RequestCard";
import WideButton from "../components/WideButton";
import { Animated } from "react-native";

const av = new Animated.Value(0);
av.addListener(() => {
  return;
});
export default function Homepage({ navigation }) {
  return (
    <SafeAreaView className="bg-[#F2F2F2]">
      <ScrollView className="px-5">
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
            <Text className="font-bold text-lg">Mukhtar Rafi Fauzi</Text>
            <Text className="text-md text-red-700">3173062302960002</Text>
          </View>

          <View className="w-1/3">
            <View className="flex-1 flex-row items-center">
              <Image
                className="ml-2 mt-2"
                source={require("../../assets/bloodIcon32.png")}
              ></Image>
              <Text className="ml-2 mt-4 text-4xl font-bold">B</Text>
            </View>
          </View>
        </View>

        <View className="flex-1 flex-row h-14 items-center">
          <View className="mt-2 pr-2 w-1/3 border-r-2 border-r-red-700">
            <Text className="font-bold text-sm text-red-700">Total Donor</Text>
            <Text className="text-md">0 time</Text>
          </View>
          <View className="mt-2 px-2 w-1/3 border-r-2 border-r-red-700">
            <Text className="font-bold text-sm text-red-700">Last Donor</Text>
            <Text className="text-md ">24-12-2024</Text>
          </View>

          <View className="mt-2 px-2 w-1/3">
            <Text className="font-bold text-sm text-red-700">Rewards</Text>
            <View className="flex flex-row items-center">
              <FontAwesome5 name="award" size={20} color="#AE2111" />
              <Text className="text-lg ml-1">100</Text>
            </View>
          </View>
        </View>

        <WideButton label="History" />

        <View className="mt-2 border-b-2 flex-row border-b-red-700">
          <Text className="font-bold text-2xl mb-2">Latest requests</Text>
        </View>

        <RequestCard />
        <RequestCard />
        <RequestCard />
        <RequestCard />
        <RequestCard />
      </ScrollView>
    </SafeAreaView>
  );
}
