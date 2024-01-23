import { Feather } from "@expo/vector-icons";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { Animated } from "react-native";
import Axios from "axios";
import { useEffect, useState } from "react";
import * as SecureStore from "expo-secure-store";

export default function AccountInformasi({ navigation }) {
  const av = new Animated.Value(0);
  av.addListener(() => {
    return;
  });

  const [populateUser, setPopulateUser] = useState([])
  const [editUser, setEditUser] = useState({
    name: "",
    nik: "",
    bloodType: "",
    email: "",
    phone: "",
    address: "",
  });

  const apiUrl = process.env.EXPO_PUBLIC_API_URL;

  const putUser = async () => {
    let token = await SecureStore.getItemAsync("accessToken");
    try {
      const response = await Axios.put(`${apiUrl}user`, editUser, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      console.log(response.data, "=== account informasi putuser");
      navigation.navigate("Homepage");
    } catch (error) {
      console.log(error, "account Informasi");
    }
  };

  const loadUser = async () => {
    try {
      console.log("masuk halaman account informasi");

      let token = await SecureStore.getItemAsync("accessToken");
      const response = await Axios.get(`${apiUrl}user`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      console.log(response.data, "load user di account informasi");

      setEditUser(response.data);
    } catch (error) {
      console.log(error, ">> account Informasi");
    }
  };

  useEffect(() => {
    loadUser();
  }, []);

  // console.log(editUser[0]?.name, 'populate');

  return (
    <SafeAreaView className="mx-5 px-5">
      <ScrollView className="bg-[#F2F2F2]">
        <View className="mt-5 border-b-2 border-b-red-700">
          <Text className="text-red-700 font-bold text-3xl">General Info</Text>
        </View>

        <View className="mt-5">
          <Text className="text-xl font-medium">Fullname </Text>

          <TextInput
            placeholder=" input your fullname"
            value={editUser[0]?.name}
            onChangeText={(text) => setEditUser({ ...editUser, name: text })}
            className="mt-1 rounded-md border-[#e0e0e0] bg-white py-3 px-3 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
          />
        </View>

        <View className="mt-3 ">
          <Text className="text-xl font-medium">Email </Text>

          <TextInput
            placeholder="input your email"
            value={editUser[0]?.email}
            onChangeText={(text) => setEditUser({ ...editUser, email: text })}
            className="mt-1 rounded-md border-[#e0e0e0] bg-white py-3 px-3 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
          />
        </View>

        <View className="mt-5">
          <Text className="text-xl font-medium">Address </Text>

          <TextInput
            placeholder=" input your address"
            value={editUser[0]?.address}
            onChangeText={(text) => setEditUser({ ...editUser, address: text })}
            className="mt-1 rounded-md border-[#e0e0e0] bg-white py-3 px-3 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
          />
        </View>

        <View className="mt-3 ">
          <Text className="text-xl font-medium">No. Registrasi PMI</Text>

          <TextInput
            placeholder="input your No. Registrasi PMI"
            value={editUser[0]?.nik}
            onChangeText={(text) => setEditUser({ ...editUser, nik: text })}
            className="mt-1 rounded-md border-[#e0e0e0] bg-white py-3 px-3 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
          />
        </View>

        <View className="mt-3 ">
          <Text className="text-xl font-medium">Blood Type</Text>

          <TextInput
            placeholder="input your blood type"
            value={editUser[0]?.bloodType}
            onChangeText={(text) =>
              setEditUser({ ...editUser, bloodType: text })
            }
            className="mt-1 rounded-md border-[#e0e0e0] bg-white py-3 px-3 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
          />
        </View>

        <View className="mt-3 mb-5 ">
          <Text className="text-xl font-medium">Phone</Text>

          <TextInput
            placeholder="input your phome"
            value={editUser[0]?.phone}
            onChangeText={(text) => setEditUser({ ...editUser, phone: text })}
            className="mt-1 rounded-md border-[#e0e0e0] bg-white py-3 px-3 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
          />
        </View>

        <TouchableOpacity
          className="mt-2 bg-red-700 p-3 items-center justify-center rounded-lg"
          onPress={putUser}
        >
          <Text className="text-[#f2f2f2] font-bold text-xl">Save</Text>
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
  // fontSize: {
  //   fontSize: 16,
  //   marginLeft:20
  // }
});
