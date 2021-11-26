import {Block, Text} from '@components';
import {Image, Pressable} from 'react-native';

import React from 'react';
import {routes} from '@navigation/routes';
import {useNavigation} from '@react-navigation/core';
import {useSelector} from 'react-redux';
import {useStyles} from './styles';
import {useTheme} from '@theme';

const ItemLesson = ({...props}) => {
  const navigation = useNavigation();
  const {
    theme: {theme: themeStore},
  } = useSelector(stateRoot => stateRoot.root);
  const theme = useTheme(themeStore);
  const styles = useStyles(themeStore);
  const {item} = props;

  console.log(item);
  const handleOnLessonPress = () => {
    console.log('navigates');
    navigation.navigate(routes.TAB_STEP, {
      id: item._id,
      image: item.image[0],
    });
  };

  return (
    <Pressable onPress={handleOnLessonPress}>
      <Block
        row
        alignCenter
        padding={16}
        radius={8}
        borderWidth={2}
        space="between"
        borderColor={theme.colors.yellowFood}
        backgroundColor={theme.colors.white}>
        <Image style={styles.image} source={{uri: item.image[0]}} />
        <Text marginLeft={16} size={16} fontType="bold">
          {item.name}
        </Text>
      </Block>
    </Pressable>
  );
};

export default ItemLesson;
