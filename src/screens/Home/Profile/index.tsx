import { StyleSheet } from 'react-native';
import React, { useLayoutEffect } from 'react';
import { PageView, Text } from '../../../component/basic';
import {
  NavigationProp,
  ParamListBase,
  RouteProp,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import Header from './Header';

const Profil = ({
  navigation,
  router,
}: {
  navigation: NavigationProp<ReactNavigation.RootParamList>;
  router: RouteProp<ParamListBase>;
}) => {
  
  // useLayoutEffect(() => {
  //   navigation.setOptions({
  //     header: () => <Header navigation={navigation} router={router} />
  //   })
  // }, [])

  return (
    <PageView>
      {/* <Text>Profil</Text> */}
    </PageView>
  );
};

export default Profil;

const styles = StyleSheet.create({});
