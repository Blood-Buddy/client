import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";

export default function QRCode() {
    return (
        <Modal animationType="fade" transparent={false} visible={modalVisible} onRequestClose={() => setModalVisible(!modalVisible)}>
            <SafeAreaView className='items-center justify-center'>
                <View className='items-center justify-center h-full'>
                    <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
                        <MaterialIcons name="thumb-up-off-alt" size={48} color="#AE2111" />
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </Modal>
    )
}