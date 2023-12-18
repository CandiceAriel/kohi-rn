/* eslint-disable prettier/prettier */
import React from 'react';
import HomePage from '../screens/HomePage';
import CartPage from '../screens/CartPage';

import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function Stacks() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name='Home' 
        component={HomePage} 
        options={{ headerShown: false }} />
      <Stack.Screen name='Orders' component={CartPage} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

export default Stacks;