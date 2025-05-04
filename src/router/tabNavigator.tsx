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
  Notification,
} from 'iconsax-react-nativejs';
import {Colors} from '../theme';
import {Image, Pressable, Text, View} from 'react-native';
import {useAppSelector} from '../store/hooks';

const Tab = createBottomTabNavigator();

function TabNavigator() {
  const {notificationCount} = useAppSelector(state => state.notifications);

  return (
    <Tab.Navigator
      screenOptions={({route, navigation}) => ({
        headerLeft: () => (
          <Image
            source={require('../assets/images/netflixIcon.png')}
            style={{width: 50, height: 50}}
          />
        ),
        headerRight: () => (
          <View
            style={{
              flexDirection: 'row',
              paddingHorizontal: 10,
              gap: 10,
            }}>
            <Pressable
              onPress={() => navigation.navigate(Routes.NOTIFICATIONS)}>
              <Notification color={Colors.WHITE} size={28} />
              {notificationCount > 0 && (
                <View
                  style={{
                    right: -12,
                    top: -15,
                    backgroundColor: Colors.RED,
                    borderRadius: 1000,
                    position: 'absolute',
                    padding: 2,
                    width: 25,
                    height: 25,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text
                    style={{
                      color: Colors.WHITE,
                      fontSize: 12,
                      fontWeight: 'bold',
                    }}>
                    {notificationCount}
                  </Text>
                </View>
              )}
            </Pressable>
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
