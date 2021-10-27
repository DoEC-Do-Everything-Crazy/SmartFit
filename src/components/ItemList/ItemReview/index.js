import {Block, Text} from '@components';

import {Image} from 'react-native';
import {Rating} from 'react-native-ratings';
import React from 'react';
import {icons} from '@assets';
import {useSelector} from 'react-redux';
import {useStyles} from './styles';
import {useTheme} from '@theme';

const ItemReview = ({name, image, content, date, props}) => {
  const {
    theme: {theme: themeStore},
  } = useSelector(stateRoot => stateRoot.root);
  const styles = useStyles(props, themeStore);
  const theme = useTheme(themeStore);
  return (
    <Block marginBottom={15}>
      <Image
        style={styles.image}
        source={{
          uri:
            image ||
            'https://pbs.twimg.com/media/EYVxlOSXsAExOpX?format=jpg&name=small',
        }}
      />
      <Block
        marginLeft={25}
        marginTop={15}
        paddingTop={30}
        paddingHorizontal={20}
        borderRadius={8}
        backgroundColor={theme.colors.border}>
        <Text size={18} fontType="bold">
          {name || 'Default Name'}
        </Text>
        <Block row space="between" alignCenter>
          <Rating
            type="custom"
            ratingCount={5}
            imageSize={18}
            tintColor={theme.colors.border}
            ratingBackgroundColor={theme.colors.lightGray}
          />
          <Text size={14} color={theme.colors.gray}>
            {date.substring(0, 10) || 'June 5, 2019'}
          </Text>
        </Block>
        <Text marginTop={10}>{content}</Text>
        <Block row justifyEnd alignCenter marginVertical={10}>
          <Text size={14} marginRight={5} color={theme.colors.gray}>
            Helpful
          </Text>
          <Image source={icons.like} />
        </Block>
      </Block>
    </Block>
  );
};

export default ItemReview;
