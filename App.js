import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Splash from './src/screens/splash';
import OnboardingScreen from './src/screens/onboardingScreen';
import CustomButtons from './src/screens/onboardingScreen';
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="splash" component={Splash} />
        <Stack.Screen name="OnboardingScreen" component={CustomButtons} />
        {/* <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Settings" component={Settings} />  */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
