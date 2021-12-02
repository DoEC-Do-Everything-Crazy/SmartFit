/* eslint-disable react-hooks/exhaustive-deps */
import {Block, Text} from '@components';
import {FlatList, Image, ScrollView} from 'react-native';
import React, {useCallback} from 'react';
import {icons, images} from '@assets';

import {Rating} from 'react-native-ratings';
import {keyExtractor} from 'utils/keyExtractor';
import {useSelector} from 'react-redux';
import {useStyles} from './styles';
import {useTheme} from '@theme';

const ItemReview = ({item, props}) => {
  const {author, image, updatedAt, rate, content, isBought} = item;

  console.log({author, image, updatedAt, rate, content, isBought});
  const {
    theme: {theme: themeStore},
  } = useSelector(stateRoot => stateRoot.root);

  const styles = useStyles(props, themeStore);
  const theme = useTheme(themeStore);

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
          <Block row space="between" alignCenter>
            <Rating
              startingValue={rate}
              type="custom"
              readonly={true}
              ratingCount={5}
              imageSize={18}
              tintColor={theme.colors.border}
              ratingBackgroundColor={theme.colors.lightGray}
            />
            <Text size={14} color={theme.colors.gray}>
              {updatedAt.substring(0, 10) || 'Month day, year'}
            </Text>
          </Block>
          <Text marginTop={10}>{content}</Text>
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
            <Text flex size={14} color={theme.colors.gray}>
              {isBought ? 'Đã mua hàng' : 'Chưa mua hàng'}
            </Text>
            <Text size={14} marginRight={8} color={theme.colors.gray}>
              Helpful
            </Text>
            <Image source={icons.like} />
          </Block>
        </Block>
      </Block>
    </Block>
  );
};

export default ItemReview;
