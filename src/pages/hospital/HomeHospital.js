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

export default function HomeHospital({ navigation }) {
  const apiUrl = process.env.EXPO_PUBLIC_API_URL;
  const isFocused = useIsFocused();

  const [hospitalProfile, setHospitalProfile] = useState([])
  const [appointments, setAppointments] = useState([])

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

  const fetchAppointments = async () => {
    const token = await SecureStore.getItemAsync('accessToken');
    console.log(token, "token");
    try {
      const response = await Axios.get(`${apiUrl}appointment/hospital`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      // console.log(response, "response fetch appointments");
      setAppointments(response.data);
    } catch (error) {
      console.log(error, "error fetch appointments");
    }
  }

  useEffect(() => {
    if (isFocused) {
      fetchHospitalProfile();
      fetchAppointments();
    }
  }, [isFocused]);

  // console.log(appointments, "appointments");
  // console.log(hospitalProfile);
  if (appointments.length !== 0) {
    return (
      <SafeAreaView className="">
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
                  <TouchableOpacity onPress={() => {
                    navigation.removeListener;
                    navigation.navigate("InputBalance");
                  }}>
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
              <View className="border-b-2 flex-row justify-between items-center border-b-red-700 mb-3">
                <Text className="mt-1 ml-3 text-2xl font-base text-center mb-2">
                  Appointments
                </Text>
              </View>

              {/* card patient */}
              {appointments.map((appointment, index) => (
                <>
                  <View key={index} style={styles.appointmentContainer}>
                    <View style={styles.appointmentInfoContainer}>
                      <Text style={styles.label}>Name</Text>
                      <Text style={styles.value}>{appointment?.user?.name}</Text>
                    </View>

                    <View className='my-1' style={styles.line}></View>

                    <View style={styles.appointmentInfoContainer}>
                      <Text style={styles.label}>NIK</Text>
                      <Text style={styles.value}> {appointment?.user?.nik}</Text>
                    </View>

                    <View style={styles.appointmentInfoContainer}>
                      <Text style={styles.label}>Email</Text>
                      <Text style={styles.value}> {appointment?.user?.email}</Text>
                    </View>

                    <View style={styles.appointmentInfoContainer}>
                      <Text style={styles.label}>Address</Text>
                      <Text style={styles.value}> {appointment?.user?.address}</Text>
                    </View>

                    <View style={styles.appointmentInfoContainer}>
                      <Text style={styles.label}>Phone</Text>
                      <Text style={styles.value}> {appointment?.user?.phoneNumber}</Text>
                    </View>

                    <View style={styles.appointmentInfoContainer}>
                      <Text style={styles.label}>Blood Type</Text>
                      <Text style={styles.value}> {appointment?.user?.bloodType}</Text>
                    </View>

                    <View style={styles.appointmentInfoContainer}>
                      <Text style={styles.label}>Session</Text>
                      <Text style={styles.value}>
                        {appointment?.session === 1 ? "06.00 - 11.30" : appointment?.session === 2 ? "13.30 - 18.00" : ""}
                      </Text>
                    </View>

                    <View style={styles.appointmentInfoContainer}>
                      <Text style={styles.label}>Appointment date</Text>
                      <Text style={styles.value}> {appointment?.date.slice(0, 10)}</Text>
                    </View>
                  </View>
                </>
              ))}
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  } else {
    return (
      <SafeAreaView className="">
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
                  <TouchableOpacity onPress={() => {
                    navigation.removeListener;
                    navigation.navigate("InputBalance");
                  }}>
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

            <View className="mt-24">
                  <Text className="text-center font-bold text-xl text-red-700">Currently have no appointment.</Text>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    )
  }

}

const styles = StyleSheet.create({
  appointmentContainer: {
    backgroundColor: "#F2F2F2",
    marginTop: 5,
    padding: 10,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOpacity: 0.4,
    shadowRadius: 5,
    marginHorizontal: 1,
    marginBottom: 10,
  },
  appointmentInfoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 5,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
  },
  value: {
    marginLeft: 10,
    fontSize: 16,
  },
  line: {
    height: 1,
    backgroundColor: "gray",
    marginVertical: 5,
  },
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
