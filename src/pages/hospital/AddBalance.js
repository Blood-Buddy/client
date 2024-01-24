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

export default function AddBalance({navigation, route}) {
  const apiUrl = process.env.EXPO_PUBLIC_API_URL;
  let {url} = route.params

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


  return (


      <WebView
          ref={webViewRef}
          source={{uri: url}}
          onNavigationStateChange={(newNavState) => handleWebViewNavigationStateChange(newNavState)}
      />

  );
}
