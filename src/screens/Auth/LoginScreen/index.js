import {Block, Text} from '@components';
import {Image, ImageBackground, TouchableOpacity} from 'react-native';
import React, {useEffect} from 'react';

import {AuthService} from '@services';
import auth from '@react-native-firebase/auth';
import {icons} from '@assets';
import {routes} from '@navigation/routes';
import styles from './styles';
import {theme} from '@theme';
import {useNavigation} from '@react-navigation/core';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {width} from 'utils/responsive';

const LoginScreen = () => {
  const {top} = useSafeAreaInsets();
  const navigation = useNavigation();

  return (
    <Block flex>
      <ImageBackground
        style={styles.container}
        source={{
          uri: 'https://firebasestorage.googleapis.com/v0/b/fashionapp-1.appspot.com/o/images%2Fbackground.png?alt=media&token=742e8acc-3dfa-48ad-b240-e53e3d7a9ed6',
        }}
        resizeMode="cover">
        <Text
          flex
          center
          size={50}
          marginTop={150}
          fontType="bold"
          color={theme.colors.white}>
          “GO HARD {'\n'} or {'\n'} GO HOME”
        </Text>
        <Block width={width} marginBottom={50}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate(routes.ENTER_PHONE_NUMBER_SCREEN)
            }
            style={styles.button}>
            <Text size={18} color={theme.colors.white} fontType="bold">
              Sign In Phone Number
            </Text>
          </TouchableOpacity>
          <Block row alignCenter justifyCenter margin={16}>
            <Block
              width={150}
              borderWidth={0.7}
              borderColor={theme.colors.white}
            />
            <Text
              size={18}
              color={theme.colors.white}
              marginHorizontal={16}
              fontType="bold">
              OR
            </Text>
            <Block
              borderWidth={0.7}
              borderColor={theme.colors.white}
              width={150}
            />
          </Block>
          <Block row marginHorizontal={120} space="between">
            <TouchableOpacity
              onPress={() => {
                AuthService.googleLogin()
                  .then(() => {
                    console.log('Signed in with Google!');
                  })
                  .catch(error => {
                    console.log('error', error);
                  });
              }}>
              <Block
                justifyCenter
                alignCenter
                width={50}
                height={50}
                borderRadius={50}
                backgroundColor={theme.colors.white}>
                <Image style={{width: 25, height: 25}} source={icons.google} />
              </Block>
            </TouchableOpacity>
            <Block
              justifyCenter
              alignCenter
              width={50}
              height={50}
              borderRadius={50}
              backgroundColor={theme.colors.white}>
              <Image
                style={{width: 15, height: 25, resizeMode: 'cover'}}
                source={icons.facebook}
              />
            </Block>
          </Block>
        </Block>
      </ImageBackground>
    </Block>
  );
};

export default LoginScreen;
