import {Block, Text} from '@components';
import {Image, Pressable} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import React, {useState, useCallback} from 'react';
import {useSelector} from 'react-redux';
import {useStyles} from './styles';
import {useTheme} from '@theme';

const ItemCart = ({item, props}) => {
  const {
    theme: {theme: themeStore},
  } = useSelector(stateRoot => stateRoot.root);
  const styles = useStyles(props, themeStore);
  const theme = useTheme(themeStore);
  const [quali, setQuali] = useState(1);
  const handleSub = useCallback(() => {
    if (quali > 1) {
      setQuali(quali - 1);
    }
  }, [quali]);
  const handleSum = useCallback(() => {
    setQuali(quali + 1);
  }, [quali]);

  return (
    <Pressable>
      <Block
        justifyCenter
        height={100}
        borderRadius={20}
        marginHorizontal={16}
        marginVertical={5}
        backgroundColor={theme.colors.border}>
        <Block row alignCenter marginHorizontal={16}>
          <Image style={styles.image} source={{uri: item.image[0]}} />
          <Block flex marginHorizontal={16}>
            <Text size={18} fontType="bold">
              {item.name}
            </Text>
            <Block flex justifyCenter alignCenter row space="between">
              <Text color={theme.colors.inconInf}>{item.lastPrice}</Text>
              <Block row justifyCenter alignCenter marginRight={10}>
                <Pressable onPress={handleSub}>
                  {themeStore === 'dark' ? (
                    <LinearGradient
                      start={{x: 0, y: 0}}
                      end={{x: 1, y: 0}}
                      colors={['#70A2FF', '#54F0D1']}
                      style={styles.item}>
                      <Text style={styles.text}>-</Text>
                    </LinearGradient>
                  ) : (
                    <Block style={[styles.item, {backgroundColor: '#045694'}]}>
                      <Text center size={10} style={styles.text}>
                        -
                      </Text>
                    </Block>
                  )}
                </Pressable>
                <Block justifyCenter alignCenter marginHorizontal={15}>
                  <Text fontType="bold" size={15} center>
                    {quali}
                  </Text>
                </Block>
                <Pressable onPress={handleSum}>
                  {themeStore === 'dark' ? (
                    <LinearGradient
                      start={{x: 0, y: 0}}
                      end={{x: 1, y: 0}}
                      colors={['#70A2FF', '#54F0D1']}
                      style={styles.item}>
                      <Text style={styles.text}>+</Text>
                    </LinearGradient>
                  ) : (
                    <Block style={[styles.item, {backgroundColor: '#045694'}]}>
                      <Text center size={10} style={styles.text}>
                        +
                      </Text>
                    </Block>
                  )}
                </Pressable>
              </Block>
            </Block>
          </Block>
        </Block>
      </Block>
    </Pressable>
  );
};

export default ItemCart;
