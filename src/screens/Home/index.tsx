import { Pressable, StyleSheet, View } from 'react-native';
import React from 'react';
import consumet from '@consumet/extensions';
import { Text, PageView } from '../../component/basic';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StackNavigation from './navigationStack';
import { API_URL } from '@env';

const Stack = createNativeStackNavigator();
const Home = () => {
  return (
    <Stack.Navigator>
      {StackNavigation.map((stack, index) => (
        <Stack.Screen key={index} {...stack} />
      ))}
    </Stack.Navigator>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
});
