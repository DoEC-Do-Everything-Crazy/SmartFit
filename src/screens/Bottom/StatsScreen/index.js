import {icons} from '@assets';
import {Block} from '@components';
import ItemFeature from '@components/Common/ItemList/ItemFeature';
import {theme} from '@theme';
import {getSize, width} from '@utils/responsive';
import React from 'react';
import DateCategory from './components/DateCategory';
import Header from './components/Header';
import StatsBlock from './components/StatsBlock';
import {routes} from '@navigation/routes';
import {useSelector} from 'react-redux';
import {InviteLogin, Header as HeaderLogin} from '@components';
const StatsScreen = () => {
  const {user} = useSelector(state => state.root.user);
  return JSON.stringify(user) !== '{}' ? (
    <>
      <Block flex backgroundColor={theme.colors.background}>
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
              // onPress={() => console.log('aaa')}
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
          <ItemFeature
            shadow
            height={50}
            title={'Daily Meals'}
            icon={icons.apple}
          />
          <ItemFeature
            shadow
            height={50}
            title={'Other Information'}
            icon={icons.subtract}
          />
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
