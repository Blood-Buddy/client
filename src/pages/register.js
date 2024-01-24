import {
  KeyboardAvoidingView,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { SelectList } from "react-native-dropdown-select-list";
import Axios from "axios";

export default function Register({ navigation }) {
  const [bloodType, setBloodType] = useState("");
  const [province, setProvince] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [nik, setNik] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
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

  // console.log(bloodType);
  // console.log(province);
  const apiUrl = process.env.EXPO_PUBLIC_API_URL;
  const handleSubmit = async () => {
    try {
      const response = await Axios.post(`${apiUrl}user/register`, {
        email,
        password,
        name,
        nik,
        phone,
        address,
        province,
        bloodType
      })
      navigation.navigate("Login")
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <KeyboardAvoidingView behavior="padding">
      <SafeAreaView className="">
        <ScrollView>
          <View className="w-96">
            <Text className="text-3xl ml-4 font-bold text-red-700 ">
              Create Account
            </Text>

            <View className="mt-3">
              <Text style={styles.fontSize}>Email</Text>

              <TextInput
                required
                onChangeText={setEmail}
                value={email}
                placeholder="Email"
                className="mt-1 mx-4  rounded-md border-[#e0e0e0] bg-white py-3 px-3 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </View>

            <View className="mt-5">
              <Text style={styles.fontSize}>Password </Text>

              <TextInput
                required
                onChangeText={setPassword}
                value={password}
                placeholder="Password"
                secureTextEntry
                className="mt-1 mx-4  rounded-md border-[#e0e0e0] bg-white py-3 px-3 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </View>
            <View className="mt-5">
              <Text style={styles.fontSize}>Full Name </Text>

              <TextInput
                required
                onChangeText={setName}
                value={name}
                placeholder="Full name"
                className="mt-1 mx-4  rounded-md border-[#e0e0e0] bg-white py-3 px-3 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </View>

            <View className="mt-3">
              <Text style={styles.fontSize}>NIK</Text>

              <TextInput
                required
                onChangeText={setNik}
                value={nik}
                placeholder="NIK"
                className="mt-1 mx-4  rounded-md border-[#e0e0e0] bg-white py-3 px-3 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </View>

            <View className="mt-3">
              <Text style={styles.fontSize}>Phone</Text>

              <TextInput
                required
                onChangeText={setPhoneNumber}
                value={phoneNumber}
                placeholder="Phone"
                className="mt-1 mx-4  rounded-md border-[#e0e0e0] bg-white py-3 px-3 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </View>

            <View className="mt-3">
              <Text style={styles.fontSize}>Address</Text>

              <TextInput
                required
                onChangeText={setAddress}
                value={address}
                placeholder="Address"
                className="mt-1 mx-4  rounded-md border-[#e0e0e0] bg-white py-3 px-3 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </View>

            <View className="mt-3">
              <Text style={styles.fontSize}>Province</Text>
            </View>

            <View className="mt-1 mx-4">
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

            <View className="mt-3">
              <Text style={styles.fontSize}>Blood Type</Text>
            </View>

            <View className="mt-1 mx-4">
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

            <View className="mt-4">
              <TouchableOpacity onPress={handleSubmit} className="hover:shadow-form rounded-md bg-red-700 py-3 px-8 mx-4 outline-none flex items-center justify-center">
                <Text className="text-lg font-bold text-white">Sign Up</Text>
              </TouchableOpacity>
            </View>

            <View className="mt-2" style={styles.textOption}>
              <Text className="text-s ml-4 text-gray-500 ">Already have an account?</Text>
              <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                <Text className="text-red-700 ml-1">Sign In</Text>
              </TouchableOpacity>
            </View>

          </View>
        </ScrollView>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f2f2",
    alignItems: "center",
    justifyContent: "center",

  },
  textOption: {
    flexDirection: "row",
    marginTop: 10,
  },
  fontSize: {
    fontSize: 16,
    marginLeft: 20
  }
});
