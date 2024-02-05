import { SafeAreaView, StyleSheet, View, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from "react";
import { PageView, Text, TextInput } from '../../../component/basic';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { BOOKS } from '@consumet/extensions';
import useTheme from '../../../hooks/useTheme';
// import animeApi from '../../../api/anime';

const Filter = () => {
  const { theme } = useTheme();
  const [anime, setAnime] = useState();

  const onFilterPress = () => {};

  return (
    <SafeAreaView>
      <View style={styles.searchBar}>
        <TextInput
          style={styles.textInput}
          onSubmit={() => {}}
          placeHolder="Any anime in mind?"
        />
        <TouchableOpacity
          onPress={onFilterPress}
          style={[
            styles.filterButton,
            { backgroundColor: theme.colors.bg.secondary },
          ]}>
          <Ionicons
            style={styles.icon}
            name="filter-outline"
            size={28}
            color={'white'}
          />
        </TouchableOpacity>
      </View>
      <View>
        {/* {Object.keys(animeApi).map((key: string, index: number) => (
          <Text key={index}>{key}</Text>
        ))} */}
      </View>
    </SafeAreaView>
  );
};

export default Filter;

const styles = StyleSheet.create({
  container: {},
  searchBar: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 10,
  },
  textInput: {
    width: '85%',
  },
  filterButton: {
    padding: 8,
    borderRadius: 8,
  },
  icon: {
    width: '100%',
  },
});
