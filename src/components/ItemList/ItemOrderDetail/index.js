import {Block, Text} from '@components';
import React from 'react';
import {Image} from 'react-native';
import {useSelector} from 'react-redux';
import {useStyles} from './styles';
import {useTheme} from '@theme';

const ItemOrderDetail = ({picture, title, group_id, index, props}) => {
  const {
    theme: {theme: themeStore},
  } = useSelector(stateRoot => stateRoot.root);
  const styles = useStyles(props, themeStore);
  const theme = useTheme(themeStore);

  return (
    <Block
      flex
      row
      key={index}
      radius={8}
      marginTop={16}
      backgroundColor={theme.colors.border}>
      <Block height="100%">
        <Image
          source={{
            uri: 'https://i.pinimg.com/564x/5a/93/ce/5a93ceca8cf5277d2fc552ad4092a571.jpg',
          }}
          height="100%"
          style={styles.image}
        />
      </Block>
      <Block width="100%" padding={16}>
        <Text size={16} fontType="bold" marginBottom={5}>
          Pullover
        </Text>
        <Block marginLeft={10} row>
          <Text>Mango</Text>
        </Block>
        <Block row>
          <Block row>
            <Text>Color:</Text>
            <Text marginLeft={10} fontType="bold">
              Gray
            </Text>
          </Block>
          <Block row marginLeft={40}>
            <Text>Size:</Text>
            <Text marginLeft={10} fontType="bold">
              L
            </Text>
          </Block>
        </Block>

        <Block row flex={1} paddingTop={5}>
          <Block row flex={1} justifyStart>
            <Text>Units:</Text>
            <Text marginLeft={10} fontType="bold">
              1
            </Text>
          </Block>

          <Block row flex={1} justifyEnd alignCenter>
            <Text fontType="bold">51$</Text>
          </Block>
        </Block>
      </Block>
    </Block>
  );
};

export default ItemOrderDetail;
