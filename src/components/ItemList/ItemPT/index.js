import {Block, Text} from '@components';
import {Image, Pressable} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import {Rating} from '@assets/icons';
import React from 'react';
import {useSelector} from 'react-redux';
import {useStyles} from './styles';
import {useTheme} from '@theme';
import {useTranslation} from 'react-i18next';

const ItemPT = ({onPress, name, gender, price, image, index, props}) => {
  const {
    theme: {theme: themeStore},
  } = useSelector(stateRoot => stateRoot.root);
  const styles = useStyles(props, themeStore);
  const theme = useTheme(themeStore);
  const {t} = useTranslation();
  return (
    <Block flex key={index} borderBottomWidth={0.3}>
      <Block
        radius={5}
        marginVertical={10}
        marginHorizontal={10}
        height={98}
        width="95%"
        shadowColor={theme.colors.blue}
        alignCenter
        row>
        <Image
          source={{
            uri: image,
          }}
          style={styles.image}
        />
        <Block marginLeft={15} width="70%">
          <Block row>
            <Text size={20} fontType="bold">
              {name}
            </Text>
            <Block marginLeft={15} alignCenter row>
              <Rating />
              <Text size={15} marginLeft={5}>
                0.0
              </Text>
            </Block>
          </Block>
          <Block row alignCenter>
            <Text size={15} fontType="bold">
              {t('gender')}:
            </Text>
            <Block marginLeft={5} alignCenter>
              <Text size={15} marginLeft={5}>
                {gender}
              </Text>
            </Block>
          </Block>
          <Block row alignCenter>
            <Text size={15} fontType="bold">
              {t('price')}:
            </Text>
            <Block marginLeft={5} alignCenter>
              <Text size={15} marginLeft={5}>
                ${price}
              </Text>
            </Block>
          </Block>

          <Block row alignCenter marginTop={5}>
            <Pressable onPress={onPress}>
              {themeStore === 'dark' ? (
                <LinearGradient
                  start={{x: 0, y: 0}}
                  end={{x: 1, y: 0}}
                  colors={['#70A2FF', '#54F0D1']}
                  style={styles.item}>
                  <Text
                    center
                    size={12}
                    color={theme.colors.white}
                    fontType="bold">
                    {t('readMore')}
                  </Text>
                </LinearGradient>
              ) : (
                <Block
                  width={80}
                  height={20}
                  radius={5}
                  justifyCenter
                  backgroundColor={theme.colors.blue}
                  alignCenter>
                  <Text size={12} color={theme.colors.white} fontType="bold">
                    {t('readMore')}
                  </Text>
                </Block>
              )}
            </Pressable>
          </Block>
        </Block>
      </Block>
    </Block>
  );
};

export default ItemPT;
