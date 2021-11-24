import {Block, Text} from '@components';

import {Pressable} from 'react-native';
import React from 'react';

const LoadMore = ({...props}) => {
  const {title = 'Load more', height = 60, onPress, textColor} = props;

  return (
    <Block flex alignCenter justifyCenter height={height}>
      <Pressable onPress={onPress}>
        <Text fontType="bold" color={textColor}>
          {title}
        </Text>
      </Pressable>
    </Block>
  );
};

export default LoadMore;
