import {AddToWishList, CartDelete} from '@assets/icons';
import React, {useEffect, useState} from 'react';
import {addWishListItem, removeCartItem} from 'reduxs/reducers';
import {useDispatch, useSelector} from 'react-redux';

import {Block} from '@components';
import {FlatList} from 'react-native';
import ItemCart from '@components/ItemList/ItemCart';
import Swipeout from 'react-native-swipeout';
import {useStyles} from './styles';

const CartList = ({...props}) => {
  const dispatch = useDispatch();
  const [row, setRow] = useState(null);
  const {
    theme: {theme: themeStore},
    cart: {cart},
  } = useSelector(stateRoot => stateRoot.root);
  const styles = useStyles(props, themeStore);

  const swipeoutBtns = [
    {
      component: (
        <Block style={styles.component_icon}>
          <AddToWishList />
        </Block>
      ),
      underlayColor: 'transparent',
      onPress: () => {
        dispatch(addWishListItem({addItem: cart[row]}));
      },
    },
    {
      component: (
        <Block style={styles.component_icon}>
          <CartDelete />
        </Block>
      ),
      underlayColor: 'transparent',
      onPress: () => {
        dispatch(removeCartItem({removeItem: cart[row]}));
      },
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
      <ItemCart item={item} />
    </Swipeout>
  );
  return (
    <Block flex justifyCenter paddingTop={20}>
      <FlatList
        data={cart}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        extraData={row}
      />
    </Block>
  );
};

export default CartList;
