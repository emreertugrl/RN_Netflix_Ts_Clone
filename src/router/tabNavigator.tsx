import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Routes from '../utils/routes';
import {Home, Downloads, FastLaughts, Games, NewHot} from '../screens/';
import {
  Home as HomeIcon,
  DirectDown,
  Game,
  TrendUp,
  EmojiHappy,
  SearchNormal1,
  User,
} from 'iconsax-react-nativejs';
import {Colors} from '../theme';
import {Image, Pressable, View} from 'react-native';

const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerLeft: () => (
          <Image
            source={require('../assets/images/netflixIcon.png')}
            style={{width: 50, height: 50}}
          />
        ),
        headerRight: () => (
          <View style={{flexDirection: 'row', paddingHorizontal: 10, gap: 10}}>
            <Pressable>
              <SearchNormal1 color={Colors.WHITE} size={28} />
            </Pressable>
            <Pressable>
              <User color={Colors.WHITE} size={28} />
            </Pressable>
          </View>
        ),
        headerStyle: {
          backgroundColor: Colors.BLACK,
        },
        headerTintColor: Colors.WHITE,
        tabBarStyle: {
          backgroundColor: Colors.BLACK,
        },
        tabBarIcon: ({focused, color, size}) => {
          const iconProps = {
            size,
            color,
            variant: focused ? 'Bold' : 'Outline',
          };
          switch (route.name) {
            case Routes.HOME:
              return <HomeIcon {...iconProps} />;
            case Routes.GAMES:
              return <Game {...iconProps} />;
            case Routes.NEWHOT:
              return <TrendUp {...iconProps} />;
            case Routes.DOWNLOADS:
              return <DirectDown {...iconProps} />;
            case Routes.FASTLAUGHTS:
              return <EmojiHappy {...iconProps} />;
            default:
              return null;
          }
        },
        tabBarActiveTintColor: Colors.WHITE,
        tabBarInactiveTintColor: Colors.GRAY,
      })}>
      <Tab.Screen name={Routes.HOME} component={Home} />
      <Tab.Screen name={Routes.GAMES} component={Games} />
      <Tab.Screen name={Routes.NEWHOT} component={NewHot} />
      <Tab.Screen name={Routes.DOWNLOADS} component={Downloads} />
      <Tab.Screen name={Routes.FASTLAUGHTS} component={FastLaughts} />
    </Tab.Navigator>
  );
}
export default TabNavigator;
