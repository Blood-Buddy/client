import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function MyVoucher({ voucherData, navigation }) {
  const availDataVoucher = true;
  console.log(voucherData, "<<<< from My Voucher");

  if (availDataVoucher) {
    return (
      <SafeAreaView className="mx-5 px-5">
        <ScrollView className="">
          <View className="border-b-2 flex-row justify-between items-center border-b-red-700">
            <Text className="font-bold text-2xl mb-2">My Vouchers</Text>
          </View>

          {/* card voucher */}
          <View className="bg-[#F2F2F2] mt-5 p-3 rounded-lg shadow-sm shadow-gray-400 flex flex-row mx-1 mb-1">
            <View className="flex justify-center items-center bg">
              <Image
                source={require("../../assets/bloodbuddy.png")}
                className="w-24 h-32 "
              />
            </View>

            <View className="mx-4 w-60 m ">
              <Text className="text-xl font-normal text-red-700">
                SAVE 10% OFF
              </Text>
              <Text className="text-lg font-semibold">Godiva Cafe</Text>

              <View className="w-56 mb-1">
                <Text className="text-base font-extralight">
                  Godiva Cafe is offering Discount of 10% off for 1 ice cream
                </Text>
              </View>

              <View className="flex justify-end items-end mr-2">
                <View className="bg-red-700 p-1 mt-1 w-28 h-8 rounded-lg">
                  <TouchableOpacity onPress={() => {
                    navigation.navigate("Home Hospital");
                  }}>
                    <Text className="text-lg text-[#f2f2f2] text-center">
                      Use Voucher
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  } else {
    return (
      <SafeAreaView className="mx-5 px-5">
        <View className="border-b-2 flex-row justify-between items-center border-b-red-700">
          <Text className="font-bold text-2xl mb-2">My Vouchers</Text>
        </View>

        <View>
          {/* page no voucher */}
          <View className="items-center justify-center mt-36">
            <Image
              source={require("../../assets/bloodbuddy.png")}
              className="object-cover h-72 w-80"
            ></Image>

            <View className="items-center justify-center " style={styles.oops}>
              <Text className="text-center text-3xl font-bold text-red-700">
                Oops!
              </Text>

              <Text className="text-center text-lg mt-1">
                You currently do not have any voucher redeemed.
              </Text>
            </View>
          </View>
        </View>
      </SafeAreaView>
    );
  }
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
  oops: {
    marginTop: -70,
  },
  container: {
    margin: 5,
    padding: 5,
  },
  header: {
    borderBottomColor: "red",
    borderBottomWidth: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: 2,
  },
});
