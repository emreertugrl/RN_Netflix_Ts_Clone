import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TabNavigator from './tabNavigator';
import Routes from '../utils/routes';
import {Colors} from '../theme';
import MoviesDetail from '../screens/movies/moviesDetail';

const Stack = createNativeStackNavigator();

const RootNavigator: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.BLACK,
        },
      }}>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name={Routes.TAB}
        component={TabNavigator}
      />
      <Stack.Screen
        options={{
          headerTintColor: Colors.WHITE,
        }}
        name={Routes.MOVIEDETAIL}
        component={MoviesDetail}
      />
    </Stack.Navigator>
  );
};
export default RootNavigator;
