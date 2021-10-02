import {Block, Text} from '@components';
import React from 'react';
import {ImageBackground, Pressable} from 'react-native';
import styles from './styles';
import {useNavigation} from '@react-navigation/core';
import {routes} from '@navigation/routes';
import {images} from '@assets';

const dataTitle = ['GYM', 'YOGA', 'BELLY DANCE', 'BOXING', 'DANCE SPORT'];

const ItemCourseBig = ({title, url}) => {
  const navigation = useNavigation();
  const onPress = ({name}) => {
    navigation.navigate(routes.COURSE_LIST_SCREEN);
  };
  return (
    <Block>
      <Pressable onPress={onPress}>
        <ImageBackground source={images.gym} style={styles.imageHorizontal}>
          <Text style={styles.text}>{dataTitle[0]}</Text>
        </ImageBackground>
      </Pressable>
      <Block row>
        <Block>
          <Pressable onPress={onPress}>
            <ImageBackground source={images.yoga} style={styles.imageColumOne}>
              <Text style={styles.text}>{dataTitle[1]}</Text>
            </ImageBackground>
          </Pressable>
          <Pressable onPress={onPress}>
            <ImageBackground
              source={images.bellyDance}
              style={[styles.imageColumOne]}>
              <Text style={styles.text}>{dataTitle[2]}</Text>
            </ImageBackground>
          </Pressable>
        </Block>
        {/* <Block> */}
        {/* <Pressable onPress={onPress}> */}
        <ImageBackground source={images.boxing} style={styles.imageColumTwo}>
          <Text style={styles.text}>{dataTitle[3]}</Text>
        </ImageBackground>
        {/* </Pressable> */}
        {/* </Block> */}
      </Block>
      <Pressable onPress={onPress}>
        <ImageBackground
          source={images.danceSport}
          style={styles.imageHorizontal}>
          <Text style={styles.text}>{dataTitle[4]}</Text>
        </ImageBackground>
      </Pressable>
    </Block>
  );
};

export default ItemCourseBig;
