import React from 'react';
import {View} from 'react-native';
import {MovieItemProps} from '../../model/ui/movieItem';
import CustomImage from '../ui/customImage';

const MovieItem: React.FC<MovieItemProps> = ({item}) => (
  <View>
    <CustomImage
      style={{
        width: 150,
        height: 200,
        resizeMode: 'cover',
        borderRadius: 20,
        borderWidth: 1,
        borderColor: 'white',
        margin: 5,
      }}
      path={item.poster_path}
    />
  </View>
);

export default MovieItem;
