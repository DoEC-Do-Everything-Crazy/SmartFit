import {icons} from '@assets';
import {Block, Text} from '@components';
import React from 'react';
import {Image, Pressable} from 'react-native';
import {useSelector} from 'react-redux';
import {useStyles} from './styles';
import {useTheme} from '@theme';

const ItemPT = ({onpress, picture, title, group_id, index, props}) => {
  const {
    theme: {theme: themeStore},
  } = useSelector(stateRoot => stateRoot.root);
  const styles = useStyles(props, themeStore);
  const theme = useTheme(themeStore);

  return (
    <Block flex key={index} borderBottomWidth={0.3}>
      <Block
        radius={5}
        marginVertical={10}
        marginHorizontal={10}
        height={98}
        width="95%"
        shadowColor={theme.colors.blue}
        alignCenter
        row>
        <Image
          source={{
            uri: 'https://gocbinhluan.com/public/photos/shares/201911/20191130/20191130_hinh12.jpg',
          }}
          style={styles.image}
        />

        <Block marginLeft={15} width="70%">
          <Block row>
            <Text size={20} fontType="bold">
              PT NAME
            </Text>
            <Block marginLeft={15} alignCenter row>
              <Image source={icons.ratings} style={styles.icon} />
              <Text size={15} marginLeft={5}>
                5.0
              </Text>
            </Block>
          </Block>

          <Block row alignCenter>
            <Text size={15} fontType="bold">
              Gender:
            </Text>
            <Block marginLeft={5} alignCenter>
              <Text size={15} marginLeft={5}>
                Male
              </Text>
            </Block>
          </Block>
          <Block row alignCenter>
            <Text size={15} fontType="bold">
              Price:
            </Text>
            <Block marginLeft={5} alignCenter>
              <Text size={15} marginLeft={5}>
                $1000
              </Text>
            </Block>
          </Block>

          <Block row alignCenter>
            <Pressable onPress={onpress}>
              <Block
                width={80}
                height={20}
                radius={5}
                justifyCenter
                backgroundColor={theme.colors.blue}
                alignCenter>
                <Text size={12} color={theme.colors.white} fontType="bold">
                  Read more
                </Text>
              </Block>
            </Pressable>
          </Block>
        </Block>
      </Block>
    </Block>
  );
};

export default ItemPT;
