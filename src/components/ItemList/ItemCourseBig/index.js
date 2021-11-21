import {Block, Text} from '@components';
import {Image, ImageBackground, Pressable} from 'react-native';

import React from 'react';
import {images} from '@assets';
import {routes} from '@navigation/routes';
import {useNavigation} from '@react-navigation/core';
import {useSelector} from 'react-redux';
import {useStyles} from './styles';

const dataTitle = ['GYM', 'YOGA', 'BELLY DANCE', 'BOXING', 'DANCE SPORT'];

const ItemCourseBig = ({nameScreen, props}) => {
  const navigation = useNavigation();
  const onPress = type => {
    navigation.navigate(routes.COURSE_LIST_SCREEN, {
      type,
      nameScreen: nameScreen,
    });
  };

  console.log('aaaaaaaaa', nameScreen);
  const {
    theme: {theme: themeStore},
  } = useSelector(stateRoot => stateRoot.root);
  const styles = useStyles(props, themeStore);

  return (
    <Block marginBottom={16}>
      <Pressable onPress={() => onPress('gym')}>
        <ImageBackground source={images.gym} style={styles.imageHorizontal}>
          <Text style={styles.text}>{dataTitle[0]}</Text>
        </ImageBackground>
      </Pressable>
      <Block row>
        <Block>
          <Pressable onPress={() => onPress('yoga')}>
            <ImageBackground source={images.yoga} style={styles.imageColumOne}>
              <Text style={styles.text}>{dataTitle[1]}</Text>
            </ImageBackground>
          </Pressable>
          <Pressable onPress={() => onPress('bellyDance')}>
            <ImageBackground
              source={images.bellyDance}
              style={[styles.imageColumOne]}>
              <Text style={styles.text}>{dataTitle[2]}</Text>
            </ImageBackground>
          </Pressable>
        </Block>
        <Block>
          <Pressable onPress={() => onPress('boxing')}>
            <Image source={images.boxing} style={styles.imageColumTwo} />
            <Text style={styles.textBoxing}>{dataTitle[3]}</Text>
          </Pressable>
        </Block>
      </Block>
      <Pressable onPress={() => onPress('danceSport')}>
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
