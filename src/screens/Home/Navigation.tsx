import { View } from 'react-native';
import Discovery from '../Home/Discovery';
import MyList from '../Home/MyList';
import Search from '../Home/Search';

// TYPES
import { ITabScreen } from '../../type/screens';
// ICONS
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwsome6 from 'react-native-vector-icons/FontAwesome6';
import Fontisto from 'react-native-vector-icons/Fontisto';

const TabNavigation: ITabScreen[] = [
  {
    name: 'Discovery',
    component: Discovery,
    Icon: { Provider: Entypo, name: 'home' },
  },
  {
    name: 'Search',
    component: Search,
    Icon: { Provider: Fontisto, name: 'search' },
  },
  {
    name: 'Mylist',
    component: MyList,
    Icon: { Provider: FontAwsome6, name: 'list' },
  },
];

/**
 * ************* bottom tab stacks navigation to add alter *************
 * Anime
 * Manga
 * Books
 * Movies
 * News
 */

export default TabNavigation;
