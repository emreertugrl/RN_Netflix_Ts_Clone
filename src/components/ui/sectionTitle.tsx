import React from 'react';
import {View, Text} from 'react-native';
import {Colors} from '../../theme';
import {SectionTitleProps} from '../../model/ui/sectionItem';

const SectionTitle: React.FC<SectionTitleProps> = ({title}) => {
  return (
    <View style={{marginVertical: 10}}>
      <Text style={{fontSize: 18, color: Colors.WHITE, fontWeight: '500'}}>
        {title}
      </Text>
    </View>
  );
};

export default SectionTitle;
