import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
  Image,
  Modal,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function VoucherUseConfirmation() {
  return (
    <View style={styles.container}>
      <View className="mx-5 px-5 text-justify items-center">
        <Image
          source={require("../../assets/think.png")}
          className="w-36 h-40"
        />
        
        <Text className="mt-2 text-3xl text-justify font-medium">
          Hang On a Sec!
        </Text>
        <Text className="mt-2 text-lg text-center text-gray-600">
          Are you ready to use your voucher for a discount? Confirm your choice
          to avail of the special offer
        </Text>
      </View>

      <View className="flex flex-row">
        <TouchableOpacity
          className="mt-10 bg-red-700 p-3 items-center justify-center rounded-lg"
          style={styles.buttonConfirm}
        >
          <Text className="text-[#f2f2f2] font-bold text-lg">Yes</Text>
        </TouchableOpacity>

        <TouchableOpacity
          className="mt-10 bg-[#CCCCCC] p-3 items-center justify-center rounded-lg"
          style={styles.buttonConfirm}
        >
          <Text className="text-red-700 font-bold text-lg">Let me Rethink</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f2f2",
    alignItems: "center",
    paddingTop: 200,
  },
  buttonConfirm: {
    width: 150,
    margin: 8,
  },
});
