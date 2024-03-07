import { Pressable, SafeAreaView, StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react';
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
import Body from './Body';
import { IAnilistAnimeInfo } from 'src/type/animeResponse';
import animeApi from '../../../api/anime';

const Index = ({
  navigation,
  router,
}: {
  navigation: NavigationProp<ReactNavigation.RootParamList>;
  router: RouteProp<ParamListBase>;
}) => {
  const [searchText, setSearchText] = useState<string>();
  const [heroAnime, setHeroAnime] = useState<IAnilistAnimeInfo>();
  const [trendingAnime, setTrendingAnime] = useState<IAnilistAnimeInfo[]>();
  const [popularAnime, setPopularAnime] = useState<IAnilistAnimeInfo[]>();

  useEffect(() => {
    animeApi
      .getPopularAnime()
      .then(({ data }) => setPopularAnime(data.results));
    animeApi
      .getTrendingAnime()
      .then(({ data }) => setTrendingAnime(data.results));
  }, []);

  return (
    <ScrollPageView style={styles.container}>
      <SafeAreaView>
        <Hero />
        <Body Trending={trendingAnime} Popular={popularAnime} />
      </SafeAreaView>
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
