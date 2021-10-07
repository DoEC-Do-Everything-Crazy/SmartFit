import {AddTocart, CartDelete} from '@assets/icons';
import {Block} from '@components';
import ItemCart from '@components/ItemList/ItemCart';
import React, {useState} from 'react';
import {FlatList} from 'react-native';
import Swipeout from 'react-native-swipeout';
import {useSelector} from 'react-redux';
import {useStyles} from './styles';

const CartList = ({DATA, props}) => {
  const [row, setRow] = useState(null);
  const {
    theme: {theme: themeStore},
  } = useSelector(stateRoot => stateRoot.root);
  const styles = useStyles(props, themeStore);

  const swipeoutBtns = [
    {
      component: (
        <Block style={styles.component_icon}>
          <AddTocart />
        </Block>
      ),
      underlayColor: 'transparent',
    },
    {
      component: (
        <Block style={styles.component_icon}>
          <CartDelete />
        </Block>
      ),
      underlayColor: 'transparent',
      onPress: () => {},
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
