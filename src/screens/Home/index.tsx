import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { PropsWithChildren } from 'react';
import Discovery from './Discovery';
import Search from './Search';

import TabNavigation from './Navigation';
import { ITabScreen } from '../../type/screens';
import { StyleSheet, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import useTheme from '../../hooks/useTheme';

const Tab = createBottomTabNavigator();

export default function Navigation() {
  const theme = useTheme();
  return (
    <>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarStyle: {
            position: 'fixed',
            bottom: 0,
            right: 0,
            left: 0,
            elevation: 0,
            height: 60,
            backgroundColor: theme.theme.colors.bg.primary,
          } as any,
        }}>
        {TabNavigation.map((tab: ITabScreen, index: number) => (
          <Tab.Screen
            key={index}
            name={tab.name}
            component={tab.component}
            options={{
              // ...tab.options,
              tabBarIcon: ({ focused }) => (
                <View>
                  {tab.Icon && (
                    <tab.Icon.Provider
                      name={tab.Icon!.name}
                      size={26}
                      style={{
                        color: focused
                          ? theme.theme.colors.bg.secondary
                          : theme.theme.colors.bg.inverted,
                      }}
                    />
                  )}
                </View>
              ),
            }}
          />
        ))}
      </Tab.Navigator>
    </>
  );
}

const styles = StyleSheet.create({
  tabContainer: {},
});
