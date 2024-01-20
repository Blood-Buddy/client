import { Text, TouchableOpacity } from "react-native";

export default function WideButton({ label }) {
    return (
        <TouchableOpacity className="mt-2 bg-red-700 p-3 items-center justify-center rounded-lg">
            <Text className="text-[#f2f2f2] font-bold text-xl">{label}</Text>
        </TouchableOpacity>
    )
}