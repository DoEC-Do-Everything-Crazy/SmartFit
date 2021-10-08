import {HeartPf, Order} from '@assets/icons';
import {Block, Header as HeaderLogin, InviteLogin} from '@components';
import ItemFeature from '@components/ItemList/ItemFeature';
import {routes} from '@navigation/routes';
import {getSize, width} from '@utils/responsive';
import React from 'react';
import {useSelector} from 'react-redux';
import DateCategory from './components/DateCategory';
import Header from './components/Header';
import StatsBlock from './components/StatsBlock';
import {useTheme} from '@theme';

const StatsScreen = () => {
  const {
    theme: {theme: themeStore},
    user: {user},
  } = useSelector(state => state.root);
  const theme = useTheme(themeStore);

  return JSON.stringify(user) !== '{}' ? (
    <>
      <Block flex backgroundColor={theme.colors.backgroundSetting}>
        <Block height="20%">
          <Header
            image={
              'https://images.unsplash.com/photo-1588943211346-0908a1fb0b01?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
            }
            name={'Ho Cong Khanh'}
            date={'Sunday, July 18, 2021'}
          />
          <DateCategory />
        </Block>
        <Block
          row
          height="50%"
          alignCenter
          paddingHorizontal={16}
          marginTop={32}>
          <Block>
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
          <Block marginLeft={getSize.m(16)}>
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
        <Block height="30%" marginTop={10} paddingHorizontal={16}>
          <ItemFeature shadow height={50} title={'Daily Meals'}>
            <Order color={theme.colors.iconInf} />
          </ItemFeature>
          <ItemFeature shadow height={50} title={'Other Information'}>
            <HeartPf color={theme.colors.iconInf} />
          </ItemFeature>
        </Block>
      </Block>
    </>
  ) : (
    <>
      <HeaderLogin
        title="Stats"
        colorTheme={theme.colors.blue}
        backgroundColor={theme.colors.white}
      />
      <InviteLogin navigate={routes.LOGIN_SCREEN} routes={routes.INFO_SCREEN} />
    </>
  );
};

export default StatsScreen;
