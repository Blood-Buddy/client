import Axios from "axios";
import { useState } from "react";
import { KeyboardAvoidingView, SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Calendar } from "react-native-calendars";
import { SelectList } from "react-native-dropdown-select-list";
import * as SecureStore from 'expo-secure-store';
import Toast from "react-native-toast-message";

export default function Request({ navigation }) {
    const [date, setDate] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [quantity, setQuantity] = useState("");
    const [blood, setBlood] = useState({});
    const apiUrl = process.env.EXPO_PUBLIC_API_URL;
    const totalRequest = 0;


    const data = [
        { key: 1, value: "Session 1: 06.00 - 11.30" },
        { key: 2, value: "Session 2: 13.30 - 18.00" },
    ]

    const bloodTypeData = [
        { key: 1, value: "A" },
        { key: 2, value: "B" },
        { key: 3, value: "AB" },
        { key: 4, value: "O" },
    ]

    // console.log(blood);
    const postRequest = async () => {
        try {
            const token = await SecureStore.getItemAsync('accessToken');
            const requestData = {
                date,
                session: [1, 2],
                title,
                description,
                bloodType: { [blood]: quantity },
                totalRequest: quantity
            };
            
            const response = await Axios.post(`${apiUrl}request`, requestData, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                }
            });
            if (response) {
                navigation.navigate("Homepage");
            }
        } catch (error) {
            Toast.show({
                type: 'error',
                text1: error.response.data.message
            });
        }
    }

    return (
        <SafeAreaView>
            <ScrollView className="h-full mb-6">
                <KeyboardAvoidingView>

                    <Calendar
                        onDayPress={day => {
                            setDate(day.dateString);
                        }}
                        markedDates={{
                            [date]: { selected: true, disableTouchEvent: true, selectedDotColor: 'orange', selectedColor: '#AE2111' }
                        }}
                        theme={{
                            todayTextColor: '#AE2111',
                            arrowColor: '#AE2111',
                            indicatorColor: '#AE2111',
                        }}
                    />

                    {/* <View className='mt-2 mx-4'>
                    <SelectList
                        setSelected={(val) => setSession(val)}
                        data={data}
                        save="key"
                        placeholder="Select session: "
                        search={false}
                        boxStyles={{ backgroundColor: "white", borderColor: "white" }}
                        inputStyles={{ backgroundColor: "white" }}
                        dropdownStyles={{ backgroundColor: "white", borderColor: "white" }}
                    />
                </View> */}

                    <View className="mt-2 mx-4">
                        <SelectList
                            setSelected={(val) => setBlood(val)}
                            data={bloodTypeData}
                            save="value"
                            placeholder="Select blood type"
                            search={false}
                            boxStyles={{ backgroundColor: "white", borderColor: "white" }}
                            inputStyles={{ backgroundColor: "white" }}
                            dropdownStyles={{ backgroundColor: "white", borderColor: "white" }}
                        />
                    </View>

                    <TextInput
                        required
                        keyboardType="numeric"
                        onChangeText={setQuantity}
                        value={quantity}
                        placeholder="Quantity needed"
                        className="mt-1 mx-4  rounded-md border-[#e0e0e0] bg-white py-3 px-3 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                    <TextInput
                        required
                        onChangeText={setTitle}
                        value={title}
                        placeholder="Title"
                        className="mt-1 mx-4  rounded-md border-[#e0e0e0] bg-white py-3 px-3 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                    <TextInput
                        required
                        onChangeText={setDescription}
                        value={description}
                        placeholder="Description"
                        className="mt-1 mx-4  rounded-md border-[#e0e0e0] bg-white py-3 px-3 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />

                    <View className="mt-4">
                        <TouchableOpacity onPress={postRequest} className="hover:shadow-form rounded-md bg-red-700 py-3 px-8 mx-4 outline-none flex items-center justify-center">
                            <Text className="text-lg font-bold text-white">Post Request</Text>
                        </TouchableOpacity>
                    </View>
                </KeyboardAvoidingView>

            </ScrollView>
        </SafeAreaView>
    )
}