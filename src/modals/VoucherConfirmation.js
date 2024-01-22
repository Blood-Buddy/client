import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
  Modal,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function VoucherConfirmation() {
  return (
    <View style={styles.container}>
      <View className="mx-5 px-5 text-justify items-center">
        <MaterialCommunityIcons
          name="check-decagram"
          size={60}
          color="#AE2111"
        />
        <Text className="mt-2 text-3xl text-justify">Congratulations!</Text>
        <Text className="mt-2 text-lg text-center">
          You have successfully redeemed the voucher. You can see the list of
          vouchers that you have redeemed on the "My Vouchers" page for further
          use.
        </Text>
      </View>

      <TouchableOpacity className="mt-56 bg-red-700 p-3 items-center justify-center rounded-lg w-96" style={styles.buttonConfirm}>
        <Text className="text-[#f2f2f2] font-bold text-xl">Confirm</Text>
      </TouchableOpacity>
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
  buttonConfirm: {
    width: 367,
  },
});
