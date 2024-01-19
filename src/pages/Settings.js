import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";

export default function Setting() {
  return (
    <ScrollView className="bg-[#F2F2F2]">
      <SafeAreaView className="mx-5 px-5">
        <View className="border-b-2 flex-row justify-between items-center border-b-red-700">
          <Text className="font-bold text-2xl mb-2">Setting</Text>
        </View>

        {/* edit profile */}
        <View className="">
          <View style={styles.card} className="flex flex-row">
            <View className="mr-3">
              <TouchableOpacity>
                <MaterialCommunityIcons
                  name="account-outline"
                  size={24}
                  color="black"
                />
              </TouchableOpacity>
            </View>
            <View className="">
              <TouchableOpacity>
                <Text className="text-lg font-medium"> Edit Profile</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* Sign Out */}
        <View className="">
          <View style={styles.card} className="flex flex-row">
            <View className="mr-3">
              <TouchableOpacity>
                <AntDesign name="logout" size={23} color="black" />
              </TouchableOpacity>
            </View>
            <View className="">
              <TouchableOpacity>
                <Text className="text-lg font-medium"> Sign Out</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  borderBottom: {
    borderBottomColor: "red",
    borderBottomWidth: 1,
  },
  card: {
    backgroundColor: "#F2F2F2",
    // backgroundColor: "yellow",
    borderRadius: 3,
    marginTop: 20,
    padding: 12,
    // shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
  },
});
