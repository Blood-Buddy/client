import { KeyboardAvoidingView, Platform, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function BookAppointment() {
    return (
        <SafeAreaView className='flex'>
            <KeyboardAvoidingView
                behavior={Platform.OS == 'ios' ? "padding" : ""}
                style={{
                    width: "100%",
                    height: "100%",
                    backgroundColor: "#F2F2F2",
                }}
            >
                <View style={{ flex: 1 , alignItems: 'center'}}>
                    <Text className='text-2xl my-2 text-red-700'>
                        Book Appointment
                    </Text>
                </View>

            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}