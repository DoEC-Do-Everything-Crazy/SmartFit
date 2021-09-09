import {Block, Header, Text, Button} from '@components';
import {theme} from '@theme';
import React, {useState} from 'react';
import {Rating} from 'react-native-ratings';
import ItemStats from './components/ItemStats';
import {Image, Pressable} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';
import {icons, images} from '@assets';
import {height, getSize} from '@utils/responsive';

const data = [
  {
    id: 1,
    title: 'Protein',
    stats: '60g',
  },
  {
    id: 2,
    title: 'Carbs',
    stats: '45g',
  },
  {
    id: 3,
    title: 'Vitamin',
    stats: 'A+',
  },
];

const FoodDetailsScreen = () => {
  const [seeMore, setSeemore] = useState(true);
  const _renderItem = item => (
    <ItemStats title={item.title} stats={item.stats} />
  );

  const numberOfLines = seeMore ? 0 : 2;
  const txtSeemore = seeMore ? 'Collapse' : 'See more';

  const isSeemore = () => setSeemore(!seeMore);

  return (
    <Block flex backgroundColor={theme.colors.background}>
      <Header canGoBack title="Food Details" colorTheme={theme.colors.black} />
      <Text size={30} fontType="bold" marginHorizontal={16}>
        Mixed Vegetables
      </Text>
      <Block
        row
        alignCenter
        space="between"
        paddingVertical={10}
        paddingHorizontal={16}>
        <Rating
          type="custom"
          ratingColor="#FF7F50"
          ratingCount={5}
          imageSize={24}
          tintColor={theme.colors.white}
          ratingBackgroundColor={theme.colors.lightGray}
        />
      </Block>
      <Block flex>
        <Block row alignCenter space="between">
          <Block alignCenter justifyCenter width="40%">
            {data.map(_renderItem)}
          </Block>
          <Block
            width="60%"
            style={styles.linearGradient}
            backgroundColor={theme.colors.blueLight}>
            <Image
              resizeMode="contain"
              source={icons.iHeart}
              style={styles.iconHeart}
            />
            <Block flex alignCenter justifyCenter>
              <Image source={images.food} style={styles.image} />
              <Text size={32} marginTop={20} fontType="bold">
                $ 3,99
              </Text>
            </Block>
          </Block>
        </Block>
        <Block flex marginTop={32} paddingHorizontal={16}>
          <Text
            size={16}
            numberOfLines={numberOfLines}
            color={theme.colors.textLight}
            fontType="bold">
            Fake food no healthy Fake food no healthy Fake food no healthy Fake
            food no healthy Fake food no healthy Fake food no healthy
          </Text>
          <Pressable onPress={() => isSeemore()}>
            <Text size={16} fontType="bold" color={theme.colors.orange}>
              {txtSeemore}
            </Text>
          </Pressable>
        </Block>
        <Block paddingHorizontal={16}>
          <Button
            title="BUY NOW"
            containerStyle={{backgroundColor: theme.colors.lightBlue}}
            titleStyle={{
              fontSize: getSize.m(18),
              fontWeight: 'bold',
              color: theme.colors.black,
            }}
          />
        </Block>
      </Block>
    </Block>
  );
};

export default FoodDetailsScreen;
