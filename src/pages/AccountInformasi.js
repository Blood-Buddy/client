import { Feather } from "@expo/vector-icons";
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";

export default function AccountInformasi() {
  return (
    <ScrollView className="bg-[#F2F2F2]">
      <SafeAreaView className="mx-5 px-5">
        <View className="border-b-2 flex-row justify-between items-center border-b-red-700">
          <Text className="font-bold text-2xl mb-2">Account Information</Text>
          <TouchableOpacity>
            <Feather name="check" size={24} color="black" />
          </TouchableOpacity>
        </View>

        <View className="mt-5">
          <Text className="text-gray-700 text-base">General Info</Text>
        </View>

        <View className="mt-5">
          <Text className="text-xl font-medium">Fullname </Text>

          <TextInput
            placeholder=" input your fullname"
            secureTextEntry
            className="mt-1 rounded-md border-[#e0e0e0] bg-white py-3 px-3 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
          />
        </View>

        <View className="mt-3 ">
          <Text className="text-xl font-medium">Email </Text>

          <TextInput
            placeholder="input your email"
            secureTextEntry
            className="mt-1 rounded-md border-[#e0e0e0] bg-white py-3 px-3 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
          />
        </View>

        <View className="mt-5">
          <Text className="text-xl font-medium">Address </Text>

          <TextInput
            placeholder=" input your address"
            secureTextEntry
            className="mt-1 rounded-md border-[#e0e0e0] bg-white py-3 px-3 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
          />
        </View>

        <View className="mt-3 ">
          <Text className="text-xl font-medium">No. Registrasi PMI </Text>

          <TextInput
            placeholder="input your No. Registrasi PMI"
            secureTextEntry
            className="mt-1 rounded-md border-[#e0e0e0] bg-white py-3 px-3 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
          />
        </View>

        <View className="mt-3 ">
          <Text className="text-xl font-medium">Blood Type</Text>

          <TextInput
            placeholder="input your blood type"
            secureTextEntry
            className="mt-1 rounded-md border-[#e0e0e0] bg-white py-3 px-3 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
          />
        </View>

        <View className="mt-3 ">
          <Text className="text-xl font-medium">Rhesus</Text>

          <TextInput
            placeholder="input your rhesus"
            secureTextEntry
            className="mt-1 rounded-md border-[#e0e0e0] bg-white py-3 px-3 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
          />
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
  // fontSize: {
  //   fontSize: 16,
  //   marginLeft:20
  // }
});
