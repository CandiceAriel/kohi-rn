/* eslint-disable prettier/prettier */
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StatusBar } from 'react-native';

import Stacks from './lib/routes';



const App: React.FC = () => (
  <NavigationContainer>
    <StatusBar barStyle="light-content" />
    <Stacks />
  </NavigationContainer>
);

export default App;