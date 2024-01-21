import { Modal, SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from 'react';
import { Calendar, LocaleConfig } from 'react-native-calendars';
import { SelectList } from 'react-native-dropdown-select-list'
import { MaterialIcons } from '@expo/vector-icons';

export default function BookAppointment({ navigation }) {
    const [selected, setSelected] = useState('');
    const [session, setSession] = useState(1);
    const [modalVisible, setModalVisible] = useState(false);

    const data = [
        { key: 1, value: "Session 1: 06.00 - 11.30" },
        { key: 2, value: "Session 2: 13.30 - 18.00" },
    ]

    function formatDate(inputDate) {
        const months = [
            "January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];

        const dateParts = inputDate.split("-");
        const year = dateParts[0];
        const monthIndex = parseInt(dateParts[1]) - 1;
        const day = dateParts[2];

        const monthName = months[monthIndex];

        let dayWithSuffix;
        if (day.endsWith("1") && day !== "11") {
            dayWithSuffix = day + "st";
        } else if (day.endsWith("2") && day !== "12") {
            dayWithSuffix = day + "nd";
        } else if (day.endsWith("3") && day !== "13") {
            dayWithSuffix = day + "rd";
        } else {
            dayWithSuffix = day + "th";
        }

        return `${monthName} ${dayWithSuffix}, ${year}`;
    }
    // console.log(session);
    // console.log(selected);
    return (
        <>

            <Calendar
                onDayPress={day => {
                    setSelected(day.dateString);
                    // console.log('selected day', day);
                }}
                markedDates={{
                    [selected]: { selected: true, disableTouchEvent: true, selectedDotColor: 'orange', selectedColor: '#AE2111' }
                }}
                theme={{
                    todayTextColor: '#AE2111',
                    arrowColor: '#AE2111',
                    indicatorColor: '#AE2111',
                }}
            />

            <View className="bg-red-700 mt-3 p-3">
                <Text className="text-white text-lg font-bold">Hospital Destination</Text>
            </View>
            <View className='p-3'>
                <Text className="text-red-700 text-2xl font-bold">Rumah Sakit Pondok Indah</Text>
                <Text className='mt-2'>Alamat: Jalan Metro Duta Kav. UE, Pd. Pinang, Kec. Kby. Lama, Daerah Khusus Ibukota Jakarta 12310</Text>
                <Text className='mt-2'>{`Phone Number: (021) 1234567 `}</Text>
                {selected ? <Text className='mt-2'>Selected Date: {formatDate(selected)}</Text> : null}
                <View className='mt-2'>
                    <SelectList
                        setSelected={(val) => setSession(val)}
                        data={data}
                        save="key"
                        placeholder="Select Session: "
                        search={false}
                    />
                </View>
                <TouchableOpacity onPress={() => setModalVisible(true)} className="flex flex-col-reverse mt-2 bg-red-700 p-3 items-center justify-center rounded-lg">
                    <Text className="text-[#f2f2f2] font-bold text-xl">Book Appointment</Text>
                </TouchableOpacity>
            </View>

            <Modal animationType="fade" transparent={false} visible={modalVisible} onRequestClose={() => setModalVisible(!modalVisible)}>
                <SafeAreaView className='items-center justify-center'>
                    <View className='items-center justify-center h-full'>
                        <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
                            <MaterialIcons name="thumb-up-off-alt" size={48} color="#AE2111" />
                        </TouchableOpacity>
                        <Text className='text-4xl'>Thank You!</Text>
                        <Text className='text-center mt-2'>You have successfully created an appointment. You can always access and edit your appointment in Appointment page.</Text>
                        <Text className='text-center text-[#2e2e2e]/50 mt-2'>Please show the QR code below to the Rumah Sakit Pondok Indah staff.</Text>
                        <View className='mt-2 w-full'>
                            <TouchableOpacity onPress={() => navigation.navigate('Appointment')} className="flex flex-col-reverse mt-2 bg-red-700 p-3 items-center justify-center rounded-lg">
                                <Text className="text-[#f2f2f2] font-bold text-xl">Done</Text>
                            </TouchableOpacity>
                        </View>
                    </View>


                </SafeAreaView>
            </Modal>

        </>

    )
}