/* eslint-disable react-hooks/exhaustive-deps */
import {Block, Text} from '@components';
import {FlatList, Image, ScrollView} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import {icons, images} from '@assets';

import {Like} from '@assets/icons';
import {Rating} from 'react-native-ratings';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {keyExtractor} from 'utils/keyExtractor';
import {useSelector} from 'react-redux';
import {useStyles} from './styles';
import {useTheme} from '@theme';
import {useTranslation} from 'react-i18next';

const Helpful = () => {
  const {
    theme: {theme: themeStore},
  } = useSelector(stateRoot => stateRoot.root);
  const theme = useTheme(themeStore);

  const {t} = useTranslation();

  const [isClick, setIsClick] = useState(false);

  const handleOnPress = useCallback(() => {
    setIsClick(!isClick);
  }, [isClick]);

  return (
    <TouchableOpacity onPress={handleOnPress}>
      <Block row>
        <Text
          size={14}
          marginRight={8}
          color={isClick ? theme.colors.textLiked : theme.colors.text}>
          {t('helpful')}
        </Text>
        <Like color={isClick ? theme.colors.textLiked : theme.colors.text} />
      </Block>
    </TouchableOpacity>
  );
};

const ItemReview = ({item, props}) => {
  const {author, image, updatedAt, rate, content, isBought} = item;

  const {
    theme: {theme: themeStore},
  } = useSelector(stateRoot => stateRoot.root);

  const styles = useStyles(props, themeStore);
  const theme = useTheme(themeStore);

  const {t} = useTranslation();

  const _renderItem = useCallback(({item}) => {
    return (
      <Image
        style={styles.image}
        source={{
          uri: item,
        }}
      />
    );
  }, []);

  return (
    <Block>
      <Block marginTop={16}>
        <Image
          style={styles.userImage}
          source={author.photoURL ? {uri: author.photoURL} : images.unknown}
        />
        <Block
          marginLeft={25}
          marginTop={15}
          paddingTop={30}
          paddingHorizontal={20}
          borderRadius={8}
          backgroundColor={theme.colors.border}>
          <Text size={18} fontType="bold">
            {author.fullName}
          </Text>
          <Block row space="between" alignCenter marginTop={16}>
            <Rating
              startingValue={rate}
              type="custom"
              readonly={true}
              ratingCount={5}
              imageSize={18}
              tintColor={theme.colors.border}
              ratingBackgroundColor={theme.colors.lightGray}
            />
            <Text size={14} color={theme.colors.text}>
              {updatedAt.substring(0, 10) || 'Month day, year'}
            </Text>
          </Block>
          <Text marginTop={16}>{content}</Text>
          <ScrollView
            style={styles.scroll}
            horizontal
            showsHorizontalScrollIndicator={false}>
            <FlatList
              data={image}
              renderItem={_renderItem}
              horizontal={true}
              keyExtractor={keyExtractor}
            />
          </ScrollView>
          <Block row alignCenter marginVertical={16}>
            <Text flex size={14} color={theme.colors.text}>
              {isBought ? t('alreadyBought') : t('notBuyYet')}
            </Text>
            <Helpful />
          </Block>
        </Block>
      </Block>
    </Block>
  );
};

export default ItemReview;
