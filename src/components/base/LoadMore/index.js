import {Block, Text} from '@components';

import {Pressable} from 'react-native';
import React from 'react';
import {useTranslation} from 'react-i18next';

const LoadMore = ({...props}) => {
  const {t} = useTranslation();
  const {title, height, onPress, textColor} = props;

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
