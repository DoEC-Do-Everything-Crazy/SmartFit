import {Block, Text, TextInput, Button} from '@components';
import {BottomSheet} from '@components/BottomSheet';
import React, {useCallback, useRef, useState} from 'react';
import {Image, Platform, Pressable, ScrollView} from 'react-native';
import {Rating} from 'react-native-ratings';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useSelector} from 'react-redux';
import {useStyles} from './styles';
import {useTheme} from '@theme';
import {checkPermission, PERMISSION_TYPE} from 'hook/permissions';
import {Camera} from '@assets/icons';
import {useNavigation} from '@react-navigation/core';
import {routes} from '@navigation/routes';

const ItemOrder = ({picture, title, group_id, index, props}) => {
  const modalizRef = useRef(null);
  const [isReceived, setReceived] = useState(true);
  const [comment, setComment] = useState('');

  const [isCamera, setCamera] = useState(false);
  const insets = useSafeAreaInsets();

  const {
    theme: {theme: themeStore},
  } = useSelector(stateRoot => stateRoot.root);
  const styles = useStyles(props, themeStore);
  const theme = useTheme(themeStore);
  const navigation = useNavigation();

  const handleToOrderDetail = useCallback(() => {
    navigation.navigate(routes.ORDER_DETAIL_SCREEN);
  }, [navigation]);
  const handleCamera = async () => {
    const resultSP = await checkPermission(PERMISSION_TYPE.camera);
    if (resultSP === true) {
      setCamera(true);
    }
  };
  const FloatingComponent = useCallback(() => {
    if (insets.bottom === 0) {
      return null;
    } else {
      return <Block style={[styles.floatComponent, {height: insets.bottom}]} />;
    }
  }, [insets.bottom, styles.floatComponent]);

  const HeaderComponent = useCallback(() => {
    return (
      <>
        <Block paddingVertical={10}>
          <Text center fontType="bold" size={16}>
            What is you rate?
          </Text>
        </Block>
        <Block backgroundColor={theme.colors.backgroundSetting}>
          <Rating
            type="custom"
            ratingCount={5}
            imageSize={36}
            ratingBackgroundColor="#c8c7c8"
            tintColor={theme.colors.backgroundSetting}
            ratingColor="#FFD700"
          />
        </Block>
        <Block
          paddingVertical={10}
          alignCenter
          backgroundColor={theme.colors.backgroundSetting}>
          <Block width="50%">
            <Text center fontType="bold" size={16}>
              Please share your opinion about the product
            </Text>
          </Block>
        </Block>
      </>
    );
  }, [theme.colors.backgroundSetting]);
  const FooterComponent = useCallback(() => {
    return (
      <>
        <Block padding={16} backgroundColor={theme.colors.backgroundSetting}>
          <ScrollView horizontal>
            <Image
              source={{
                uri: 'https://i.pinimg.com/564x/5a/93/ce/5a93ceca8cf5277d2fc552ad4092a571.jpg',
              }}
              height="100%"
              style={styles.image}
            />
            <Image
              source={{
                uri: 'https://i.pinimg.com/564x/5a/93/ce/5a93ceca8cf5277d2fc552ad4092a571.jpg',
              }}
              height="100%"
              style={styles.image}
            />
            <Block
              backgroundColor={theme.colors.border}
              justifyCenter
              alignCenter
              style={styles.image}>
              <Pressable onPress={handleCamera}>
                <Camera />
              </Pressable>
              <Text paddingVertical={5} fontType="bold" size={12}>
                Add your photos
              </Text>
            </Block>
          </ScrollView>
        </Block>
        <Block backgroundColor={theme.colors.backgroundSetting}>
          <Button
            title="SEND REVIEW"
            onPress={() => modalizRef?.current.close()}
          />
        </Block>
      </>
    );
  }, [styles.image, theme.colors.backgroundSetting, theme.colors.border]);
  return (
    <>
      <Block
        row
        key={index}
        marginTop={16}
        padding={16}
        radius={8}
        backgroundColor={theme.colors.border}>
        <Block width="100%">
          <Block row flex={1}>
            <Block row flex={1}>
              <Text size={16} fontType="bold" marginBottom={5}>
                Order N0.1947034
              </Text>
            </Block>
            <Block row flex={1} justifyEnd>
              <Text>05-12-2019</Text>
            </Block>
          </Block>
          <Block row>
            <Text>Tracking number:</Text>
            <Text marginLeft={10} fontType="bold">
              IW3475453455
            </Text>
          </Block>
          <Block row flex={1}>
            <Block row flex={1}>
              <Text>Quantity:</Text>
              <Text marginLeft={10} fontType="bold">
                3
              </Text>
            </Block>
            <Block row flex={1} justifyEnd>
              <Text>Total Amount:</Text>
              <Text marginLeft={10} fontType="bold">
                112$
              </Text>
            </Block>
          </Block>

          <Block row flex={1} paddingTop={5}>
            <Block row flex={1} justifyStart>
              <Pressable
                style={styles.item}
                borderColor={theme.colors.text}
                onPress={handleToOrderDetail}>
                <Text>Details</Text>
              </Pressable>
            </Block>
            {isReceived ? (
              <Block row flex={1} justifyEnd alignCenter>
                <Pressable
                  onPress={() => modalizRef?.current.open()}
                  style={styles.itemConfirm}>
                  <Text color={theme.colors.white}>Confirm</Text>
                </Pressable>
                <Text
                  marginLeft={10}
                  fontType="bold"
                  color={theme.colors.green}>
                  Received
                </Text>
              </Block>
            ) : (
              <Block row flex={1} justifyEnd alignCenter>
                <Pressable style={styles.itemCancel}>
                  <Text color={theme.colors.white}>Cancel</Text>
                </Pressable>
                <Text
                  marginLeft={10}
                  fontType="bold"
                  color={theme.colors.green}>
                  Delivered
                </Text>
              </Block>
            )}
          </Block>
        </Block>
        <BottomSheet
          ref={modalizRef}
          adjustToContentHeight={true}
          HeaderComponent={HeaderComponent}
          FloatingComponent={FloatingComponent}
          FooterComponent={FooterComponent}
          scrollViewProps={{keyboardShouldPersistTaps: 'handle'}}
          keyboardAvoidingBehavior={
            Platform.OS === 'ios' ? 'padding' : 'height'
          }>
          <ScrollView>
            <Block
              paddingHorizontal={16}
              backgroundColor={theme.colors.backgroundSetting}>
              <TextInput
                onChangeText={() => setComment(comment)}
                value={comment}
                inputStyle={styles.textInput}
                // placeholder="Enter comment"
                multiline={true}
              />
            </Block>
          </ScrollView>
        </BottomSheet>
      </Block>
    </>
  );
};

export default ItemOrder;
