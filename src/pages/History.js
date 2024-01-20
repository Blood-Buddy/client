import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";

export default function History() {
  return (
    <ScrollView className="bg-[#F2F2F2]">
      <SafeAreaView className="mx-5 px-5">
        <View className="border-b-2 flex-row justify-between items-center border-b-red-700">
          <Text className="font-bold text-2xl mb-2">History</Text>
        </View>

        <View className="bg-white mt-5 rounded-md">
          <View className="bg-red-700 rounded-md h-12 justify-center">
            <Text className="text-white text-lg font-semibold ml-3 ">
              {" "}
              Destination Hospital
            </Text>
          </View>

          <Text className="mt-3 ml-3 text-2xl font-bold text-red-700">
            Rumah Sakit Pondok Indah
          </Text>
          <View className="flex flex-row">
            <Text className="mt-2 ml-3 text-lg">Address</Text>
            <Text style={styles.textAddress}>
              : Jalan Metro Duta Kav. UE Pd. Pinang Kec. Kby lama, Daerah Khusus
              Ibukota Jakarta, 12310
            </Text>
          </View>
          <View className="flex flex-row">
            <Text className="mt-2 ml-3 text-lg">Phone</Text>
            <Text style={styles.textPhone}>: (021) 7657525</Text>
          </View>

          <View className="flex flex-row mt-5 mb-5">
            <View className=" mr-1">
              <Text className="ml-3 text-xl text-red-700 font-medium">
                Date
              </Text>
              <Text className=" ml-3 text-lg">24-12-2023</Text>
            </View>

            <View style={styles.line}></View>

            <View className=" mr-1">
              <Text className="ml-3 text-xl text-red-700 font-medium">
                Session
              </Text>
              <Text className=" ml-3 text-lg">1 (06.00 - 11.30)</Text>
            </View>

            <View style={styles.line}></View>

            <View className="mr-1">
              <Text className="ml-3 text-xl text-red-700 font-medium">
                Status
              </Text>
              <Text className=" ml-3 text-lg text-green-500">Completed</Text>
            </View>
          </View>
        </View>

        <View className="bg-white mt-5 rounded-md">
          <View className="bg-red-700 rounded-md h-12 justify-center">
            <Text className="text-white text-lg font-semibold ml-3 ">
              {" "}
              Destination Hospital
            </Text>
          </View>

          <Text className="mt-3 ml-3 text-2xl font-bold text-red-700">
            Rumah Sakit Pondok Indah
          </Text>
          <View className="flex flex-row">
            <Text className="mt-2 ml-3 text-lg">Address</Text>
            <Text style={styles.textAddress}>
              : Jalan Metro Duta Kav. UE Pd. Pinang Kec. Kby lama, Daerah Khusus
              Ibukota Jakarta, 12310
            </Text>
          </View>
          <View className="flex flex-row">
            <Text className="mt-2 ml-3 text-lg">Phone</Text>
            <Text style={styles.textPhone}>: (021) 7657525</Text>
          </View>

          <View className="flex flex-row mt-5 mb-5">
            <View className=" mr-1">
              <Text className="ml-3 text-xl text-red-700 font-medium">
                Date
              </Text>
              <Text className=" ml-3 text-lg">24-12-2023</Text>
            </View>

            <View style={styles.line}></View>

            <View className=" mr-1">
              <Text className="ml-3 text-xl text-red-700 font-medium">
                Session
              </Text>
              <Text className=" ml-3 text-lg">1 (06.00 - 11.30)</Text>
            </View>

            <View style={styles.line}></View>

            <View className="mr-1">
              <Text className="ml-3 text-xl text-red-700 font-medium">
                Status
              </Text>
              <Text className=" ml-3 text-lg text-red-700">Canceled</Text>
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
    marginLeft: -50,
    width: 90,
    height: 90,
  },
  pointsContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  textAddress: {
    marginTop: 12,
    marginLeft: 3,
    fontSize: 17,
    justifyContent: "center",
    width: 300,
  },
  textPhone: {
    marginTop: 12,
    marginLeft: 16,
    fontSize: 17,
    justifyContent: "center",
    width: 300,
  },
  line: {
    height: 47,
    borderColor: "black",
    borderWidth: 1.5,
    marginLeft: 8,
  },
});
