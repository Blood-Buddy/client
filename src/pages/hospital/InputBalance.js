import {
  Image,
  KeyboardAvoidingView,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useContext, useState } from "react";
import Axios from "axios";
import * as SecureStore from 'expo-secure-store';

async function save(key, value) {
  await SecureStore.setItemAsync(key, value);
}


export default function InputBalance({ navigation }) {
  const apiUrl = process.env.EXPO_PUBLIC_API_URL;

  const [balance, setBalance] = useState('');

  const handleSubmit = async () => {
    const token = await SecureStore.getItemAsync('accessToken');
    try {
      // console.log(apiUrl);
      const response = await Axios.post(`${apiUrl}request/invoice`, { amount: balance }, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });


      navigation.navigate("AddBalance", { url: response.data.invoiceUrl });
    } catch (error) {
      console.log(error.response.data);
    }
  }



  return (
    <View style={styles.container}>
      <KeyboardAvoidingView behavior="padding">


          <View className="w-full">
            <Text className="text-xl font-bold text-red-700">Input Balance:</Text>
            <View className="mt-3">

              <TextInput
                required
                onChangeText={setBalance}
                value={balance}
                className="mt-1 w-full rounded-md border-[#e0e0e0] bg-white py-3 px-3 font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </View>

            <View className="mt-4">
              <TouchableOpacity onPress={handleSubmit} className="hover:shadow-form w-full rounded-md bg-red-700 py-3 px-8  outline-none flex items-center justify-center">
                <Text className="text-m font-bold text-white">Deposit</Text>
              </TouchableOpacity>
            </View>

          </View>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f2f2",
    alignItems: "center",
    justifyContent: "center",
  },
  textOption: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10
  },
  fontSize: {
    fontSize: 15
  }
});
