import {View, Text, Image} from 'react-native';
import React from 'react';
import Home from './src/pages/Home';
import Detail from './src/pages/Detail';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Detail" component={Detail} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
