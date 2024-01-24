import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { WebView } from 'react-native-webview';
import React, {useContext, useEffect, useRef, useState} from "react";




// const token = await SecureStore.getItemAsync('accessToken');
// console.log('Token fetched:', token);

export default function AddBalance({navigation}) {
  const apiUrl = process.env.EXPO_PUBLIC_API_URL;


  let [newWebView, setNewWebView] = useState(null);
  const webViewRef = useRef(null);
  const handleWebViewNavigationStateChange = (newNavState) => {
    const { url } = newNavState;
    console.log(url, "url");
    if (!url) return;

    if (url.includes('blood')) {
      navigation.removeListener;
      navigation.navigate("Homepage Hospital");
    }

    return;
  }


  // console.log(hospitalProfile);
  return (


      <WebView
          ref={webViewRef}
          source={{uri: 'https://checkout-staging.xendit.co/latest/65b11a682f2ee0ac6d481dcc'}}
          onNavigationStateChange={(newNavState) => handleWebViewNavigationStateChange(newNavState)}
      />
    // <SafeAreaView className="bg-red-700">
    //
    // </SafeAreaView>
  );
}
