import {Block, Text} from '@components';
import React from 'react';
import {Pressable, ImageBackground} from 'react-native';
import {useSelector} from 'react-redux';
import {useStyles} from './styles';
import {useTheme} from '@theme';
import {images} from '@assets';

const ItemNotification = ({item, props}) => {
  const {
    theme: {theme: themeStore},
  } = useSelector(stateRoot => stateRoot.root);
  const styles = useStyles(props, themeStore);
  const theme = useTheme(themeStore);

  const convertGetTimeToDate = time => {
    const endDate = new Date(time);

    return String(endDate.toISOString().substring(0, 10));
  };

  const expiryDate = time => {
    const endDate = new Date(time);

    const currenDate = new Date();

    if (
      String(currenDate.toISOString().substring(0, 10)) ===
      String(endDate.toISOString().substring(0, 10))
    ) {
      return 'HSD sẽ hết trong hôm nay';
    } else {
      return 'HSD : ' + String(endDate.toISOString().substring(0, 10));
    }
  };

  return (
    <Pressable
      style={styles.item}
      onPress={() => {
        item._id;
      }}>
      <Block row borderRadius={5} borderColor={'gray'} padding={5}>
        <Block
          paddingVertical={5}
          borderRadius={5}
          borderColor={'gray'}
          backgroundColor={theme.colors.white}
          justifyContent={'center'}
          alignItems={'center'}
          textAlign={'center'}
          padding={7}>
          <Text style={styles.valuePromotion}>{item.value * 100 + '%'}</Text>
        </Block>
        {/* Details */}
        <Block
          paddingVertical={5}
          borderRadius={5}
          paddingLeft={10}
          flex
          flexDirection={'column'}
          backgroundColor={theme.colors.white}>
          <Block>
            <Text style={styles.title}>{item.name}</Text>
          </Block>
          <Block>
            <Text style={styles.text}>
              {'Ngày khuyến mãi: ' + ' ' + convertGetTimeToDate(item.startDate)}
            </Text>
          </Block>
          <Block
            marginTop={5}
            paddingTop={1}
            paddingBottom={1}
            backgroundColor={theme.colors.orange}
            radius={10}
            width={'50%'}
            alignItems={'center'}
            justifyContent={'center'}>
            <Text style={styles.expiryDate}>{expiryDate(item.endDate)}</Text>
          </Block>
        </Block>
      </Block>
    </Pressable>
  );
};

export default ItemNotification;
