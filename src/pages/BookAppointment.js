import { Modal, SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from 'react';
import { Calendar, LocaleConfig } from 'react-native-calendars';
import { SelectList } from 'react-native-dropdown-select-list'
import { MaterialIcons } from '@expo/vector-icons';
import * as SecureStore from 'expo-secure-store';
import Axios from "axios";
import dateFormatter from "../helpers/dateFormatter";

export default function BookAppointment({ navigation, route }) {
    const apiUrl = process.env.EXPO_PUBLIC_API_URL;
    const { requestData } = route.params
    const [date, setDate] = useState('');
    const [session, setSession] = useState(1);
    const [modalVisible, setModalVisible] = useState(false);

    const data = [
        { key: 1, value: "Session 1: 06.00 - 11.30" },
        { key: 2, value: "Session 2: 13.30 - 18.00" },
    ]

    // console.log(requestData, "requestData");
    // console.log(requestData, data, "<<<<<<< bookapp");
    const postAppointment = async () => {
        const token = await SecureStore.getItemAsync('accessToken');
        // console.log(token, "token");
        // console.log(requestData.hospitalId, "hospital");
        // console.log(requestData._id, "request id");
        // console.log(date, "date");
        // console.log(session, "session");
        try {
            const response = await Axios.post(`${apiUrl}appointment`, {
                requestId: requestData._id,
                date,
                session,
            }, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            }
            );
            if (response) {
                setModalVisible(true)
            }
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <>
            <SafeAreaView>
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
                <View className='rounded-lg'>

                    <View className="bg-red-700 p-3">
                        <Text className="text-white text-lg font-bold">Hospital Destination</Text>
                    </View>
                    <View className='p-3 bg-white rounded-lg'>
                        <Text className="text-red-700 text-2xl font-bold">{requestData?.hospital?.name}</Text>
                        <Text className='mt-2'>Address: {requestData?.hospital?.address}</Text>
                        <Text className='mt-2'>Phone Number: {requestData?.hospital?.phoneNumber}</Text>
                        <Text className='mt-2 text-red-700'>Only available on: {dateFormatter(requestData?.date.slice(0, 10))}</Text>
                        {date ? <Text className='mt-2'>Selected Date: {dateFormatter(date)}</Text> : null}
                        <View className='mt-2'>
                            <SelectList
                                setSelected={(val) => setSession(val)}
                                data={data}
                                save="key"
                                placeholder="Select Session: "
                                search={false}
                            />
                        </View>
                    </View>
                </View>
                <TouchableOpacity onPress={postAppointment} className="flex flex-col-reverse mt-2 mx-2 bg-red-700 p-3 items-center justify-center rounded-lg">
                    <Text className="text-[#f2f2f2] font-bold text-xl">Book Appointment</Text>
                </TouchableOpacity>

                <Modal animationType="fade" transparent={false} visible={modalVisible} onRequestClose={() => setModalVisible(!modalVisible)}>
                    <SafeAreaView className='items-center justify-center'>
                        <View className='items-center justify-center h-full'>
                            <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
                                <MaterialIcons name="thumb-up-off-alt" size={48} color="#AE2111" />
                            </TouchableOpacity>
                            <Text className='text-4xl'>Thank You!</Text>
                            <Text className='text-center mt-2'>You have successfully created an appointment. You can always access and edit your appointment in Appointment page.</Text>
                            <Text className='text-center text-[#2e2e2e]/50 mt-2'>To access the QR code, go to Appointment page, and tap on the Show QR button.</Text>
                            <View className='mt-2 w-full'>
                                <TouchableOpacity onPress={() => navigation.navigate("Appointment")} className="flex flex-col-reverse mt-2 bg-red-700 p-3 items-center justify-center rounded-lg">
                                    <Text className="text-[#f2f2f2] font-bold text-xl">Done</Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                    </SafeAreaView>
                </Modal>
            </SafeAreaView>
        </>

    )
}