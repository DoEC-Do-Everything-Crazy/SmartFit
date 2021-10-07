import {icons, images} from '@assets';
import {Block, Text} from '@components';
import React from 'react';
import {Image} from 'react-native';
import {useSelector} from 'react-redux';
import {useStyles} from './styles';
import {useTheme} from '@theme';
import {width} from '@utils/responsive';

const ItemProduct = ({picture, title, group_id, index, props}) => {
  const {
    theme: {theme: themeStore},
  } = useSelector(stateRoot => stateRoot.root);
  const styles = useStyles(props, themeStore);
  const theme = useTheme(themeStore);

  return (
    <Block
      row
      margin={16}
      padding={16}
      radius={8}
      borderWidth={2}
      borderColor={theme.colors.yellowFood}
      backgroundColor={theme.colors.white}>
      <Block marginLeft={width / 4}>
        <Text size={16} fontType="bold">
          Mixed Mixed Mixed Mixed
        </Text>
        <Text marginTop={5}>Fake food, No healthy</Text>
        <Text size={20} fontType="bold" marginTop={20}>
          $ 3,99
        </Text>
      </Block>
      <Image source={images.food} style={styles.image} />
      <Block
        absolute
        bottom={-16}
        right={-16}
        alignCenter
        justifyCenter
        width={32}
        height={32}
        radius={8}
        borderWidth={2}
        borderColor={theme.colors.yellowFood}
        backgroundColor={theme.colors.white}>
        <Image source={icons.plus} style={styles.iconPlus} />
      </Block>
    </Block>
  );
};

export default ItemProduct;
