/* eslint-disable prettier/prettier */
import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import Stacks from './lib/routes';
import { Provider } from 'react-redux';
import { store } from './lib/redux/store';

const App: React.FC = () => (
  <Provider store={store}>
    <NavigationContainer>
      <StatusBar barStyle="light-content" />
      <Stacks />
    </NavigationContainer>
  </Provider>
  
);

export default App;