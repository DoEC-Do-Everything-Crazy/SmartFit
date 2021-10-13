import {Block, Text} from '@components';
import React from 'react';
import {Image, Pressable, Alert} from 'react-native';
import {useSelector} from 'react-redux';
import {useStyles} from './styles';
import {useTheme} from '@theme';
import {useNavigation} from '@react-navigation/core';
import {HeartLine, Ratting} from '@assets/icons';
import {images} from '@assets';
import {width} from '@utils/responsive';

const ItemRecommended = ({_id, title, desc, image, index, props}) => {
  const {
    theme: {theme: themeStore},
  } = useSelector(stateRoot => stateRoot.root);
  const styles = useStyles(props, themeStore);
  const theme = useTheme(themeStore);
  const navigation = useNavigation();
  return (
    <Pressable onPress={() => Alert.alert('Chưa có')}>
      <Block
        flex
        key={index}
        backgroundColor={theme.colors.border}
        style={styles.container}
        radius={8}
        padding={16}
        marginRight={10}>
        <Block flex row>
          <Block row flex>
            <Block
              row
              alignCenter
              backgroundColor={theme.colors.recommended}
              paddingHorizontal={10}
              radius={5}>
              <Ratting />
              <Text fontType="bold" color={theme.colors.white} marginLeft={5}>
                4.5
              </Text>
            </Block>
          </Block>
          <Block justifyEnd>
            <HeartLine color={theme.colors.lightGray} />
          </Block>
        </Block>
        <Block flex>
          <Text
            marginTop={10}
            size={24}
            color={theme.colors.text}
            numberOfLines={1}
            fontType="bold">
            Fit Equipment
          </Text>
        </Block>
        <Block alignCenter flex marginTop={30}>
          <Image source={images.equipment1} style={styles.image} />
          <Block width={width / 2} />
        </Block>
        <Block height={width / 9} />
        <Block row flex>
          <Block style={styles.space} />
          <Block
            flex
            backgroundColor={theme.colors.recommended}
            alignCenter
            radius={5}>
            <Text
              size={17}
              numberOfLines={1}
              fontType="bold"
              color={theme.colors.white}>
              $2000
            </Text>
          </Block>
        </Block>
      </Block>
    </Pressable>
  );
};

export default ItemRecommended;
