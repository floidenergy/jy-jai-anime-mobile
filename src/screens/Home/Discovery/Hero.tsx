import {
  ImageBackground,
  StyleSheet,
  View,
  TouchableOpacity,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import LinearGradient from 'react-native-linear-gradient';
import { htmlToText } from 'html-to-text';

import animeApi from '../../../api/anime';
import { IAnilistAnimeInfo } from 'src/type/animeResponse';
import { Text } from '../../../component/basic';
import useTheme from '../../../hooks/useTheme';
import { w, height } from '../../../config/dimentions';

const Hero = () => {
  const [anime, setAnime] = useState<IAnilistAnimeInfo>();
  const { theme } = useTheme();

  useEffect(() => {
    // animeApi.getRandom().then(({ data }) => setAnime(data));
    animeApi.getTrendingAnime().then(({ data }: any) => {
      console.log('len ===', data.results.length);

      setAnime(data.results[Math.round(Math.random() * data.results.length)]);
    });
  }, []);

  // console.log(anime);

  return (
    <>
      {anime && (
        <ImageBackground source={{ uri: anime?.cover }} style={styles.cover}>
          <LinearGradient
            colors={[
              `${theme.colors.bg.primary as string}00`,
              `${theme.colors.bg.primary as string}aa`,
              theme.colors.bg.primary as string,
            ]}
            style={styles.gradient}>
            <Text numberOfLines={1} style={styles.title} lineBreakMode="tail">
              {anime.title.english || anime.title.romaji || anime.title.native}
            </Text>
            <Text numberOfLines={2} style={styles.description}>
              {htmlToText(anime.description)}
            </Text>
            <View style={styles.buttonsContainer}>
              <TouchableOpacity
                style={[
                  styles.button,
                  { backgroundColor: theme.colors.bg.secondary },
                ]}>
                <Entypo
                  name="controller-play"
                  size={24}
                  color={theme.colors.text.primary}
                />
                <Text style={styles.buttonLabel}>watch Trailer</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.button,
                  { backgroundColor: theme.colors.bg.tertiary },
                ]}>
                <Entypo
                  name="plus"
                  size={24}
                  color={theme.colors.text.primary}
                />
                <Text style={styles.buttonLabel}>add to list</Text>
              </TouchableOpacity>
            </View>
          </LinearGradient>
        </ImageBackground>
      )}
    </>
  );
};

export default Hero;

const styles = StyleSheet.create({
  cover: {
    width: '100%',
    height: height / 1.7,
    position: 'relative',
  },
  gradient: {
    position: 'absolute',
    width: '100%',
    height: '40%',
    bottom: 0,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    width: '75%',
    textAlign: 'center',
    fontSize: w * 7,
    fontWeight: 'bold',
  },
  description: {
    textAlign: 'center',
    width: '75%',
    opacity: 0.5,
  },
  buttonsContainer: {
    flexDirection: 'row',
    gap: 16,
    marginTop: 10,
  },
  button: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: "center",
    gap: 4,
    // shadowColor: '#171717',
    // shadowOffset: {width: -2, height: 4},
    // shadowOpacity: 1,
    // shadowRadius: 3,
  },
  buttonLabel: {
    textTransform: 'capitalize',
    fontWeight: 'bold'
  },
});
