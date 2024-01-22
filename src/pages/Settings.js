import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import React, { useContext } from "react";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import * as SecureStore from 'expo-secure-store';
import { useNavigation } from "@react-navigation/native";
import { LoginContext } from "../context/LoginContext";


export default function Setting() {
  const navigation = useNavigation();
  const {setIsLoggedIn, isLoggedIn} = useContext(LoginContext);

  const handleLogout = async () => {
    try {
      await SecureStore.deleteItemAsync("accessToken");
      setIsLoggedIn(null)

      // console.log(isLoggedIn, "token");
      // navigation.navigate("Homepage");
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <SafeAreaView className="mx-5 px-5">
      <ScrollView className="bg-[#F2F2F2] h-full">
        <View className="border-b-2 flex-row justify-between items-center border-b-red-700">
          <Text className="font-bold text-2xl mb-2">Setting</Text>
        </View>

        {/* edit profile */}
        <View className="">
          <View style={styles.card} className="flex flex-row">
            <View className="mr-3">
              <TouchableOpacity onPress={() => navigation.navigate("Account Information")}>
                <MaterialCommunityIcons
                  name="account-outline"
                  size={24}
                  color="black"
                />
              </TouchableOpacity>
            </View>
            <View className="">
              <TouchableOpacity onPress={() => navigation.navigate("Account Information")}>
                <Text className="text-lg font-medium"> Edit Profile</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* Sign Out */}
        <TouchableOpacity onPress={handleLogout}>
          <View className="">
            <View style={styles.card} className="flex flex-row">
              <View className="mr-3">
                <AntDesign name="logout" size={23} color="black" />
              </View>
              <View className="">
                <Text className="text-lg font-medium"> Sign Out</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
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
