import { Text, TouchableOpacity, View } from "react-native";

export default function RequestCard() {
    return (
        <View className="mt-4 bg-white rounded-lg shadow-md">
            <Text className='text-red-700 mt-6 mx-6 text-2xl font-bold'>Rumah Sakit Pondok Indah</Text>
            <Text className='mt-2 mx-6 '>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis provident aliquam tenetur exercitationem possimus aspernatur molestias perferendis assumenda corrupti, veniam saepe earum similique tempore neque facilis quibusdam dolorem. Minus, quas?</Text>
            <View className="flex-row-reverse">
                <TouchableOpacity className="my-4 mx-6 bg-red-700 py-2 rounded-lg w-36 items-center justify-center">
                    <Text className="text-[#f2f2f2] font-bold">Book Appointment</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}