/* eslint-disable react-hooks/exhaustive-deps */
import {Height, Order, Weight} from '@assets/icons';
// import {TextInput} from 'react-native';
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
    height: '',
    weight: '',
    bmi: '',
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
    console.log('fetchBMIData');
    try {
      const response = await bmiApi.getBMI(user.uid, {validateStatus: false});
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
      console.log('error', error.message);
    }
  };

  useEffect(() => {
    fetchBMIData();
  }, []);

  const addBMI = async () => {
    const currentDate = new Date();
    const date = convertDateFormat(currentDate);

    const data = {
      userID: user.uid,
      height: height,
      weight: weight,
      updatedAt: date,
    };

    try {
      const resData = await bmiApi.addBMI(data, {validateStatus: false});
      console.log(resData);
    } catch (error) {
      console.log('error', error.message);
    }
  };

  const updateBMI = async () => {
    const data = {
      id: bmi.id,
      userID: user.uid,
      height: height,
      weight: weight,
    };

    console.log(data);

    try {
      await bmiApi.updateBMI(data, {validateStatus: false});
      fetchBMIData();
    } catch (error) {
      console.log('error', error.message);
    }
  };

  const convertDateFormat = date => {
    const time = new Date(date);
    return time.getTime();
  };

  const handleAddBMI = async event => {
    addBMI();

    modalizRef.current?.close();
  };

  const handleUpdateBMI = async event => {
    updateBMI();

    modalizRef.current?.close();
  };

  return JSON.stringify(user) !== '{}' ? (
    <>
      <Block flex backgroundColor={theme.colors.blue}>
        <Header
          type={'Bottom'}
          title={t('stats')}
          colorTheme={theme.colors.white}
        />
        <DateCategory />
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
              userHeight={bmi.height === '' ? '0' : bmi.height + ' '}
            />
            <StatsBlock
              widthComponent={width / 2 - 24}
              heightComponent="40%"
              title={t('weight')}
              userWeight={bmi.weight === '' ? '0' : bmi.weight + ' '}
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
              valueCir={bmi.bmi}
            />
            <StatsBlock
              widthComponent={width / 2 - 24}
              heightComponent="50%"
              title={t('bodyShape')}
              heart
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
            <ScrollView>
              <Block flex>
                <Block row flex paddingTop={20} paddingHorizontal={16}>
                  <Block flex paddingTop={20} paddingHorizontal={16}>
                    <Block flex>
                      <TextInput
                        placeholder={t('enterYourHeight')}
                        maxLength={3}
                        leftIcon={true}
                        value={height + ''}
                        keyboardType="numeric"
                        onChangeText={setHeight}>
                        <Height color={theme.colors.text} />
                      </TextInput>
                    </Block>
                    <Block flex paddingTop={20}>
                      <TextInput
                        placeholder={t('enterYourWeight')}
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
                        onPress={
                          bmi.height || bmi.weight === 0
                            ? handleUpdateBMI
                            : handleAddBMI
                        }
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
  ) : (
    <>
      <Header
        title="Stats"
        colorTheme={theme.colors.blue}
        backgroundColor={theme.colors.white}
      />
      <InviteLogin navigate={routes.LOGIN_SCREEN} routes={routes.INFO_SCREEN} />
    </>
  );
};

export default StatsScreen;
