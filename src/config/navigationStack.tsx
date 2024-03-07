
// SCREENS
import Home from '../screens/Home'
import Profil from '../screens/Profil/Index'
// TYPES
import { ITabScreen } from '../type/screens';
// ICONS
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwsome6 from 'react-native-vector-icons/FontAwesome6';
import Fontisto from 'react-native-vector-icons/Fontisto';

const TabNavigation: ITabScreen[] = [
  { name: 'Home', component: Home },
  { name: 'Profil', component: Profil },
];

/**
 * ************* bottom tab stacks navigation to add later *************
 * Anime
 * Manga
 * Books
 * Movies
 * News
 */

export default TabNavigation;
