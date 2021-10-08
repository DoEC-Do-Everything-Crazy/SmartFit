import {List, EmailNotification, Gender, PhoneInf} from '@assets/icons';
import {Block, Text} from '@components';

import React from 'react';
import {Image} from 'react-native';
import {useSelector} from 'react-redux';
import {useStyles} from './styles';
import {useTheme} from '@theme';

const InfoProfile = ({
  image,
  name,
  phoneNumber,
  email,
  gene,
  birthday,
  props,
}) => {
  const themeStore = useSelector(state => state.root.theme.theme);
  const theme = useTheme(themeStore);
  const styles = useStyles(props, themeStore);
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
            uri: image,
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
            {name}
          </Text>
          <Block>
            <Block row marginTop={6} marginBottom={3}>
              <PhoneInf color={theme.colors.text} />
              <Text size={14} color={theme.colors.text} marginLeft={10}>
                {phoneNumber}
              </Text>
            </Block>
            <Block row marginVertical={3}>
              <EmailNotification color={theme.colors.text} />
              <Text
                size={14}
                numberOfLines={1}
                marginHorizontal={10}
                color={theme.colors.text}>
                {email}
              </Text>
            </Block>
            <Block row marginVertical={3}>
              <Gender color={theme.colors.text} />
              <Text size={14} marginLeft={10} color={theme.colors.text}>
                {gene}
              </Text>
            </Block>
            <Block row marginVertical={3}>
              <List color={theme.colors.text} />
              <Text size={14} marginLeft={10} color={theme.colors.text}>
                {birthday}
              </Text>
            </Block>
          </Block>
        </Block>
      </Block>
    </Block>
  );
};

export default InfoProfile;
