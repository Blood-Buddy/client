import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';
import Homepage from './src/pages/Homepage';
import Login from './src/pages/login';
import Register from './src/pages/register';

export default function App() {
  return (
    // <View className="flex-1 items-center justify-center bg-white">
    //   <Text>Open up App.js to start working on your app!</Text>
    //   <StatusBar style="auto" />
    // </View>
    // <Homepage/>
    // <Login/>
    < Register/>
  );
}
