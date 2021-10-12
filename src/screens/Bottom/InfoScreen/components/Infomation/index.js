import {Block, Button, Header, Text} from '@components';
import {useDispatch, useSelector} from 'react-redux';

import {AuthService} from '@services';
import {DATA_STATISTICAL_PROFILE} from '@constants/';
import InfoProfile from './components/InfoProfile';
import ListItemFeature from './components/ListItemFeature';
import React from 'react';
import StatisticalProfile from './components/StatisticalProfile';
import {TouchableOpacity} from 'react-native';
import {removeUser} from 'reduxs/reducers';
import {useStyles} from './styles';
import {useTheme} from '@theme';

const Information = props => {
  const dispatch = useDispatch();
  const {
    theme: {theme: themeStore},
    user: {user},
  } = useSelector(state => state.root);

  const theme = useTheme(themeStore);
  const styles = useStyles(props, themeStore);

  return (
    <Block flex backgroundColor={theme.colors.blue}>
      <Header
        type="Bottom"
        title="Infomation"
        colorTheme={theme.colors.white}
      />
      <Block
        flex
        style={styles.container}
        backgroundColor={theme.colors.backgroundSetting}>
        <InfoProfile user={user} />
        <ListItemFeature />
        <Button
          title="Logout"
          onPress={() => {
            dispatch(removeUser());
          }}
        />
      </Block>
    </Block>
  );
};

export default Information;
