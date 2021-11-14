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
import {Overweight} from '@assets/icons/Overweight';
import {Block, Button, Header, InviteLogin, Text, TextInput} from '@components';
import {BottomSheet} from '@components/BottomSheet';
import ItemFeature from '@components/ItemList/ItemFeature';
import {routes} from '@navigation/routes';
import {useTheme} from '@theme';
import {getSize, width} from '@utils/responsive';
import {bmiApi} from 'api/bmiApi';
import React, {useCallback, useRef, useState, useEffect} from 'react';
import {useTranslation} from 'react-i18next';
import {Platform, ScrollView} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useSelector} from 'react-redux';
import DateCategory from './components/DateCategory';
import StatsBlock from './components/StatsBlock';
import {useStyles} from './styles';

const StatsScreen = props => {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBMI] = useState({
    id: '',
    type: '',
    height: 0,
    weight: 0,
    bmi: 0,
  });
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
          {t('yourStats')}
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

  const fetchBMIData = async () => {
    try {
      const response = await bmiApi.getBMI(user.uid, {
        validateStatus: false,
      });
      if (response) {
        setBMI({
          id: response._id,
          type: response.type,
          height: response.height,
          weight: response.weight,
          bmi: response.bmi,
        });
        setHeight(response.height);
        setWeight(response.weight);
      }
    } catch (error) {
      console.log('error', error.message);
    }
  };

  useEffect(() => {
    fetchBMIData();
  }, []);

  const handleBMI = async () => {
    const data = {
      userID: user.uid,
      height: height,
      weight: weight,
    };

    try {
      await bmiApi.addUpdateBMI(data, {validateStatus: false});
      fetchBMIData();
    } catch (error) {
      console.log('error', error.message);
    }
  };

  const handleAddUpdateBMI = async () => {
    modalizRef.current?.close();

    handleBMI();
  };

  return (
    <>
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
                bmi.type === 'Underweight' ? (
                  <Underweight color={theme.colors.iconInf} />
                ) : bmi.type === 'Overweight' ? (
                  <Overweight color={theme.colors.iconInf} />
                ) : bmi.type === 'Ordinary' ? (
                  <Ordinary color={theme.colors.iconInf} />
                ) : bmi.type === '' ? (
                  <Body color={theme.colors.iconInf} />
                ) : (
                  <Fat color={theme.colors.iconInf} />
                )
              }
              bmp={bmi.type === '' ? 'Do not have' : bmi.type}
            />
          </Block>
        </Block>
        <Block
          height="30%"
          paddingTop={10}
          backgroundColor={theme.colors.backgroundSetting}>
          <Block paddingHorizontal={16}>
            <ItemFeature shadow height={50} title={t('dailyMeals')}>
              <Order color={theme.colors.iconInf} />
            </ItemFeature>
          </Block>
          <Block flex style={styles.button}>
            <Button
              onPress={() => modalizRef.current?.open()}
              title={t('createStats')}
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
                    <Block flex paddingTop={20} paddingHorizontal={16}>
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
                      <Button
                        title={t('confirm')}
                        onPress={handleAddUpdateBMI}
                      />
                    </Block>
                  </Block>
                </Block>
              </Block>
            </ScrollView>
          </BottomSheet>
        </Block>
      </Block>
    </>
    // ) : (
    //   <>
    //     <Header
    //       title="Stats"
    //       colorTheme={theme.colors.blue}
    //       backgroundColor={theme.colors.white}
    //     />
    //     <InviteLogin navigate={routes.LOGIN_SCREEN} routes={routes.INFO_SCREEN} />
    //   </>
  );
};

export default StatsScreen;
