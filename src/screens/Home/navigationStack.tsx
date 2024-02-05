// SCREENS
import Index from './Discovery';
import Profil from './Profile';
// TYPES
import { IStackScreen } from '../../type/screens';
// ICONS
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwsome6 from 'react-native-vector-icons/FontAwesome6';
import Fontisto from 'react-native-vector-icons/Fontisto';

const StackNavigation: IStackScreen[] = [
  { name: 'Index', component: Index, options: { headerShown: false } },
  // { name: 'Profile', component: Profil, options: { headerShown: true } },
];

export default StackNavigation;
