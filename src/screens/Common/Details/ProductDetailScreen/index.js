import {Block, Button, Text, TextInput} from '@components';
import Header from './Header';
import React, {useCallback, useRef, useState} from 'react';
import {Image, Platform, ScrollView, Pressable, Dimensions} from 'react-native';
import {useSelector} from 'react-redux';
import {useStyles} from './styles';
import {useTheme} from '@theme';
import {images} from '@assets';
import {BottomSheet} from '@components/BottomSheet';
import {Rating} from 'react-native-ratings';
import LinearGradient from 'react-native-linear-gradient';

const ProductDetailScreen = props => {
  const [quali, setQuali] = useState(0);
  const {height: MAX_HEIGHT} = Dimensions.get('screen');
  const {
    theme: {theme: themeStore},
  } = useSelector(stateRoot => stateRoot.root);
  const styles = useStyles(props, themeStore);
  const theme = useTheme(themeStore);
  const modalizRef = useRef(null);
  const handleSub = useCallback(() => {
    if (quali === 0) {
      setQuali(0);
    } else if (quali > 0) {
      setQuali(quali - 1);
    }
  }, [quali]);
  const handleSum = useCallback(() => {
    setQuali(quali + 1);
  }, [quali]);
  return (
    <Block flex>
      <Block style={styles.header}>
        <Header />
      </Block>
      <Image style={styles.image} source={images.product1} />
      <Block style={styles.bottom}>
        <Button title="Details" onPress={() => modalizRef?.current.open()} />
      </Block>
      <BottomSheet
        ref={modalizRef}
        overlayStyle={styles.root}
        modalHeight={MAX_HEIGHT * 0.4}
        adjustToContentHeight={false}
        scrollViewProps={{keyboardShouldPersistTaps: 'handle'}}
        keyboardAvoidingBehavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <ScrollView>
          <Block flex>
            <Block row flex paddingTop={20} paddingHorizontal={16}>
              <Text fontType="bold" size={20}>
                Myprotein Bottle
              </Text>
              <Block justifyCenter flex alignEnd>
                <Rating
                  type="custom"
                  ratingColor={'#FFD700'}
                  ratingCount={5}
                  imageSize={18}
                  tintColor={theme.colors.backgroundSetting}
                />
              </Block>
            </Block>
            <Block
              row
              paddingVertical={10}
              borderBottomWidth={1}
              borderColor={theme.colors.lightGray}>
              <Block row flex paddingHorizontal={16}>
                <Pressable onPress={handleSub}>
                  {themeStore === 'dark' ? (
                    <LinearGradient
                      start={{x: 0, y: 0}}
                      end={{x: 1, y: 0}}
                      colors={['#70A2FF', '#54F0D1']}
                      style={styles.item}>
                      <Text center style={styles.text}>
                        -
                      </Text>
                    </LinearGradient>
                  ) : (
                    <Block style={[styles.item, {backgroundColor: '#045694'}]}>
                      <Text center style={styles.text}>
                        -
                      </Text>
                    </Block>
                  )}
                </Pressable>
                <Block justifyCenter alignCenter marginHorizontal={15}>
                  <Text fontType="bold" size={20} center>
                    {quali}
                  </Text>
                </Block>
                <Pressable onPress={handleSum}>
                  {themeStore === 'dark' ? (
                    <LinearGradient
                      start={{x: 0, y: 0}}
                      end={{x: 1, y: 0}}
                      colors={['#70A2FF', '#54F0D1']}
                      style={styles.item}>
                      <Text center style={styles.text}>
                        +
                      </Text>
                    </LinearGradient>
                  ) : (
                    <Block style={[styles.item, {backgroundColor: '#045694'}]}>
                      <Text center style={styles.text}>
                        +
                      </Text>
                    </Block>
                  )}
                </Pressable>
                <Block justifyCenter flex alignEnd>
                  <Text center fontType="bold" size={20} color={'#FF7F50'}>
                    $20
                  </Text>
                </Block>
              </Block>
            </Block>
            <Block flex paddingTop={10} paddingBottom={20}>
              <Button
                title="Add Cart"
                onPress={() => modalizRef?.current.close()}
              />
              <Block row paddingHorizontal={16}>
                <Text fontType="bold" size={17}>
                  Brand:
                </Text>
                <Text marginLeft={15} size={17}>
                  Shark
                </Text>
              </Block>
              <Text
                marginTop={10}
                fontType="bold"
                size={17}
                paddingHorizontal={16}>
                Description:
              </Text>
              <Text paddingHorizontal={16}>
                {`- Premium sports and gym shaker bottle: Boldfit gym shaker bottle is exclusively for work out regimens. 
- No leaks, No drips 100% Guarantee : Anti-leak tested and Proven, lockable flip top, easy to read measuring 
- Extra compartment: Extra compartment for powder, mixes, etc. 
- BPA free: 100% BPA free, no toxins, very easy to clean 
- Better body Absorption: the tornado mixer works like a blending blade, Shake to create a fresh blend.`}
              </Text>
            </Block>
          </Block>
        </ScrollView>
      </BottomSheet>
    </Block>
  );
};

export default ProductDetailScreen;
