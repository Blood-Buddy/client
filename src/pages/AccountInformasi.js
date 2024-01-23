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
import { SelectList } from "react-native-dropdown-select-list";

export default function AccountInformasi({ navigation }) {
  const av = new Animated.Value(0);
  av.addListener(() => {
    return;
  });

  const [bloodType, setBloodType] = useState("");
  const [province, setProvince] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [nik, setNik] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const provinceData = [
    {
      key: "Aceh",
      value: "Aceh"
    },
    {
      key: "Sumatera Utara",
      value: "Sumatera Utara"
    },
    {
      key: "Sumatera Barat",
      value: "Sumatera Barat"
    },
    {
      key: "Riau",
      value: "Riau"
    },
    {
      key: "Jambi",
      value: "Jambi"
    },
    {
      key: "Sumatera Selatan",
      value: "Sumatera Selatan"
    },
    {
      key: "Bengkulu",
      value: "Bengkulu"
    },
    {
      key: "Lampung",
      value: "Lampung"
    },
    {
      key: "Kepulauan Bangka Belitung",
      value: "Kepulauan Bangka Belitung"
    },
    {
      key: "Kepulauan Riau",
      value: "Kepulauan Riau"
    },
    {
      key: "DKI Jakarta",
      value: "DKI Jakarta"
    },
    {
      key: "Jawa Barat",
      value: "Jawa Barat"
    },
    {
      key: "Jawa Tengah",
      value: "Jawa Tengah"
    },
    {
      key: "DI Yogyakarta",
      value: "DI Yogyakarta"
    },
    {
      key: "Jawa Timur",
      value: "Jawa Timur"
    },
    {
      key: "Banten",
      value: "Banten"
    },
    {
      key: "Bali",
      value: "Bali"
    },
    {
      key: "Nusa Tenggara Barat",
      value: "Nusa Tenggara Barat"
    },
    {
      key: "Nusa Tenggara Timur",
      value: "Nusa Tenggara Timur"
    },
    {
      key: "Kalimantan Barat",
      value: "Kalimantan Barat"
    },
    {
      key: "Kalimantan Tengah",
      value: "Kalimantan Tengah"
    },
    {
      key: "Kalimantan Selatan",
      value: "Kalimantan Selatan"
    },
    {
      key: "Kalimantan Timur",
      value: "Kalimantan Timur"
    },
    {
      key: "Kalimantan Utara",
      value: "Kalimantan Utara"
    },
    {
      key: "Sulawesi Utara",
      value: "Sulawesi Utara"
    },
    {
      key: "Sulawesi Tengah",
      value: "Sulawesi Tengah"
    },
    {
      key: "Sulawesi Selatan",
      value: "Sulawesi Selatan"
    },
    {
      key: "Sulawesi Tenggara",
      value: "Sulawesi Tenggara"
    },
    {
      key: "Gorontalo",
      value: "Gorontalo"
    },
    {
      key: "Sulawesi Barat",
      value: "Sulawesi Barat"
    },
    {
      key: "Maluku",
      value: "Maluku"
    },
    {
      key: "Maluku Utara",
      value: "Maluku Utara"
    },
    {
      key: "Papua Barat",
      value: "Papua Barat"
    },
    {
      key: "Papua",
      value: "Papua"
    }
  ]

  const bloodTypeData = [
    { key: 1, value: "A" },
    { key: 2, value: "B" },
    { key: 3, value: "AB" },
    { key: 4, value: "O" },
  ]

  const apiUrl = process.env.EXPO_PUBLIC_API_URL;

  const putUser = async () => {
    let token = await SecureStore.getItemAsync("accessToken");
    try {
      const response = await Axios.put(`${apiUrl}user`, {
        email,
        name,
        nik,
        phone,
        address,
        province,
        bloodType
      }, {
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
      response.data.map((item) => {
        setEmail(item.email);
        setName(item.name);
        setNik(item.nik);
        setPhone(item.phone);
        setAddress(item.address);
        setProvince(item.province);
        setBloodType(item.bloodType);
      })

    } catch (error) {
      // console.log(error, ">> account Informasi");
    }
  };

  useEffect(() => {
    loadUser();
  }, []);

  // console.log(name, 'populate');

  return (
    <SafeAreaView className="mx-5 px-5">
      <ScrollView className="bg-[#F2F2F2]">
        <View className="mt-5 border-b-2 border-b-red-700">
          <Text className="text-red-700 font-bold text-3xl">General Info</Text>
        </View>

        <View className="mt-5">
          <Text className="text-xl font-medium">Name</Text>

          <TextInput
            placeholder="Name"
            value={name}
            onChangeText={(text) => setName(text)}
            className="mt-1 rounded-md border-[#e0e0e0] bg-white py-3 px-3 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
          />
        </View>

        <View className="mt-3 ">
          <Text className="text-xl font-medium">Email </Text>

          <TextInput
            placeholder="Email"
            value={email}
            onChangeText={(text) => setEmail(text)}
            className="mt-1 rounded-md border-[#e0e0e0] bg-white py-3 px-3 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
          />
        </View>

        <View className="mt-5">
          <Text className="text-xl font-medium">Address </Text>

          <TextInput
            placeholder="Address"
            value={address}
            onChangeText={(text) => setAddress(text)}
            className="mt-1 rounded-md border-[#e0e0e0] bg-white py-3 px-3 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
          />
        </View>

        <View className="mt-3 ">
          <Text className="text-xl font-medium">NIK</Text>

          <TextInput
            placeholder="NIK"
            value={nik}
            onChangeText={(text) => setNik(text)}
            className="mt-1 rounded-md border-[#e0e0e0] bg-white py-3 px-3 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
          />
        </View>

        <View className="mt-3 mb-5 ">
          <Text className="text-xl font-medium">Phone Number</Text>

          <TextInput
            placeholder="Phone number"
            value={phone}
            onChangeText={(text) => setPhone(text)}
            className="mt-1 rounded-md border-[#e0e0e0] bg-white py-3 px-3 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
          />
        </View>

        <View className="mt-3 mb-5 ">
          <Text className="text-xl font-medium">Set Province</Text>

          <View className="mt-1 ">
            <SelectList
              setSelected={(val) => setProvince(val)}
              data={provinceData}
              save="value"
              placeholder="Select province"
              boxStyles={{ backgroundColor: "white", borderColor: "white" }}
              inputStyles={{ backgroundColor: "white" }}
              dropdownStyles={{ backgroundColor: "white", borderColor: "white" }}
            />
          </View>
        </View>

        <View className="mt-3 mb-5 ">
          <Text className="text-xl font-medium">Blood Type</Text>

          <View className="mt-1">
            <SelectList
              setSelected={(val) => setBloodType(val)}
              data={bloodTypeData}
              save="value"
              placeholder="Select blood type"
              search={false}
              boxStyles={{ backgroundColor: "white", borderColor: "white" }}
              inputStyles={{ backgroundColor: "white" }}
              dropdownStyles={{ backgroundColor: "white", borderColor: "white" }}
            />
          </View>
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
