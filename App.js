import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './src/navigators/StackNavigator';
import { AuthComponent } from './src/context/LoginContext';
export default function App() {
  return (
    <AuthComponent>
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </AuthComponent>
  );
}
