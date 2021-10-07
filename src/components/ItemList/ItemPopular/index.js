import {Block, Text} from '@components';

import {width} from '@utils/responsive';
import React from 'react';
import {Image, Pressable, TouchableOpacity} from 'react-native';
import {useSelector} from 'react-redux';
import {useStyles} from './styles';
import {useTheme} from '@theme';

const ItemPopular = props => {
  const {
    theme: {theme: themeStore},
  } = useSelector(stateRoot => stateRoot.root);
  const styles = useStyles(props, themeStore);
  const theme = useTheme(themeStore);
  return (
    <Pressable style={styles.press}>
      <Block
        shadow
        height={150}
        width={width / 3 - 20}
        marginHorizontal={8}
        borderRadius={8}
        marginVertical={8}
        space="between"
        backgroundColor={theme.colors.white}>
        <Image
          style={styles.image}
          source={{
            uri: 'https://images.unsplash.com/photo-1514995669114-6081e934b693?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
          }}
        />
        <Block>
          <Text center fontType="bold">
            Mixed Vegetables
          </Text>
        </Block>
        <Block row marginHorizontal={4} marginVertical={3} space="between">
          <Text>$3.39</Text>
          <TouchableOpacity style={styles.button}>
            <Text color="white" fontType="bold">
              +
            </Text>
          </TouchableOpacity>
        </Block>
      </Block>
    </Pressable>
  );
};

export default ItemPopular;
