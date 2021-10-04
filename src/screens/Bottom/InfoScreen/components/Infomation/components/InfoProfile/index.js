import {Birday, EmailNotification, GenderInf, PhoneInf} from '@assets/icons';
import {Block, Text} from '@components';
import {theme} from '@theme';
import React from 'react';
import {Image} from 'react-native';
import styles from './styles';

const InfoProfile = ({image, name, phoneNumber, email, gene, birthday}) => {
  return (
    <Block height="25%" marginTop={10} paddingHorizontal={16}>
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
          height={155}
          paddingLeft={55}
          paddingRight={15}
          borderRadius={20}
          marginLeft={40}
          marginRight={5}
          paddingBottom={5}
          backgroundColor={theme.colors.white}>
          <Text
            center
            size={18}
            marginTop={3}
            color={theme.colors.darkBlue}
            fontType="bold">
            {name}
          </Text>
          <Block>
            <Block row marginTop={6} marginBottom={3}>
              <PhoneInf />
              <Text size={14} color={theme.colors.darkBlue} marginLeft={10}>
                {phoneNumber}
              </Text>
            </Block>
            <Block row marginVertical={3}>
              <EmailNotification color={'#000'} />
              <Text
                size={14}
                numberOfLines={1}
                marginHorizontal={10}
                color={theme.colors.darkBlue}>
                {email}
              </Text>
            </Block>
            <Block row marginVertical={3}>
              <GenderInf />
              <Text size={14} marginLeft={10} color={theme.colors.darkBlue}>
                {gene}
              </Text>
            </Block>
            <Block row marginVertical={3}>
              <Birday />
              <Text size={14} marginLeft={10} color={theme.colors.darkBlue}>
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
