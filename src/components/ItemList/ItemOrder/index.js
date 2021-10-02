import {icons} from '@assets';
import {Block, Text, TextInput, Button} from '@components';
import {BottomSheet} from '@components/BottomSheet';
import {theme} from '@theme';
import React, {useRef, useState} from 'react';
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
} from 'react-native';
import {Rating} from 'react-native-ratings';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import styles from './styles';
import {checkPermission, PERMISSION_TYPE} from 'hook/permissions';

const ItemOrder = ({picture, title, group_id, index}) => {
  const modalizRef = useRef(null);
  const [isReceived, setReceived] = useState(true);
  const [comment, setComment] = useState('');
  const keyboardVerticalOffset = Platform.OS === 'ios' ? 'padding' : 'height';
  const {bottom} = useSafeAreaInsets();
  const [isCamera, setCamera] = useState(false);

  const handleCamera = async () => {
    const resultSP = await checkPermission(PERMISSION_TYPE.camera);
    if (resultSP === true) {
      setCamera(true);
    }
  };

  return (
    <>
      <Block
        flex
        row
        key={index}
        marginTop={16}
        padding={16}
        radius={8}
        backgroundColor={theme.colors.white}>
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
              <Pressable style={styles.item}>
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
        <BottomSheet ref={modalizRef}>
          <KeyboardAvoidingView
            style={styles.sendControlContainerOuter}
            behavior={keyboardVerticalOffset}
            keyboardVerticalOffset={bottom * 0.7}>
            <Block paddingVertical={10} flex>
              <Text center fontType="bold" size={16}>
                What is you rate?
              </Text>
            </Block>
            <Block flex>
              <Rating
                type="custom"
                ratingCount={5}
                ratingBackgroundColor="#c8c7c8"
                imageSize={36}
                ratingColor="#FFD700"
                tintColor={theme.colors.background}
              />
            </Block>
            <Block paddingVertical={10} alignCenter flex>
              <Block width="50%">
                <Text center fontType="bold" size={16}>
                  Please share your opinion about the product
                </Text>
              </Block>
            </Block>
            <Block paddingHorizontal={16} flex>
              <TextInput
                onChangeText={() => setComment(comment)}
                value={comment}
                inputStyle={styles.textInput}
                // placeholder="Enter comment"
                multiline={true}
              />
            </Block>
            <Block marginVertical={20} padding={16} flex>
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
                  backgroundColor={theme.colors.white}
                  justifyCenter
                  alignCenter
                  style={styles.image}>
                  <Pressable onPress={handleCamera}>
                    <Image source={icons.camera} />
                  </Pressable>
                  <Text paddingVertical={5} fontType="bold" size={12}>
                    Add your photos
                  </Text>
                </Block>
              </ScrollView>
            </Block>
            <Button
              title="SEND REVIEW"
              onPress={() => modalizRef?.current.close()}
            />
          </KeyboardAvoidingView>
        </BottomSheet>
      </Block>
    </>
  );
};

export default ItemOrder;
