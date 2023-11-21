import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Splash from './src/screens/splash';
import OnboardingScreen from './src/screens/onboardingScreen';
import CustomButtons from './src/screens/onboardingScreen';
import Auth from './src/screens/Auth';
const Stack = createStackNavigator();
import {MMKV} from 'react-native-mmkv';
import DashBoard from './src/screens/dashBoard';

export const storage = new MMKV();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="splash" component={Splash} />
        <Stack.Screen name="OnboardingScreen" component={CustomButtons} />
        <Stack.Screen name="auth" component={Auth} />
        <Stack.Screen name="dashBoard" component={DashBoard} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
