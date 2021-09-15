import {icons} from '@assets';
import {Block} from '@components';
import ItemCart from '@components/Common/ItemList/ItemCart';
import React, {useState} from 'react';
import {FlatList, Image} from 'react-native';
import Swipeout from 'react-native-swipeout';
import styles from './styles';

const CartList = ({DATA}) => {
  const [row, setRow] = useState(null);
  const swipeoutBtns = [
    {
      component: (
        <Block
          style={{
            flex: 1,
            justifyContent: 'center',
            marginLeft: 20,
          }}>
          <Image source={icons.addToCart} />
        </Block>
      ),
      backgroundColor: 'transparent',
      underlayColor: 'red',
    },
    {
      component: (
        <Block
          style={{
            flex: 1,
            justifyContent: 'center',
            marginRight: 20,
          }}>
          <Image source={icons.cartDelete} />
        </Block>
      ),
      backgroundColor: 'transparent',
    },
  ];
  const onSwipeOpen = index => {
    setRow(index);
  };

  const onSwipeClose = index => {
    if (index === row) {
      setRow(null);
    }
  };
  const renderItem = ({item, index}) => (
    <Swipeout
      style={styles.swipeOut}
      right={swipeoutBtns}
      onOpen={() => onSwipeOpen(index)}
      close={row !== index}
      onClose={() => onSwipeClose(index)}
      rowIndex={index}
      sectionId={0}
      autoClose={true}>
      <ItemCart
        id={item.id}
        title={item.name}
        image={item.image}
        price={item.price}
      />
    </Swipeout>
  );
  return (
    <Block flex justifyCenter>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        extraData={row}
      />
    </Block>
  );
};

export default CartList;
