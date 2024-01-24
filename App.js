import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './src/navigators/StackNavigator';
import { AuthComponent } from './src/context/LoginContext';
import Toast from "react-native-toast-message";
export default function App() {
  return (
    <AuthComponent>
      <NavigationContainer>
        <StackNavigator />
          <Toast />
      </NavigationContainer>
    </AuthComponent>
  );
}
