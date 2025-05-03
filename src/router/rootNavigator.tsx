import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TabNavigator from './tabNavigator';
import Routes from '../utils/routes';
import {Colors} from '../theme';

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
    </Stack.Navigator>
  );
};
export default RootNavigator;
