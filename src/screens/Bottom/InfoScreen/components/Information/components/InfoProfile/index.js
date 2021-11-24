import {Block, Text} from '@components';
import {Email, Gender, List, Phone} from '@assets/icons';

import {Image} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import {useStyles} from './styles';
import {useTheme} from '@theme';
import {useTranslation} from 'react-i18next';

const InfoProfile = ({user, props}) => {
  const {t} = useTranslation();
  const themeStore = useSelector(state => state.root.theme.theme);
  const theme = useTheme(themeStore);
  const styles = useStyles(props, themeStore);
  var dateFormat = require('dateformat');

  return (
    <Block
      style={styles.container}
      height="25%"
      marginTop={10}
      paddingHorizontal={16}>
      <Block flex row alignCenter>
        <Image
          style={styles.image}
          source={{
            uri: user.photoURL,
          }}
        />
        <Block
          flex
          justifyCenter
          height={170}
          paddingLeft={55}
          paddingRight={15}
          borderRadius={20}
          marginLeft={40}
          marginRight={5}
          paddingBottom={5}
          backgroundColor={theme.colors.border}>
          <Text
            center
            size={18}
            marginTop={3}
            color={theme.colors.text}
            fontType="bold">
            {user.fullName}
          </Text>
          <Block>
            <Block row marginTop={6} marginBottom={3}>
              <Block alignCenter width={30}>
                <Phone color={theme.colors.text} />
              </Block>
              <Block justifyCenter>
                <Text size={14} color={theme.colors.text} marginLeft={10}>
                  {user.phoneNumber || t('notUpdateYet')}
                </Text>
              </Block>
            </Block>
            <Block row marginVertical={3}>
              <Block alignCenter width={30}>
                <Email color={theme.colors.text} />
              </Block>
              <Block justifyCenter>
                <Text
                  size={14}
                  numberOfLines={1}
                  marginHorizontal={10}
                  color={theme.colors.text}>
                  {user.email || t('notUpdateYet')}
                </Text>
              </Block>
            </Block>
            <Block row marginVertical={3}>
              <Block alignCenter width={30}>
                <Gender color={theme.colors.text} />
              </Block>
              <Block justifyCenter>
                <Text size={14} marginLeft={10} color={theme.colors.text}>
                  {t(user.gender)}
                </Text>
              </Block>
            </Block>
            <Block row marginVertical={3}>
              <Block alignCenter width={30}>
                <List color={theme.colors.text} />
              </Block>
              <Block justifyCenter>
                <Text size={14} marginLeft={10} color={theme.colors.text}>
                  {dateFormat(new Date(user.birthday), 'dd/mm/yyyy') ||
                    t('notUpdateYet')}
                </Text>
              </Block>
            </Block>
          </Block>
        </Block>
      </Block>
    </Block>
  );
};

export default InfoProfile;
