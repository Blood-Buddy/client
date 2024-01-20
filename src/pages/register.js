import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";

export default function Register() {
  return (
    <View style={styles.container}>
      <SafeAreaView className="mx-5 pl-5 pr-5  ">
        <View className="h-48 w-96">
          <Text className="text-3xl ml-4 font-bold text-red-700 ">
            Create Account
          </Text>

          <View className="mt-5">
            <Text style={styles.fontSize}>Fullname </Text>

            <TextInput
              placeholder=" input your fullname"
              secureTextEntry
              className="mt-1 mx-4  rounded-md border-[#e0e0e0] bg-white py-3 px-3 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </View>

          <View className="mt-3">
            <Text style={styles.fontSize}>Email </Text>

            <TextInput
              placeholder="input your email"
              secureTextEntry
              className="mt-1 mx-4  rounded-md border-[#e0e0e0] bg-white py-3 px-3 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </View>

          <View className="mt-5">
            <Text style={styles.fontSize}>Password </Text>

            <TextInput
              placeholder=" input your password"
              secureTextEntry
              className="mt-1 mx-4  rounded-md border-[#e0e0e0] bg-white py-3 px-3 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </View>

          <View className="mt-4">
            <TouchableOpacity className="hover:shadow-form rounded-md bg-red-700 py-3 px-8 mx-4 outline-none flex items-center justify-center">
              <Text className="text-lg font-bold text-white">Sign Up</Text>
            </TouchableOpacity>
          </View>

          <View className="mt-2" style={styles.textOption}>
            <Text className="text-s ml-4 text-gray-500 ">Already have an account? Sign In</Text>
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
    paddingTop: 300,

  },
  textOption: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  fontSize: {
    fontSize: 16,
    marginLeft: 20
  }
});
