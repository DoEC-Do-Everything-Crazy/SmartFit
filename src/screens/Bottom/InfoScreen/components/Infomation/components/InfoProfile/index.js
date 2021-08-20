import {icons} from '@assets';
import {Block, Text} from '@components';
import React from 'react';
import {Image} from 'react-native';
import styles from './styles';

const InfoProfile = ({image, name, phoneNumber, email, gene, birthday}) => {
  return (
    <Block height="25%" marginTop={10} paddingHorizontal={16}>
      <Block flex row>
        <Image
          style={styles.image}
          source={{
            uri: image,
          }}
        />
        <Block
          flex
          height={155}
          paddingLeft={55}
          paddingRight={15}
          borderWidth={1}
          borderColor="grey"
          borderRadius={20}
          marginLeft={50}
          marginRight={5}
          paddingBottom={5}>
          <Text center size={18} color="#444C5C" marginTop={3} fontType="bold">
            {name}
          </Text>
          <Block>
            <Block row marginTop={6} marginBottom={3}>
              <Image source={icons.phoneIf} />
              <Text size={14} marginLeft={10}>
                {phoneNumber}
              </Text>
            </Block>
            <Block row marginVertical={3}>
              <Image
                style={styles.imageInfo}
                source={icons.emailNotification}
              />
              <Text size={14} marginLeft={10}>
                {email}
              </Text>
            </Block>
            <Block row marginVertical={3}>
              <Image
                style={styles.imageInfo}
                source={icons.emailNotification}
              />
              <Text size={14} marginLeft={10}>
                {gene}
              </Text>
            </Block>
            <Block row marginVertical={3}>
              <Image
                style={styles.imageInfo}
                source={icons.emailNotification}
              />
              <Text size={14} marginLeft={10}>
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
