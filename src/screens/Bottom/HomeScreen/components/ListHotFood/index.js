import {Block, Text} from '@components';
import ItemHotFood from '@components/ItemList/ItemHotFood';
import React from 'react';
import {FlatList, Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import {routes} from '@navigation/routes';
import {useSelector} from 'react-redux';
import {useTheme} from '@theme';
// import {DATA_RECOMMENDED} from '@constants';
import {useStyles} from './styles';

const DATA_FOOD = [
  {
    _id: 1,
    title: 'Dumbbell',
    desc: 'This is Dumbbell ',
    image: 'https://dungcutheduc.vn/images/Ta-tay-thao-lap.jpg',
  },
  {
    _id: 2,
    title: 'Pull up bar',
    desc: 'This is Pull up bar ',
    image: 'https://thethao87.com/wp-content/uploads/2020/10/xa-don.jpg',
  },
  {
    _id: 3,
    title: 'Abdominal roller',
    desc: 'This is Abdominal roller ',
    image:
      'https://thethaokhoe.com/wp-content/uploads/2018/03/e0fc9a75d630326e6b21-2.jpg',
  },
  {
    _id: 4,
    title: 'Jump-rope',
    desc: 'This is Jump-rope ',
    image: 'https://m.media-amazon.com/images/I/71Cw+Upeo0L._SX425_.jpg',
  },
  {
    _id: 5,
    title: 'DumbYoga Matell',
    desc: 'This is Yoga Mat ',
    image:
      'https://www.joopzy.com/wp-content/uploads/2020/06/1830-610-6mm-TPE-Yoga-Mat-with-Position-Line-Non-Slip-Carpet-Mat-For-Beginner-Environmental.jpg',
  },

  {
    _id: 6,
    title: 'Kettlebell',
    desc: 'This is Kettlebell ',
    image:
      'https://www.technogym.com/media/catalog/product/cache/1/image/602f0fa2c1f0d1ba5e241f914e856ff9/v/i/vinyl_coated_kettlebell_hero.jpg',
  },
  {
    _id: 7,
    title: 'Resistance Bands',
    desc: 'Resistance Bands',
    image:
      'https://www.innovagoods.com/wp-content/uploads/2020/10/bandas-elasticas-de-resistencia-multifuncion-con-guia-de-ejercicios-tensport-innovagoods_135790-484.jpg',
  },
];

const ListHotFood = props => {
  const themeStore = useSelector(state => state.root.theme.theme);
  const theme = useTheme(themeStore);
  const styles = useStyles(props, themeStore);

  const navigation = useNavigation();
  const _renderItem = ({item, index}) => (
    <ItemHotFood
      index={index}
      _id={item._id}
      title={item.title}
      desc={item.desc}
      image={item.image}
    />
  );

  return (
    <Block flex marginTop={32} marginBottom={20}>
      <Block
        row
        alignCenter
        marginHorizontal={16}
        marginBottom={20}
        space="between">
        <Text size={20} fontType="bold" color={theme.colors.iconInf}>
          Food
        </Text>
        <Pressable
          onPress={() => navigation.navigate(routes.PRODUCT_LIST_SCREEN)}>
          <Text size={17} style={styles.link}>
            See all
          </Text>
        </Pressable>
      </Block>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        nestedScrollEnabled
        data={DATA_FOOD}
        keyExtractor={(item, index) => index}
        renderItem={_renderItem}
      />
    </Block>
  );
};

export default ListHotFood;
