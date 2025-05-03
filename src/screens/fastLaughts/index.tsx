import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {defaultStyle} from '../../styles/defaultScreenStyle';

const FastLaughts: React.FC = () => {
  return (
    <View style={defaultStyle.container}>
      <Text>FastLaughts</Text>
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

export default FastLaughts;
