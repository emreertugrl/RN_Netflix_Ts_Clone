import React from 'react';
import {Image} from 'react-native';
import {IMAGE_BASE_URL} from '../../service/urls';
import {CustomImageProps} from '../../model/ui/customImage';

const CustomImage: React.FC<CustomImageProps> = props => {
  const {path, style} = props;
  return (
    <Image
      source={{
        uri: `${IMAGE_BASE_URL}${path}`,
        headers: {
          Accept: 'application/json',
          Authorization: `Bearer ${process.env.IMDB_API_TOKEN}`,
        },
      }}
      style={style}
    />
  );
};

export default CustomImage;
