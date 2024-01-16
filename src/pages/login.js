import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";

export default function Login() {
  return (
    <View style={styles.container}>
      <SafeAreaView className="mx-5 px-5 ">
        <View className="items-center">
          <Image
            source={require("../../assets/logo.png")}
            className="object-scale-down h-48 w-96"
          />
        </View>

        <View className="m-4 mt-10">
          <Text className="text-3xl font-semibold text-red-700 ">Sign In </Text>
          <View className="mt-5">
            <Text className="text-lg">Email </Text>

            <TextInput
              placeholder="input your email"
              secureTextEntry
              className="mt-1 w-full rounded-md border-[#e0e0e0] bg-white py-3 px-3 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </View>
          <View className="mt-5">
            <Text className="text-lg">Password </Text>

            <TextInput
              placeholder=" input your password"
              secureTextEntry
              className="mt-1 w-full rounded-md border-[#e0e0e0] bg-white py-3 px-3 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </View>

          <View className="mt-5">
            <TouchableOpacity className="hover:shadow-form w-full rounded-md bg-red-700 py-3 px-8  outline-none flex items-center justify-center">
              <Text className="text-m font-bold text-white">Sign In</Text>
            </TouchableOpacity>
          </View>

          <View className="mt-2" style={styles.textOption}>
            <Text className="text-s text-gray-500 ">Forgot Password? </Text>
            <Text className="text-s text-gray-500 ">Sign Up </Text>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f2f2",
    alignItems: "center",
    justifyContent: "center",
    marginTop: -60,
  },
  textOption: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10
  },
});
