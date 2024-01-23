import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import * as SecureStore from 'expo-secure-store';
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { LoginContext } from "../../context/LoginContext";
import { useContext } from "react";

export default function HomepageHospital() {
    const navigation = useNavigation();
    const { setIsLoggedIn, isLoggedIn } = useContext(LoginContext);

    const handleLogout = async () => {
        try {
            await SecureStore.deleteItemAsync("accessToken");
            await SecureStore.deleteItemAsync("role");
            setIsLoggedIn(null)

            // console.log(isLoggedIn, "token");
            navigation.navigate("Login");
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <SafeAreaView>
            <TouchableOpacity onPress={handleLogout}>
                <View className="">
                    <View style={styles.card} className="flex flex-row">
                        <View className="mr-3">
                            <AntDesign name="logout" size={23} color="black" />
                        </View>
                        <View className="">
                            <Text className="text-lg font-medium"> Sign Out</Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    borderBottom: {
        borderBottomColor: "red",
        borderBottomWidth: 1,
    },
    card: {
        backgroundColor: "#F2F2F2",
        // backgroundColor: "yellow",
        borderRadius: 3,
        marginTop: 20,
        padding: 12,
        // shadowColor: "#000",
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
        shadowRadius: 1,
    },
});
