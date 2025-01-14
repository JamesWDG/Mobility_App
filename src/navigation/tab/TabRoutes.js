import Home from '../../screens/home/Home';
import Icon from 'react-native-vector-icons/Feather'
import Notifications from '../../screens/notifications/Notifications';
import Chats from '../../screens/chats/Chats';
import Wallet from '../../screens/wallet/Wallet';
import Profile from '../../screens/profile/Profile';
export const tabRoutes = [
  {
    name: "Notifications",
    component: Notifications,
    tab_name: "Home",
    hide: false,
    icon: "bells",
  },
  {
    name: "chats",
    component: Chats,
    tab_name: "Home",
    hide: false,
    icon: "wechat",
  },
  {
    name: 'Home',
    component: Home,
    hide: true,
    icon: "home",
  },
  {
    name: "wallet",
    component: Wallet,
    tab_name: "Home",
    hide: false,
    icon: "wallet",
  },
  {
    name: "profile",
    component: Profile,
    tab_name: "Home",
    hide: false,
    icon: "user",
  },
];
