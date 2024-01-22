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

export default function Rewards({ navigation }) {
  return (
    <ScrollView className="bg-[#F2F2F2]">
      <SafeAreaView className="mx-5 px-5">
        <View className="border-b-2 flex-row justify-between items-center border-b-red-700">
          <Text className="font-bold text-2xl mb-2">Voucher</Text>
        </View>

        <View className="flex flex-row gap-8">
          {/* total point */}
          <View>
            <View style={styles.pointsContainer}>
              <Text className="text-4xl">100</Text>
              <Image
                source={require("../../assets/voucher.png")}
                style={styles.imgVoucher}
              />
            </View>

            <View style={styles.yourPoint}>
              <Text className="text-2xl font-medium">your points</Text>
            </View>
          </View>

          {/* card cek disini */}
          <View className="">
            <TouchableOpacity
              onPress={() => {
                navigation.removeListener;
                navigation.navigate("My Voucher");
              }}
              className="bg-red-700 p-3 rounded-lg mt-4"
              style={styles.cardVoc}
            >
              <View className="flex flex-row gap-8">
                <View>
                  <Text className="text-base font-bold">
                    CHECK VOUCHER BLOODBUDDY
                  </Text>
                  {/* <Text className="text-base font-bold">BLOODBUDDY</Text> */}
                  <Text className="text-base text-white font-bold">
                    DISINI!
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        {/* card voucher */}
        <View className="bg-[#F2F2F2] mt-5 p-3 rounded-lg shadow-sm shadow-gray-400 flex flex-row">
          <View className="flex justify-center items-center">
            <Image
              source={require("../../assets/ice1.png")}
              className="w-24 h-32 "
            />
          </View>

          <View className="mx-4 w-60 m ">
            <Text className="text-xl font-normal text-red-700">
              SAVE 10% OFF
            </Text>
            <Text className="text-lg font-semibold">Godiva Cafe</Text>

            <View>
              <Text className="text-base font-extralight">
                Godiva Cafe is offering Discount of 10% off for 1 ice cream
              </Text>
            </View>

            <View className="flex justify-end items-end m-">
              <View className="bg-red-700 p-1 mt-1 w-28 h-8 rounded-lg">
                <TouchableOpacity
                  onPress={() => {
                    navigation.removeListener;
                    navigation.navigate("Detail Rewards");
                  }}
                >
                  <Text className="text-lg text-[#f2f2f2] text-center">
                    Reedem
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>

        {/* card voucher */}
        <View className="bg-[#F2F2F2] mt-5 p-3 rounded-lg shadow-sm shadow-gray-400 flex flex-row">
          <View className="flex justify-center items-center">
            <Image
              source={require("../../assets/ice1.png")}
              className="w-24 h-32 "
            />
          </View>

          <View className="mx-4 w-60 m ">
            <Text className="text-xl font-normal text-red-700">
              SAVE 10% OFF
            </Text>
            <Text className="text-lg font-semibold">Godiva Cafe</Text>

            <View>
              <Text className="text-base font-extralight">
                Godiva Cafe is offering Discount of 10% off for 1 ice cream
              </Text>
            </View>

            <View className="flex justify-end items-end m-">
              <View className="bg-red-700 p-1 mt-1 w-28 h-8 rounded-lg">
                <Text className="text-lg text-[#f2f2f2] text-center">
                  Reedem
                </Text>
              </View>
            </View>
          </View>
        </View>

        {/* card voucher */}
        <View className="bg-[#F2F2F2] mt-5 p-3 rounded-lg shadow-sm shadow-gray-400 flex flex-row">
          <View className="flex justify-center items-center">
            <Image
              source={require("../../assets/ice1.png")}
              className="w-24 h-32 "
            />
          </View>

          <View className="mx-4 w-60 m ">
            <Text className="text-xl font-normal text-red-700">
              SAVE 10% OFF
            </Text>
            <Text className="text-lg font-semibold">Godiva Cafe</Text>

            <View>
              <Text className="text-base font-extralight">
                Godiva Cafe is offering Discount of 10% off for 1 ice cream
              </Text>
            </View>

            <View className="flex justify-end items-end m-">
              <View className="bg-red-700 p-1 mt-1 w-28 h-8 rounded-lg">
                <Text className="text-lg text-[#f2f2f2] text-center">
                  Reedem
                </Text>
              </View>
            </View>
          </View>
        </View>

        {/* card voucher */}
        <View className="bg-[#F2F2F2] mt-5 p-3 rounded-lg shadow-sm shadow-gray-400 flex flex-row">
          <View className="flex justify-center items-center">
            <Image
              source={require("../../assets/ice1.png")}
              className="w-24 h-32 "
            />
          </View>

          <View className="mx-4 w-60 m ">
            <Text className="text-xl font-normal text-red-700">
              SAVE 10% OFF
            </Text>
            <Text className="text-lg font-semibold">Godiva Cafe</Text>

            <View>
              <Text className="text-base font-extralight">
                Godiva Cafe is offering Discount of 10% off for 1 ice cream
              </Text>
            </View>

            <View className="flex justify-end items-end m-">
              <View className="bg-red-700 p-1 mt-1 w-28 h-8 rounded-lg">
                <Text className="text-lg text-[#f2f2f2] text-center">
                  Reedem
                </Text>
              </View>
            </View>
          </View>
        </View>

        {/* card voucher */}
        <View className="bg-[#F2F2F2] mt-5 p-3 rounded-lg shadow-sm shadow-gray-400 flex flex-row">
          <View className="flex justify-center items-center">
            <Image
              source={require("../../assets/ice1.png")}
              className="w-24 h-32 "
            />
          </View>

          <View className="mx-4 w-60 m ">
            <Text className="text-xl font-normal text-red-700">
              SAVE 10% OFF
            </Text>
            <Text className="text-lg font-semibold">Godiva Cafe</Text>

            <View>
              <Text className="text-base font-extralight">
                Godiva Cafe is offering Discount of 10% off for 1 ice cream
              </Text>
            </View>

            <View className="flex justify-end items-end m-">
              <View className="bg-red-700 p-1 mt-1 w-28 h-8 rounded-lg">
                <Text className="text-lg text-[#f2f2f2] text-center">
                  Reedem
                </Text>
              </View>
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
  },
  pointsContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  yourPoint: {
    marginTop: -30,
    fontWeight: "bold",
  },
  imgLogoVouc: {
    width: 80,
    height: 80,
  },
  cardVoc: {
    marginLeft: -17,
    marginTop: 20,
    // backgroundColor: "black"
  },
});
