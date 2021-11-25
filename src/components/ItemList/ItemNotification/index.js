import {Block, Text} from '@components';
import React, {useCallback} from 'react';

import Clipboard from '@react-native-clipboard/clipboard';
import {Pressable} from 'react-native';
import Snackbar from 'react-native-snackbar';
import {useSelector} from 'react-redux';
import {useStyles} from './styles';
import {useTheme} from '@theme';
import {useTranslation} from 'react-i18next';

const ItemNotification = ({item, props}) => {
  const {
    theme: {theme: themeStore},
  } = useSelector(stateRoot => stateRoot.root);
  const styles = useStyles(props, themeStore);
  const theme = useTheme(themeStore);
  const {t} = useTranslation();

  const convertGetTimeToDate = time => {
    const endDate = new Date(time);

    return String(endDate.toISOString().substring(0, 10));
  };
  const handleCopyToClipBoard = useCallback(value => {
    Clipboard.setString(value);
    Snackbar.show({
      text: 'Coppied!',
      duration: Snackbar.LENGTH_SHORT,
    });
  }, []);

  const expiryDate = time => {
    const endDate = new Date(time);

    const currenDate = new Date();

    if (
      String(currenDate.toISOString().substring(0, 10)) ===
      String(endDate.toISOString().substring(0, 10))
    ) {
      return t('warningOFD');
    } else {
      return t('expiry') + ' ' + String(endDate.toISOString().substring(0, 10));
    }
  };

  return (
    <Pressable
      style={styles.item}
      onPress={() => {
        item._id;
      }}>
      <Block row borderRadius={5} borderColor={'gray'} padding={5}>
        {/* Value Promotion */}
        <Block
          paddingVertical={5}
          width={80}
          borderRadius={5}
          borderColor={'gray'}
          backgroundColor={theme.colors.border}
          justifyCenter
          alignCenter
          textAlign={'center'}
          padding={7}>
          <Text center style={styles.valuePromotion}>
            {item.value + '%'}
          </Text>
        </Block>
        {/* Details */}
        <Block
          borderRadius={5}
          paddingLeft={10}
          flex
          flexDirection={'column'}
          backgroundColor={theme.colors.border}>
          <Block paddingLeft={10} paddingVertical={15}>
            <Text paddingBottom={5} style={styles.title}>
              {item.name}
            </Text>
            <Block>
              <Text style={styles.text}>
                {t('promotionDay') +
                  ':' +
                  ' ' +
                  convertGetTimeToDate(item.startDate)}
              </Text>
            </Block>
            <Block row>
              <Block
                marginTop={5}
                paddingTop={1}
                paddingBottom={1}
                backgroundColor={theme.colors.orange}
                radius={10}
                width={'50%'}
                alignItems={'center'}
                justifyContent={'center'}>
                <Text style={styles.expiryDate}>
                  {expiryDate(item.endDate)}
                </Text>
              </Block>
              <Block justifyCenter style={styles.code}>
                <Pressable onPress={() => handleCopyToClipBoard(item.key)}>
                  <Text fontType="bold" color={theme.colors.link}>
                    {t('getCode')}
                  </Text>
                </Pressable>
              </Block>
            </Block>
          </Block>
        </Block>
      </Block>
    </Pressable>
  );
};

export default ItemNotification;
