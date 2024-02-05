import React from 'react';
import { Provider } from 'react-redux';
// STORE
import store from './store';
// NAVIGATION
import Navigation from './Navigation';
import { NavigationContainer } from '@react-navigation/native';
import { Text } from 'react-native';

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    </Provider>
  );
}
