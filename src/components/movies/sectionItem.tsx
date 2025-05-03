import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {SectionItemProps} from '../../model/ui/sectionItem';
import SectionTitle from '../ui/sectionTitle';
import MovieItem from './movieItem';

const SectionItem: React.FC<SectionItemProps> = ({section, data}) => {
  return (
    <View style={styles.container}>
      <SectionTitle title={section.title} />
      <FlatList
        horizontal
        data={data}
        renderItem={({item}) => <MovieItem item={item} />}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default SectionItem;
