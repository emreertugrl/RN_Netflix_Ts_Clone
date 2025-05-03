import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {defaultStyle} from '../../styles/defaultScreenStyle';

const Games: React.FC = () => {
  return (
    <View style={defaultStyle.container}>
      <Text>Games</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});

export default Games;
