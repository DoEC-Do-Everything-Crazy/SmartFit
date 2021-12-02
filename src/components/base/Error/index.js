import {Block, Text} from '@components';
import {Image, Modal, Pressable} from 'react-native';

import {Cancel} from '@assets/icons';
import React from 'react';
import {useSelector} from 'react-redux';
import {useTheme} from '@theme';

const Error = ({errorMessage, setError, errorImage, props}) => {
  const {
    theme: {theme: themeStore},
  } = useSelector(state => state.root);

  const theme = useTheme(themeStore);

  return (
    <>
      {errorMessage ? (
        <Modal transparent>
          <Block
            flex
            justifyCenter
            alignCenter
            backgroundColor={theme.colors.modalTransparent}>
            <Block
              borderWidth={0.1}
              backgroundColor={theme.colors.modalBackground}
              padding={16}
              borderRadius={16}
              width="80%">
              <Block>
                <Block alignEnd>
                  <Pressable
                    onPress={() => {
                      setError('');
                    }}>
                    <Cancel color={theme.colors.text} />
                  </Pressable>
                </Block>
              </Block>

              <Block alignCenter marginVertical={8}>
                {errorImage ? (
                  {errorImage}
                ) : (
                  <Image
                    source={require('../../../assets/icons/success.png')}
                    style={{height: 64, width: 64}}
                  />
                )}
              </Block>

              <Block>
                <Text
                  fontType="bold"
                  marginVertical={8}
                  color={theme.colors.text}
                  center
                  size={16}>
                  {errorMessage}
                </Text>
              </Block>
            </Block>
          </Block>
        </Modal>
      ) : null}
    </>
  );
};
export default Error;
