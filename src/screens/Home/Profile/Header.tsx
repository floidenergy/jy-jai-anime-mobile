import { StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { PageView, Text } from '../../../component/basic';
import Ionicons from 'react-native-vector-icons/Ionicons';
import useTheme from '../../../hooks/useTheme';
import {
  NavigationProp,
  ParamListBase,
  RouteProp,
} from '@react-navigation/native';

const Header = ({
  navigation,
  router,
}: {
  navigation: NavigationProp<ReactNavigation.RootParamList>;
  router: RouteProp<ParamListBase>;
}) => {
  const { theme } = useTheme();

  const goBack = () => navigation.goBack();

  return (
    <PageView style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={goBack}>
        <Ionicons
          style={styles.icon}
          name="chevron-back-outline"
          size={26}
          color={theme.colors.bg.secondary}
        />
        <Text style={styles.label}>Back</Text>
      </TouchableOpacity>
    </PageView>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 5,
    paddingVertical: 10,
    height: undefined,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {},
  label: {},
});
