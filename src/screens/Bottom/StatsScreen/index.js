import {HeartPf, Order} from '@assets/icons';
import {Block, Header, InviteLogin} from '@components';
import ItemFeature from '@components/ItemList/ItemFeature';
import {routes} from '@navigation/routes';
import {getSize, width} from '@utils/responsive';
import React from 'react';
import {useSelector} from 'react-redux';
import DateCategory from './components/DateCategory';
import StatsBlock from './components/StatsBlock';
import {useTheme} from '@theme';
import {useStyles} from './styles';

const StatsScreen = props => {
  const {
    theme: {theme: themeStore},
    user: {user},
  } = useSelector(state => state.root);
  const theme = useTheme(themeStore);
  const styles = useStyles(props, themeStore);

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
          paddingHorizontal={16}
          backgroundColor={theme.colors.backgroundSetting}>
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
