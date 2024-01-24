import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { useIsFocused } from "@react-navigation/native";
import * as SecureStore from "expo-secure-store";
import Axios from "axios";


// const token = await SecureStore.getItemAsync('accessToken');
// console.log('Token fetched:', token);

export default function HomeHospital() {
  const apiUrl = process.env.EXPO_PUBLIC_API_URL;
  const isFocused = useIsFocused();

  const [hospitalProfile, setHospitalProfile] = useState([])

  const fetchHospitalProfile = async () => {
    const token = await SecureStore.getItemAsync('accessToken');
    // console.log('Token fetched:', token);
    try {
      const response = await Axios.get(`${apiUrl}hospital`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      setHospitalProfile(response.data);
    } catch (error) {
      console.log('Error fetching hospital profile:', error);
    }
  }

  useEffect(() => {
    if (isFocused) {
      fetchHospitalProfile();
    }
  }, [isFocused]);


  // console.log(hospitalProfile);
  return (
    <SafeAreaView className="bg-red-700">
      <ScrollView className="px-5 h-full">
        <View style={styles.container}>
          {/* profile */}
          <View style={styles.card}>
            <Text className="mt-1 ml-3 text-2xl font-base text-center mb-1">
              {hospitalProfile?.name}
            </Text>

            <View style={styles.centerLine}>
              <View style={styles.line}></View>
            </View>

            <View className="flex flex-row">
              <Text className="mt-2 ml-3 text-lg" style={styles.labelTop}>Address</Text>
              <Text style={styles.textAddress}>
                : {hospitalProfile?.address}
              </Text>
            </View>
            <View className="flex flex-row">
              <Text className="mt-2 ml-3 text-lg" style={styles.labelTop}>Phone</Text>
              <Text style={styles.textPhone}>: {hospitalProfile?.phoneNumber}</Text>
            </View>
            <View className="flex mb-4">
              <View className='flex flex-row'>
                <View className='border-b-2 w-full items-center justify-center'>

                  <Text className="mt-2 font-base text-2xl text-center w-full">Blood Stock </Text>
                </View>
              </View>
              <View className='flex flex-row'>
                <Text className="mt-2 ml-3 text-lg" style={styles.label}>Blood Type A</Text>
                <Text style={styles.textPhone}>: {hospitalProfile?.bloodStock?.A}</Text>
              </View>
              <View className='flex flex-row'>
                <Text className="mt-2 ml-3 text-lg" style={styles.label}>Blood Type B</Text>
                <Text style={styles.textPhone}>: {hospitalProfile?.bloodStock?.B}</Text>
              </View>
              <View className='flex flex-row'>
                <Text className="mt-2 ml-3 text-lg" style={styles.label}>Blood Type AB</Text>
                <Text style={styles.textPhone}>: {hospitalProfile?.bloodStock?.AB}</Text>
              </View>
              <View className='flex flex-row'>
                <Text className="mt-2 ml-3 text-lg" style={styles.label}>Blood Type O</Text>
                <Text style={styles.textPhone}>: {hospitalProfile?.bloodStock?.O}</Text>
              </View>


            </View>
          </View>

          {/* saldo */}
          <View style={styles.cardSaldo}>
            <View className="flex flex-row justify-between items-center">
              <Text className="mt-1 ml-3 text-2xl font-base mb-1">
                Balance Amount
              </Text>
              <View className="mr-2">
                <TouchableOpacity>
                  <AntDesign name="pluscircle" size={24} color="#AE2111" />
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.centerLine}>
              <View style={styles.line}></View>
            </View>

            <View className="flex flex-row ml-2">
              <Text style={styles.texBalance}>{hospitalProfile?.balance?.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}</Text>
            </View>
          </View>

          {/* card request blood */}
          <View style={styles.cardBloodRequest}>
            <View className="border-b-2 flex-row justify-between items-center border-b-red-700">
              <Text className="mt-1 ml-3 text-2xl font-base text-center mb-1">
                Appointments
              </Text>
            </View>

            {/* card patient */}
            <View className="bg-[#F2F2F2] mt-5 p-3 rounded-lg shadow-sm shadow-gray-400 mx-1 mb-1">
              <View className="flex flex-row justify-between">
                <Text className="mt-1 ml-3 text-xl font-base mb-1">
                  Patient
                </Text>
              </View>

              <View style={styles.centerLine}>
                <View style={styles.line}></View>
              </View>

              <View className="flex flex-row">
                <Text className="mt-2 ml-3 text-lg">Name</Text>
                <Text style={styles.textAddress}>: Dan William</Text>
              </View>
              <View className="flex flex-row">
                <Text className="ml-3 text-lg">NIK</Text>
                <Text style={styles.textNik}>: 345678956767778</Text>
              </View>
              <View className="flex flex-row">
                <Text className="ml-3 text-lg">Address</Text>
                <Text style={styles.textNik}>
                  : Jalan Metro Duta Kav. UE Pd. Pinang Kec. Kby lama, Daerah
                  Khusus Ibukota Jakarta, 12310
                </Text>
              </View>
              <View className="flex flex-row">
                <Text className="ml-3 text-lg">Phone</Text>
                <Text style={styles.textNik}>: 0812456789</Text>
              </View>
              <View className="flex flex-row mb-4">
                <Text className="ml-3 text-lg">Blood Type</Text>
                <Text style={styles.textNik}>: A</Text>
              </View>

              <View className="flex flex-row self-end">
                <Text className="text-sm mt-3 ml-3">
                  Session 1 (06.00 - 11.30)
                </Text>
                <View className="mx-2 w-24">
                  <TouchableOpacity className=" bg-[#048621] p-2 items-center justify-center rounded-lg">
                    <Text className="text-[#f2f2f2] font-bold text-md">
                      Decline
                    </Text>
                  </TouchableOpacity>
                </View>

                <View className="w-24">
                  <TouchableOpacity className=" bg-red-700 p-2 items-center justify-center rounded-lg">
                    <Text className="text-[#f2f2f2] font-bold text-md">
                      Accept
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            {/* card patient */}
            <View className="bg-[#F2F2F2] mt-5 p-3 rounded-lg shadow-sm shadow-gray-400 mx-1 mb-1">
              <View className="flex flex-row justify-between">
                <Text className="mt-1 ml-3 text-xl font-base mb-1">
                  Patient
                </Text>
              </View>

              <View style={styles.centerLine}>
                <View style={styles.line}></View>
              </View>

              <View className="flex flex-row">
                <Text className="mt-2 ml-3 text-lg">Name</Text>
                <Text style={styles.textAddress}>: Dan William</Text>
              </View>
              <View className="flex flex-row">
                <Text className="ml-3 text-lg">NIK</Text>
                <Text style={styles.textNik}>: 345678956767778</Text>
              </View>
              <View className="flex flex-row">
                <Text className="ml-3 text-lg">Address</Text>
                <Text style={styles.textNik}>
                  : Jalan Metro Duta Kav. UE Pd. Pinang Kec. Kby lama, Daerah
                  Khusus Ibukota Jakarta, 12310
                </Text>
              </View>
              <View className="flex flex-row">
                <Text className="ml-3 text-lg">Phone</Text>
                <Text style={styles.textNik}>: 0812456789</Text>
              </View>
              <View className="flex flex-row mb-4">
                <Text className="ml-3 text-lg">Blood Type</Text>
                <Text style={styles.textNik}>: A</Text>
              </View>

              <View className="flex flex-row self-end">
                <Text className="text-sm mt-3 ml-3">
                  Session 1 (06.00 - 11.30)
                </Text>
                <View className="mx-2 w-24">
                  <TouchableOpacity className=" bg-[#048621] p-2 items-center justify-center rounded-lg">
                    <Text className="text-[#f2f2f2] font-bold text-md">
                      Decline
                    </Text>
                  </TouchableOpacity>
                </View>

                <View className="w-24">
                  <TouchableOpacity className=" bg-red-700 p-2 items-center justify-center rounded-lg">
                    <Text className="text-[#f2f2f2] font-bold text-md">
                      Accept
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  label: {
    width: 120,
  },
  labelTop: {
    width: 65,
  },
  borderBottom: {
    borderBottomColor: "red",
    borderBottomWidth: 1,
  },
  pointsContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  textAddress: {
    flex: 1,
    marginTop: 12,
    marginLeft: 3,
    fontSize: 17,
    justifyContent: "center",
    width: 255,
  },
  textPhone: {
    marginTop: 12,
    marginLeft: 3,
    fontSize: 17,
    justifyContent: "center",
    width: 255,
  },
  line: {
    borderColor: "black",
    borderWidth: 1,
    marginLeft: 8,
  },
  centerLine: {
    justifyContent: "center",
  },
  card: {
    backgroundColor: "#f4f4f4",
    borderRadius: 10,
    padding: 10,
    width: 350,
  },
  cardSaldo: {
    backgroundColor: "#f4f4f4",
    borderRadius: 10,
    padding: 10,
    width: 350,
    marginTop: 15,
  },
  texBalance: {
    marginTop: 12,
    marginLeft: 3,
    fontSize: 30,
    justifyContent: "center",
    width: 255,
  },
  cardBloodRequest: {
    backgroundColor: "#f4f4f4",
    marginTop: 20,
    borderTopStartRadius: 30,
    borderTopEndRadius: 30,
    padding: 10,
    height: '100%',
    // height: 500,
  },
  cardPatient: {
    backgroundColor: "#f4f4f4",
    borderRadius: 10,
    padding: 10,
    marginVertical: 10,
    width: 350,
    marginTop: 15,
    shadowColor: "grey",
    shadowRadius: "5px",
  },
  textNik: {
    marginTop: 3,
    marginLeft: 16,
    fontSize: 17,
    justifyContent: "center",
    width: 260,
  },
});
