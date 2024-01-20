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

export default function DetailRewards() {
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

        <View className="flex flex-row bg-red-300">
          {/* total point */}
          <View className="bg-orange-800">
            <View style={styles.pointsContainer} className="ml-5 bg-green-400">
              <Image
                source={require("../../assets/detailReward.png")}
                style={styles.imgVoucher}
              />
              <Text className="text-4xl mt-2">100</Text>
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
  imgVoucher: {
    marginLeft: -30,
    width: 90,
    height: 90,
    backgroundColor: "green"
  },
  pointsContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
});
