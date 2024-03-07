import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { PropsWithChildren } from 'react';
import Home from './screens/Home';
import Search from './screens/Home/Search';

import TabNavigation from './config/navigationStack';
import { ITabScreen } from './type/screens';
import { StyleSheet, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './store';
import useTheme from './hooks/useTheme';

const Stack = createNativeStackNavigator();

export default function Navigation() {
  const theme = useTheme();
  return (
    <>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}>
        {TabNavigation.map((tab: ITabScreen, index: number) => (
          <Stack.Screen
            key={index}
            name={tab.name}
            component={tab.component}
            options={{ ...(tab.options as any) }}
          />
        ))}
      </Stack.Navigator>
    </>
  );
}

const styles = StyleSheet.create({
  tabContainer: {},
});
