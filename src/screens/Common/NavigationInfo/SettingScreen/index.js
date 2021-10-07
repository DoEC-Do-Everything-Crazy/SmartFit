import React from 'react';
import {Block, Header} from '@components';
import ListFeatureSetting from './components/ListFeatureSetting';
import DATA from './data';

const SettingScreen = () => {
  return (
    <Block flex>
      <Header canGoBack title="Setting" />
      <ListFeatureSetting data={DATA} />
    </Block>
  );
};

export default SettingScreen;
