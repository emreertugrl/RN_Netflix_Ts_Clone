import React from 'react';
import {Pressable} from 'react-native';
import {MovieItemProps} from '../../model/ui/movieItem';
import CustomImage from '../ui/customImage';
import {useNavigation} from '@react-navigation/native';
import Routes from '../../utils/routes';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../model/navigation/types';
type NavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  typeof Routes.MOVIEDETAIL
>;

const MovieItem: React.FC<MovieItemProps> = ({item, type}) => {
  const navigation = useNavigation<NavigationProp>();
  return (
    <Pressable
      onPress={() =>
        navigation.navigate(Routes.MOVIEDETAIL, {movie: item, type: type})
      }>
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
    </Pressable>
  );
};

export default MovieItem;
