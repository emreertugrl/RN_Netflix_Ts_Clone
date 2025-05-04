/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import messaging from '@react-native-firebase/messaging';

// Arka plan mesajlarını yakalamak için handler
messaging().setBackgroundMessageHandler(async remoteMessage => {
  console.log('📩 Arka planda mesaj alındı:', remoteMessage);
});

AppRegistry.registerComponent(appName, () => App);
