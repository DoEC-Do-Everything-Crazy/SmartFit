import {Height, Order, Weight} from '@assets/icons';
import {Block, Button, Header, InviteLogin, Text, TextInput} from '@components';
import {BottomSheet} from '@components/BottomSheet';
import ItemFeature from '@components/ItemList/ItemFeature';
import {routes} from '@navigation/routes';
import {getSize, width} from '@utils/responsive';
import React, {useRef, useCallback, useState} from 'react';
import {useSelector} from 'react-redux';
import DateCategory from './components/DateCategory';
import StatsBlock from './components/StatsBlock';
import {useTheme} from '@theme';
import {useStyles} from './styles';
import {Platform, ScrollView} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const StatsScreen = props => {
  const [weighttUser, setWeight] = useState(0);
  const [heightUser, setHeight] = useState(0);
  const modalizRef = useRef(null);
  const {
    theme: {theme: themeStore},
    user: {user},
  } = useSelector(state => state.root);
  const theme = useTheme(themeStore);
  const styles = useStyles(props, themeStore);
  const insets = useSafeAreaInsets();
  const HeaderComponent = useCallback(() => {
    return (
      <Block style={styles.headerWrapper}>
        <Text fontType="bold" style={styles.title}>
          Your Stats
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
        <Button title="Create New Stats" />
      </Block>
    );
  }, []);

  return JSON.stringify(user) !== '{}' ? (
    <>
      <Block flex backgroundColor={theme.colors.blue}>
        <Header type={'Bottom'} title="Stats" colorTheme={theme.colors.white} />
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
              width={width / 2 - 24}
              height="50%"
              title="Steps"
              circular
              valueCir={2285}
            />
            <StatsBlock
              width={width / 2 - 24}
              height="40%"
              title="Heart"
              heart
              bmp
            />
          </Block>
          <Block
            marginLeft={getSize.m(16)}
            backgroundColor={theme.colors.backgroundSetting}>
            <StatsBlock
              width={width / 2 - 24}
              height="40%"
              title="Sleep"
              clock
            />
            <StatsBlock
              width={width / 2 - 24}
              height="50%"
              title="Calories"
              circular={true}
              valueCir={357}
            />
          </Block>
        </Block>
        <Block
          height="30%"
          paddingTop={10}
          backgroundColor={theme.colors.backgroundSetting}>
          <Block paddingHorizontal={16}>
            <ItemFeature shadow height={50} title={'Daily Meals'}>
              <Order color={theme.colors.iconInf} />
            </ItemFeature>
          </Block>
          <Block flex style={styles.button}>
            <Button
              onPress={() => modalizRef.current?.open()}
              title="Create Stats"
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
                        placeholder="Enter your height"
                        leftIcon={true}
                        value={heightUser}
                        onChangeText={setHeight}>
                        <Height color={theme.colors.text} />
                      </TextInput>
                    </Block>
                    <Block flex paddingTop={20}>
                      <TextInput
                        placeholder="Enter your weight"
                        leftIcon={true}
                        value={weighttUser}
                        onChangeText={setWeight}>
                        <Weight color={theme.colors.text} />
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
