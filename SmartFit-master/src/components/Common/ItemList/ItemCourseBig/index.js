import {Block, Text} from '@components';
import React from 'react';
import {ImageBackground, Pressable} from 'react-native';
import styles from './styles';
import {useNavigation} from '@react-navigation/core';
import {routes} from '@navigation/routes';

const ItemCourseBig = ({title, url}) => {
  const navigation = useNavigation();
  return (
    <Block>
      <Pressable onPress={() => navigation.navigate(routes.COURSE_LIST_SCREEN)}>
        <ImageBackground
          source={{
            uri: 'http://welcomelafrance.com/wp-content/uploads/2019/10/meo-anh-long-ngan.jpg',
          }}
          style={styles.imageHorizontal}>
          <Text style={styles.text}>GYM</Text>
        </ImageBackground>
      </Pressable>
      <Block row>
        <Block>
          <ImageBackground
            source={{
              uri: 'https://cdn.longkhanhpets.com/2019/08/tam-ly-loai-meo-1.jpg',
            }}
            style={styles.imageColumOne}>
            <Text style={styles.text}>YOGA</Text>
          </ImageBackground>
          <ImageBackground
            source={{
              uri: 'https://i.pinimg.com/564x/5a/93/ce/5a93ceca8cf5277d2fc552ad4092a571.jpg',
            }}
            style={[styles.imageColumOne]}>
            <Text style={styles.text}>BELLY DANCE</Text>
          </ImageBackground>
        </Block>
        <ImageBackground
          source={{
            uri: 'https://cdn.longkhanhpets.com/2019/08/tam-ly-loai-meo-1.jpg',
          }}
          style={styles.imageColumTwo}>
          <Text style={styles.text}>BOXING</Text>
        </ImageBackground>
      </Block>
    </Block>
  );
};

export default ItemCourseBig;
