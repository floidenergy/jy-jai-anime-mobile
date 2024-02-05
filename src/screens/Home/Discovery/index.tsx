import { Pressable, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import {
  Text,
  TextInput,
  PageView,
  ScrollPageView,
} from '../../../component/basic';
import {
  NavigationProp,
  ParamListBase,
  RouteProp,
} from '@react-navigation/native';

import consumet from '@consumet/extensions';
import Filter from './Filter';
import Hero from './Hero';

const Index = ({
  navigation,
  router,
}: {
  navigation: NavigationProp<ReactNavigation.RootParamList>;
  router: RouteProp<ParamListBase>;
}) => {
  const [searchText, setSearchText] = useState<string>();

  return (
    <ScrollPageView style={styles.container}>
      <Hero />
      <Filter />
    </ScrollPageView>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: {
    // paddingVertical: 8,
    // paddingHorizontal: 8
  },
});
