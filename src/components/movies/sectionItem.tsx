import React from 'react';
import {View, FlatList} from 'react-native';
import {SectionItemProps} from '../../model/ui/sectionItem';
import SectionTitle from '../ui/sectionTitle';
import MovieItem from './movieItem';

const SectionItem: React.FC<SectionItemProps> = ({section, data}) => {
  const getMovieByType = (type: number): string => {
    switch (type) {
      case 1:
      case 2:
        return 'tv';
      case 3:
      case 4:
        return 'movie';
      default:
        return '';
    }
  };

  return (
    <View>
      <SectionTitle title={section.title} />
      <FlatList
        horizontal
        data={data}
        renderItem={({item}) => (
          <MovieItem item={item} type={getMovieByType(section.id)} />
        )}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

export default SectionItem;
