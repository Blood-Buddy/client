import { Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";

export default function Homepage() {
    return (
        <ScrollView className="bg-[#F2F2F2]">
            <SafeAreaView className="mx-5 px-5">

                <View className="border-b-2 border-b-red-700">
                    <Text className="font-bold text-2xl border border-b-red-700 mb-2">Profil</Text>
                </View>

                <View className="flex-1 flex-row">
                    <View className="mt-2 text-gray-500 w-2/3 border-r-2 border-r-red-700">
                        <Text className="font-bold text-lg">Mukhtar Rafi Fauzi</Text>
                        <Text className="text-md text-red-700">3173062302960002</Text>
                    </View>
                    <View className="text-gray-500 w-1/3"></View>

                </View>

            </SafeAreaView>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    borderBottom: {
        borderBottomColor: "red",
        borderBottomWidth: 1,
    }
});
