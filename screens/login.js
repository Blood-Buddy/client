import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, Text, View } from "react-native";

export default function Login() {
  return (
    <View style={styles.container}>
      <Image source={require("../assets/logo.png")} style={styles.logo} />
      {/* <StatusBar style="auto" /> */}
      <Text style={styles.textSignIn}>Sign In </Text>
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
  logo: {
    width: 250,
    height: 250,
    borderRadius: 500,
    top: -200,
  },
  textSignIn: {
    top: -220,
    width: 300,
    fontSize: 25,
    left: 0
    
  },
});
