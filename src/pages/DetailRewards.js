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
import WideButton from "../components/WideButton";

export default function DetailRewards({navigation}) {
  return (
    <ScrollView className="bg-[#F2F2F2]">
      <SafeAreaView className="mx-5 px-5">
        <View className="border-b-2 flex-row justify-between items-center border-b-red-700">
          <Text className="font-bold text-2xl mb-2">Detail Reward</Text>
        </View>

        {/* gambar */}
        <View className="mt-6">
          <View className="bg-lime-300">
            <Image
              className="h-48"
              source={{
                uri: "https://blog.indodax.com/wp-content/uploads/2022/05/Poster-Deposit-di-Indodax-via-Indomaret_Blog_1200x520_Indodax-1024x444.jpg",
              }}
            />
          </View>
        </View>

        <View className="flex flex-row ">
          {/* total point */}
          <View className="">
            <View style={styles.pointsContainer} className="ml-5 ">
              <Image
                source={require("../../assets/detailReward.png")}
                style={styles.imgVoucher}
              />
              <Text className="text-4xl mt-2">100</Text>
            </View>
          </View>
        </View>

        <View className="ml-4">
          <Text className="text-xl text-[#7f7f7f]">
            {" "}
            10% Shopping Discount{" "}
          </Text>
          <View className="flex flex-row">
            <Text className="text-base text-[#7f7f7f]"> from </Text>
            <Text className="text-base text-red-700">Indomaret </Text>
          </View>
        </View>

        <View className="ml-4 mt-5">
          <Text className="text-lg text-justify">
            Get a 10% shopping discount worth a maximum of IDR 50,000 for every
            purchase. e-Vouchers can be accessed on the "My Vouchers" page with
            applicable terms and conditions. This program is sponsored by
            Indomaret.
          </Text>
        </View>

        <View className="mt-52">
          <TouchableOpacity
            className="mt-2 bg-red-700 p-3 items-center justify-center rounded-lg"
            onPress={() => {
              navigation.removeListener;
              navigation.navigate("Voucher Confirmation");
            }}
          >
            <Text className="text-[#f2f2f2] font-bold text-xl">Reedem</Text>
          </TouchableOpacity>
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
  imgVoucher: {
    marginLeft: -50,
    width: 90,
    height: 90,
    // backgroundColor: "green"
  },
  pointsContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
});
