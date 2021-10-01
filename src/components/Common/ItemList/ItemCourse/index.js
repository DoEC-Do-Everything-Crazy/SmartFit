import {icons} from '@assets';
import {Block, Text} from '@components';
import {theme} from '@theme';
import React from 'react';
import {Image, Pressable} from 'react-native';
import styles from './styles';

const ItemCourse = ({
  key,
  image,
  courseName,
  desc,
  ratting,
  price,
  typeName,
}) => {
  return (
    <Pressable key={key} style={styles.container}>
      <Block
        radius={5}
        borderWidth={0.3}
        marginHorizontal={10}
        height={98}
        width="95%"
        shadowColor={theme.colors.blue}
        alignCenter
        row>
        <Block>
          <Image source={{uri: image}} style={styles.image} />
          <Block
            alignCenter
            absolute
            bottom={-5}
            left={5}
            width={70}
            radius={5}
            backgroundColor={theme.colors.blue}>
            <Text
              size={12}
              marginLeft={5}
              color={theme.colors.white}
              fontType="bold">
              {price}
            </Text>
          </Block>
        </Block>
        <Block marginLeft={10} width="73%" shadow>
          <Text size={18} fontType="bold">
            {courseName}
          </Text>
          <Text numberOfLines={2}>{desc}</Text>
          <Block row alignCenter marginTop={5}>
            <Image source={icons.ratings} style={styles.icon} />
            <Text size={15} marginLeft={5}>
              {ratting}
            </Text>
            <Block
              height={15}
              width={50}
              marginLeft={10}
              radius={5}
              backgroundColor={theme.colors.red}
              alignCenter>
              <Text
                size={10}
                marginLeft={5}
                color={theme.colors.white}
                fontType="bold">
                HOT!
              </Text>
            </Block>
          </Block>
        </Block>
      </Block>
    </Pressable>
  );
};

export default ItemCourse;
