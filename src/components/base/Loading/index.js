import {ActivityIndicator} from 'react-native';
import {Block} from '@components';
import React from 'react';

const Loading = ({...props}) => {
  const {size, color, height} = props;
  return (
    <Block flex alignCenter justifyCenter height={height}>
      <ActivityIndicator size={size} color={color} />
    </Block>
  );
};

export default Loading;
