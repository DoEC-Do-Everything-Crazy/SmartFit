import {Block, Text} from '@components';

import {Pressable} from 'react-native';
import React from 'react';
import {routes} from '@navigation/routes';
import {useNavigation} from '@react-navigation/core';
import {useSelector} from 'react-redux';
import {useTheme} from '@theme';

const ItemLesson = ({...props}) => {
  const navigation = useNavigation();
  const {
    theme: {theme: themeStore},
  } = useSelector(stateRoot => stateRoot.root);
  const theme = useTheme(themeStore);

  const {item} = props;

  const handleOnLessonPress = () => {
    console.log('navigates');
    navigation.navigate(routes.TAB_STEP, {
      id: item._id,
    });
  };

  return (
    <Pressable onPress={handleOnLessonPress}>
      <Block
        row
        padding={16}
        radius={8}
        borderWidth={2}
        borderColor={theme.colors.yellowFood}
        backgroundColor={theme.colors.white}>
        <Text size={16} fontType="bold">
          {item.name}
        </Text>
      </Block>
    </Pressable>
  );
};

export default ItemLesson;
