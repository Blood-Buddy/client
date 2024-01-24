import {useState} from "react";
import {Modal, SafeAreaView, Text, TouchableOpacity, View} from "react-native";
import Checkbox from 'expo-checkbox';

export default function RequestCard({data, navigation}) {
    const [modalVisible, setModalVisible] = useState(false);
    const [isChecked, setChecked] = useState(false);

    // console.log(data, 'data request card');
    return (
        data?.map((item) => (
            (item.totalRequest > item.totalCollected) && (
                <View key={item?._id} className="mt-4 bg-white rounded-lg shadow-md">
                    <View className='bg-red-700 rounded-t-lg px-6 py-1 justify-center'>

                        <Text className='text-white text-2xl font-bold'>{item?.hospital?.name}</Text>
                    </View>
                    {/* {console.log(item.hospital, 'hospital')} */}
                    <Text className='mt-2 mx-6 '>{item?.description}</Text>
                    <Text className='mt-2 mx-6 '>Blood type A needed: {item?.bloodType?.A?.request},
                        collected: {item?.bloodType?.A?.collected}</Text>
                    <Text className='mt-2 mx-6 '>Blood type B needed: {item?.bloodType?.B?.request},
                        collected: {item?.bloodType?.B?.collected}</Text>
                    <Text className='mt-2 mx-6 '>Blood type AB needed: {item?.bloodType?.AB?.request},
                        collected: {item?.bloodType?.AB?.collected}</Text>
                    <Text className='mt-2 mx-6 '>Blood type O needed: {item?.bloodType?.O?.request},
                        collected: {item?.bloodType?.O?.collected}</Text>

                    <View className="flex-row-reverse">
                        <TouchableOpacity onPress={() => setModalVisible(true)}
                                          className="my-4 mx-6 bg-red-700 py-2 rounded-lg w-36 items-center justify-center">
                            <Text className="text-[#f2f2f2] font-bold">Book Appointment</Text>
                        </TouchableOpacity>
                    </View>

                    <Modal animationType="fade" transparent={false} visible={modalVisible}
                           onRequestClose={() => setModalVisible(!modalVisible)}>
                        <SafeAreaView>
                            <View className='items-center justify-center opacity-100'>
                                <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
                                    <Text className="text-red-700 font-bold text-3xl">Attention!</Text>
                                </TouchableOpacity>
                            </View>

                            <View className='mx-2'>
                                <Text className='mt-3 mb-3 text-black'>Before making an appointment, make sure you meet the
                                    following requirements: </Text>
                                <View className='gap-3'>
                                    <Text>1. Aged 17-60 years old.</Text>
                                    <Text>2. In good health, both physically and mentally.</Text>
                                    <Text>3. Have a body weight of at least 45 kilograms.</Text>
                                    <Text>4. Have not used injectable drugs, steroids, or other substances in the last 3
                                        months.</Text>
                                    <Text>5. Have no blood diseases or disorders.</Text>
                                    <Text>6. Never had close contact or sexual contact with someone who has viral hepatitis
                                        in the last 12 months.</Text>
                                    <Text>7. Never engaged in unsafe sexual activity.</Text>
                                    <Text>8. Not pregnant.</Text>
                                    <Text>9. Not taking certain medications, such as antibiotics or cancer drugs.</Text>
                                    <Text>10. Have not traveled to an area where dengue fever or chikungunya is endemic in
                                        the last 3 months.</Text>
                                    <View className='flex flex-row items-center gap-x-2'>
                                        <Checkbox value={isChecked} onValueChange={setChecked}
                                                  color={isChecked ? '#AE2111' : undefined}/>
                                        <Text>I have read and agreed to the terms and conditions.</Text>
                                    </View>
                                </View>
                                <TouchableOpacity
                                    disabled={isChecked ? false : true}
                                    onPress={() => {
                                        setModalVisible(!modalVisible);
                                        navigation.removeListener;
                                        navigation.navigate("Book Appointment", {requestData: item});
                                    }}
                                    className="mt-2 bg-red-700 p-3 items-center justify-center rounded-lg">
                                    <Text className="text-[#f2f2f2] font-bold text-xl">Continue</Text>
                                </TouchableOpacity>
                            </View>
                        </SafeAreaView>
                    </Modal>
                </View>
            )

        ))
    )
}