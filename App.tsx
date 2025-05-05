import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RootNavigator from './src/router/rootNavigator';
import {Provider} from 'react-redux';
import store from './src/store';

const App: React.FC = () => {
  const linking = {
    prefixes: ['http://www.netflix.com', 'https://www.netflix.com'],
    config: {
      screens: {
        TAB: '',
        movieDetail: 'detail/:mId/:type', // MOVIEDETAIL string kısmı buranın key olur
      },
    },
  };
  return (
    <Provider store={store}>
      <NavigationContainer linking={linking}>
        <RootNavigator />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
