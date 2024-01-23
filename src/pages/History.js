import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import * as SecureStore from 'expo-secure-store';
import Axios from "axios";

export default function History({ navigation }) {
  const apiUrl = process.env.EXPO_PUBLIC_API_URL;
  const [history, setHistory] = useState([]);

  const fetchHistory = async () => {
    const token = await SecureStore.getItemAsync("accessToken");
    try {
      const response = await Axios.get(`${apiUrl}appointment/history`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      setHistory(response.data);
    } catch (error) {
      console.log(error, "fetch history error");
    }
  }

  useEffect(() => {
    fetchHistory();
  }, []);

  // let dataHistory = history[0]?.appointment
  // console.log(history, 'data');

  if (history.length !== 0) {
  return (
    <>
      <SafeAreaView className="mx-5 px-5">
        <ScrollView className="bg-[#F2F2F2]">
          <View className="border-b-2 flex-row justify-between items-center border-b-red-700">
            <Text className="font-bold text-2xl mb-2">History</Text>
          </View>
          {history.map((item) => (
            <View className="bg-white mt-5 rounded-md">
              <View className="bg-red-700 rounded-md h-12 justify-center">
                <Text className="text-white text-lg font-semibold ml-3 ">
                  {" "}
                  Destination Hospital
                </Text>
              </View>

              <Text className="mt-2 ml-3 text-2xl font-bold text-red-700">
                {item?.Hospital.name}
              </Text>
              <View className="flex flex-row">
                <Text className="mt-2 ml-3 text-lg">Address</Text>
                <Text style={styles.textAddress}>
                  : {item?.Hospital.address}
                </Text>
              </View>
              <View className="flex flex-row">
                <Text className="mt-2 ml-3 text-lg">Phone</Text>
                <Text style={styles.textPhone}>: {item?.Hospital.phone}</Text>
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
          ))}
        </ScrollView>
      </SafeAreaView>
    </>
  );
  } else {
    return (
      <SafeAreaView>
        <View className='border-b-2 border-red-700 mx-3'>
          <Text className='text-2xl font-bold'>Your History</Text>
        </View>
        <View className='items-center justify-center mt-24'>
          <Image source={require('../../assets/bloodbuddy.png')} className='object-cover h-96 w-96'></Image>
          <View className='-mt-32 items-center justify-center'>
            <Text className='text-center text-4xl font-bold text-red-700'>Oops!</Text>
            <Text className='text-center text-lg'>No donation history ever recorded.</Text>
            <TouchableOpacity onPress={() => navigation.goBack()} className='bg-red-700 p-3 items-center justify-center rounded-lg mt-2'>
              <Text className='text-white  font-bold'>Back</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    )
  }
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
