import {icons} from '@assets';
import {Block, Text} from '@components';
import {theme} from '@theme';
import React from 'react';
import {Image} from 'react-native';
import {Rating} from 'react-native-ratings';
import styles from './styles';

const ItemReview = ({name, image}) => {
  return (
    <Block marginBottom={15}>
      <Image style={styles.image} source={{uri: image}} />
      <Block
        marginLeft={25}
        marginTop={15}
        paddingTop={30}
        paddingHorizontal={20}
        borderRadius={8}
        backgroundColor={theme.colors.white}>
        <Text size={18} fontType="bold">
          {name}
        </Text>
        <Block row space="between" alignCenter>
          <Rating
            type="custom"
            ratingCount={5}
            imageSize={18}
            tintColor={theme.colors.white}
            ratingBackgroundColor={theme.colors.lightGray}
          />
          <Text size={14} color={theme.colors.gray}>
            June 5, 2019
          </Text>
        </Block>
        <Text marginTop={10}>
          The dress is great! Very classy and comfortable. It fit perfectly! I'm
          5'7" and 130 pounds. I am a 34B chest. This dress would be too long
          for those who are shorter but could be hemmed. I wouldn't recommend it
          for those big chested as I am smaller chested and it fit me perfectly.
          The underarms were not too wide and the dress was made well.
        </Text>
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
