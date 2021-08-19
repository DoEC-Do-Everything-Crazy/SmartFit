import React from 'react';
import {View, Image} from 'react-native';
import {Block, Text} from '@components';
import {width} from '@utils';
import {icons} from '@assets';
import styles from './styles';

const InfoProfile = ({image, name, phoneNumber, email, gene, birthday}) => {
  return (
    <Block marginTop={10} paddingHorizontal={16} height="35%">
      <Block flex row>
        <Image
          style={styles.image}
          source={{
            uri: image,
          }}
        />
        <Block
          flex
          height={200}
          paddingLeft={80}
          paddingRight={15}
          borderWidth={1}
          borderColor="grey"
          borderRadius={20}
          marginLeft={60}
          marginRight={5}
          paddingBottom={15}>
          <Text center size={20} color="#444C5C" marginTop={12}>
            {name}
          </Text>
          <Block>
            <Block row marginTop={12} marginBottom={3}>
              <Image source={icons.phoneIf} />
              <Text marginLeft={10}>{phoneNumber}</Text>
            </Block>
            <Block row marginVertical={3}>
              <Image
                style={styles.imageInfo}
                source={icons.emailNotification}
              />
              <Text marginLeft={10}>{email}</Text>
            </Block>
            <Block row marginVertical={3}>
              <Image
                style={styles.imageInfo}
                source={icons.emailNotification}
              />
              <Text marginLeft={10}>{gene}</Text>
            </Block>
            <Block row marginVertical={3}>
              <Image
                style={styles.imageInfo}
                source={icons.emailNotification}
              />
              <Text marginLeft={10}>{birthday}</Text>
            </Block>
          </Block>
        </Block>
      </Block>
    </Block>
  );
};

export default InfoProfile;
