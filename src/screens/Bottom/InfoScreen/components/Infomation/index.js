import {Block, Button, Header} from '@components';
import {useDispatch, useSelector} from 'react-redux';

import InfoProfile from './components/InfoProfile';
import ListItemFeature from './components/ListItemFeature';
import React from 'react';
import {removeUser} from 'reduxs/reducers';
import {useStyles} from './styles';
import {useTheme} from '@theme';
import {useTranslation} from 'react-i18next';
import {ScrollView} from 'react-native';

const Information = props => {
  const dispatch = useDispatch();
  const {
    theme: {theme: themeStore},
    user: {user},
  } = useSelector(state => state.root);
  const {t} = useTranslation();
  const theme = useTheme(themeStore);
  const styles = useStyles(props, themeStore);

  return (
    <Block flex backgroundColor={theme.colors.blue}>
      <Header
        type="Bottom"
        title={t('information')}
        colorTheme={theme.colors.white}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Block
          flex
          style={styles.container}
          backgroundColor={theme.colors.backgroundSetting}>
          <InfoProfile user={user} />
          <ListItemFeature />
          <Button
            title={t('logout')}
            onPress={() => {
              dispatch(removeUser());
            }}
          />
        </Block>
      </ScrollView>
    </Block>
  );
};

export default Information;
