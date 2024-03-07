import {
  ActivityIndicator,
  StyleSheet,
  View,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Text } from '../../../component/basic';
import { IAnilistAnimeInfo } from 'src/type/animeResponse';
import useTheme from '../../../hooks/useTheme';
import { h, w } from '../../../config/dimentions';
import { useNavigation } from '@react-navigation/native';

interface Props {
  Trending?: IAnilistAnimeInfo[];
  Popular?: IAnilistAnimeInfo[];
}

const Section = ({
  title,
  animesList,
}: {
  title: string;
  animesList: IAnilistAnimeInfo[];
}) => {
  const { theme } = useTheme();
  const navigation = useNavigation<any>();

  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          { backgroundColor: theme.colors.text.inverted },
        ]}>
        {title}
      </Text>
      <ScrollView
        horizontal={true}
        style={styles.scrollView}
        indicatorStyle="white"
        scrollIndicatorInsets={{ bottom: -10 }}>
        {animesList.map(anime => (
          <TouchableOpacity
            key={anime.id}
            style={styles.cardContainer}
            onPress={() => navigation.navigate('Profil', anime.id)}>
            <ImageBackground
              source={{ uri: anime.image }}
              style={styles.cardImage}>
              <Text
                style={[
                  styles.animeRate,
                  { backgroundColor: theme.colors.button.primary },
                ]}>
                {(anime.rating * 5) / 100} <AntDesign name="star" size={16} />
              </Text>
            </ImageBackground>
            <Text numberOfLines={1} style={styles.cardTitle}>
              {anime.title.english || anime.title.romaji || anime.title.native}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const Body = ({ Trending, Popular }: Props) => {
  return (
    <View style={styles.bodyContainer}>
      {Trending ? (
        <Section title={'Trending'} animesList={Trending} />
      ) : (
        <ActivityIndicator />
      )}
      {Popular ? (
        <Section title="Popular" animesList={Popular} />
      ) : (
        <ActivityIndicator />
      )}
    </View>
  );
};

export default Body;

const styles = StyleSheet.create({
  //body
  bodyContainer: {
    padding: 10,
    flex: 1,
    gap: h * 5,
  },
  // sections
  sectionContainer: {},
  sectionTitle: {
    fontSize: w * 7,
    fontWeight: 'bold',
    paddingBottom: 10,
  },
  scrollView: {},
  // card
  cardContainer: {
    // height: h * 25,
    width: w * 30,
    marginRight: 10,
  },
  cardImage: {
    // height: '100%',
    width: '100%',
    aspectRatio: 9 / 16,
    objectFit: 'cover',
    borderRadius: 10,
    overflow: 'hidden',
  },
  animeRate: {
    position: 'absolute',
    right: 10,
    top: 5,
    color: 'white',
    fontSize: 18,
    paddingHorizontal: 8,
    borderRadius: 8,
  },
  cardTitle: {
    textAlign: 'center',
    fontSize: w * 4,
  },
});
