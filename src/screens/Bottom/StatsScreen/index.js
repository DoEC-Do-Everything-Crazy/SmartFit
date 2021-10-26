/* eslint-disable react-hooks/exhaustive-deps */
import {Height, Order, Weight} from '@assets/icons';
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
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [bmi, setBMI] = useState({
    type: '',
    height: '',
    weight: '',
    bmi: '',
  });
  const [Id, setId] = useState('');
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
  const FooterComponent = useCallback(() => {
    return (
      <Block>
        <Button title={t('confirm')} onPress={handleAddBMI} />
      </Block>
    );
  }, []);

  const fetchBMIData = async () => {
    try {
      const resData = await bmiApi.getBMI(user.uid, {validateStatus: false});
      setBMI({
        type: resData.type,
        height: resData.height,
        weight: resData.weight,
        bmi: resData.bmi,
      });
      setId(resData._id);
    } catch (error) {
      console.log('error', error.message);
    }
  };

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
    console.log(user.uid, height, weight, date);
  };

  const updateBMI = async () => {
    const currentDate = new Date();
    const date = convertDateFormat(currentDate);

    const data = {
      id: Id,
      userID: user.uid,
      height: height,
      weight: weight,
      updatedAt: date,
    };

    try {
      await bmiApi.updateBMI(data, {validateStatus: false});
    } catch (error) {
      console.log('error', error.message);
    }
  };

  const convertDateFormat = date => {
    const time = new Date(date);
    return time.getTime();
  };

  const handleAddBMI = async event => {
    event.preventDefault();

    addBMI();
  };

  const handleUpdateBMI = async event => {
    event.preventDefault();

    updateBMI();
  };

  useEffect(() => {
    fetchBMIData();
  }, [bmi]);

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
            HeaderComponent={HeaderComponent}
            FooterComponent={FooterComponent}
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
                        placeholder={
                          bmi.height === '' ? t('enterYourHeight') : bmi.height
                        }
                        leftIcon={true}
                        keyboardType="numeric"
                        defaultValue={bmi.height}
                        onChangeText={text => setHeight(text)}>
                        <Height color={theme.colors.text} />
                      </TextInput>
                    </Block>
                    <Block flex paddingTop={20}>
                      <TextInput
                        placeholder={
                          bmi.weight === '' ? t('enterYourWeight') : bmi.weight
                        }
                        leftIcon={true}
                        keyboardType="numeric"
                        defaultValue={bmi.weight}
                        onChangeText={text => setWeight(text)}>
                        <Weight
                          width={24}
                          height={24}
                          color={theme.colors.text}
                        />
                      </TextInput>
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
