import {
  Block,
  Button,
  Error,
  Header,
  InviteLogin,
  Text,
  TextInput,
} from '@components';
/* eslint-disable react-hooks/exhaustive-deps */
import {
  Body,
  Fat,
  Height,
  Order,
  Ordinary,
  Underweight,
  Weight,
} from '@assets/icons';
import {Platform, Pressable, ScrollView} from 'react-native';
import React, {useCallback, useEffect, useRef, useState} from 'react';
import {getSize, width} from '@utils/responsive';

import {BottomSheet} from '@components/BottomSheet';
import ItemFeature from '@components/ItemList/ItemFeature';
import {Overweight} from '@assets/icons/Overweight';
import {SafeAreaView} from 'react-native-safe-area-context';
import StatsBlock from './components/StatsBlock';
import {bmiApi} from 'api/bmiApi';
import {routes} from '@navigation/routes';
import {setWith} from 'lodash';
import {useNavigation} from '@react-navigation/core';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useSelector} from 'react-redux';
import {useStyles} from './styles';
import {useTheme} from '@theme';
import {useTranslation} from 'react-i18next';

const StatsScreen = props => {
  const navigation = useNavigation();
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBMI] = useState({
    id: undefined,
    type: undefined,
    height: 0,
    weight: 0,
    bmi: 0,
  });

  const [isProcessing, setIsProcessing] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const modalizRef = useRef(null);
  const {
    theme: {theme: themeStore},
    user: {user},
  } = useSelector(state => state.root);

  const {t} = useTranslation();
  const theme = useTheme(themeStore);
  const styles = useStyles(props, themeStore);
  const insets = useSafeAreaInsets();

  const HeaderComponent = useCallback(() => {
    return (
      <Block style={styles.headerWrapper}>
        <Text fontType="bold" style={styles.title}>
          {bmi.id ? t('updateYourStats') : t('yourStats')}
        </Text>
      </Block>
    );
  }, [styles.headerWrapper, styles.title]);

  const FloatingComponent = useCallback(() => {
    if (insets.bottom === 0) {
      return null;
    } else {
      return <Block style={[styles.floatComponent, {height: insets.bottom}]} />;
    }
  }, [insets.bottom, styles.floatComponent]);

  const getBMI = async () => {
    try {
      const response = await bmiApi.getBMI(user._id, {
        validateStatus: false,
      });

      setBMI({
        id: response._id,
        type: response.type,
        height: response.height,
        weight: response.weight,
        bmi: response.bmi,
      });

      setHeight(response.height);
      setWeight(response.weight);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    user && getBMI();
  }, [user]);

  const handleBMI = async () => {
    if (isProcessing) {
      return;
    }

    setIsProcessing(true);

    try {
      const newBMI = {
        id: bmi.id || undefined,
        userId: user._id,
        height: height,
        weight: weight,
      };
      const {data} = bmi.id
        ? await bmiApi.updateBMI(newBMI, {validateStatus: false})
        : await bmiApi.addBMI(newBMI, {validateStatus: false});

      setBMI({
        id: data._id,
        type: data.type,
        height: data.height,
        weight: data.weight,
        bmi: data.bmi,
      });

      setHeight(Number(data.height));
      setWeight(Number(data.weight));
    } catch (error) {
      if (bmi.id) {
        setHeight(bmi.height);
        setWeight(bmi.weight);
      } else {
        setHeight(0);
        setHeight(0);
      }

      console.error('error', error.message);
      setErrorMessage(error.message);
    }

    setIsProcessing(false);
  };

  const handleAddUpdateBMI = async () => {
    modalizRef.current?.close();

    handleBMI();
  };

  return user ? (
    <Block flex backgroundColor={theme.colors.blue}>
      <Header
        type={'Bottom'}
        title={t('stats')}
        colorTheme={theme.colors.white}
      />
      <Block
        row
        style={styles.container}
        flex
        alignCenter
        paddingTop={20}
        paddingHorizontal={16}
        backgroundColor={theme.colors.backgroundSetting}>
        <Error setError={setErrorMessage} errorMessage={errorMessage} />
        <Block backgroundColor={theme.colors.backgroundSetting}>
          <StatsBlock
            widthComponent={width / 2 - 24}
            heightComponent="50%"
            title={t('height')}
            userHeight={bmi.height === 0 ? '0' : bmi.height + ' '}
          />
          <StatsBlock
            widthComponent={width / 2 - 24}
            heightComponent="40%"
            title={t('weight')}
            userWeight={bmi.weight === 0 ? '0' : bmi.weight + ' '}
          />
        </Block>
        <Block
          marginLeft={getSize.m(16)}
          backgroundColor={theme.colors.backgroundSetting}>
          <StatsBlock
            widthComponent={width / 2 - 24}
            heightComponent="40%"
            title="BMI"
            circular={true}
            valueCir={Number(bmi.bmi)}
          />
          <StatsBlock
            widthComponent={width / 2 - 24}
            heightComponent="50%"
            title={t('bodyShape')}
            icon={
              bmi.type ? (
                bmi.type === 'underweight' ? (
                  <Underweight color={theme.colors.iconInf} />
                ) : bmi.type === 'overweight' ? (
                  <Overweight color={theme.colors.iconInf} />
                ) : bmi.type === 'ordinary' ? (
                  <Ordinary color={theme.colors.iconInf} />
                ) : (
                  <Fat color={theme.colors.iconInf} />
                )
              ) : (
                <Body color={theme.colors.iconInf} />
              )
            }
            bmp={bmi.type ? t(bmi.type) : t('noData')}
          />
        </Block>
      </Block>
      <Block
        height="30%"
        paddingTop={10}
        backgroundColor={theme.colors.backgroundSetting}>
        <Pressable
          onPress={() =>
            navigation.navigate(routes.FOOD_LIST_SCREEN, {
              title: t('dailyMeals'),
            })
          }>
          <Block
            paddingHorizontal={16}
            backgroundColor={theme.colors.backgroreundSetting}>
            <ItemFeature
              onPress={() =>
                navigation.navigate(routes.FOOD_LIST_SCREEN, {
                  title: t('dailyMeals'),
                })
              }
              shadow
              height={50}
              title={t('dailyMeals')}>
              <Order color={theme.colors.iconInf} />
            </ItemFeature>
          </Block>
        </Pressable>
        <Block flex style={styles.button}>
          <Button
            onPress={() => {
              if (bmi.height !== height || bmi.weight !== weight) {
                setWith(bmi.weight);
                setHeight(bmi.height);
              }

              modalizRef.current?.open();
            }}
            title={bmi.id ? t('updateStats') : t('createStats')}
          />
        </Block>
        <BottomSheet
          ref={modalizRef}
          overlayStyle={styles.root}
          adjustToContentHeight={true}
          closeOnOverlayTap={true}
          HeaderComponent={HeaderComponent}
          FloatingComponent={FloatingComponent}
          scrollViewProps={{keyboardShouldPersistTaps: 'handle'}}
          keyboardAvoidingBehavior={
            Platform.OS === 'ios' ? 'padding' : 'height'
          }>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Block flex>
              <Block row flex paddingTop={20}>
                <Block flex paddingTop={20}>
                  <Block flex paddingHorizontal={16}>
                    <TextInput
                      label={t('enterYourHeight')}
                      maxLength={3}
                      leftIcon={true}
                      value={height + ''}
                      keyboardType="numeric"
                      onChangeText={setHeight}>
                      <Height color={theme.colors.text} />
                    </TextInput>
                  </Block>
                  <Block flex paddingVertical={20} paddingHorizontal={16}>
                    <TextInput
                      label={t('enterYourWeight')}
                      maxLength={3}
                      leftIcon={true}
                      value={weight + ''}
                      keyboardType="numeric"
                      onChangeText={setWeight}>
                      <Weight
                        width={24}
                        height={24}
                        color={theme.colors.text}
                      />
                    </TextInput>
                  </Block>
                  <Block>
                    <Button title={t('confirm')} onPress={handleAddUpdateBMI} />
                  </Block>
                </Block>
              </Block>
            </Block>
          </ScrollView>
        </BottomSheet>
      </Block>
    </Block>
  ) : (
    <SafeAreaView
      edges={['top', 'left', 'right']}
      style={styles.sendControlContainerOuter}>
      <Header
        title={t('stats')}
        colorTheme={theme.colors.blue}
        backgroundColor={theme.colors.white}
      />
      <InviteLogin navigate={routes.LOGIN_SCREEN} routes={routes.INFO_SCREEN} />
    </SafeAreaView>
  );
};

export default StatsScreen;
