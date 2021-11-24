import React from 'react';
import {Block, Header} from '@components';
import ListFeatureSetting from './components/ListFeatureSetting';
import {useTranslation} from 'react-i18next';
const SettingScreen = () => {
  const {t} = useTranslation();
  const DATA = [
    {
      title: t('information'),
      id: 1,
      count: 1,
      data_item_switch: [
        {
          name: t('updateProfile'),
          isSwitch: false,
          navigation: 'UPDATE_PROFILE_SCREEN',
        },
      ],
    },
    {
      title: t('security'),
      id: 2,
      count: 1,
      isSwitch: false,
      data_item_switch: [
        {
          name: t('changePassword'),
          isSwitch: false,
          navigation: 'CHANGE_PIN_CODE',
        },
        {
          name: t('usingPincode'),
          isSwitch: true,
          isPinCode: true,
        },
      ],
    },
    {
      title: t('theme'),
      id: 3,
      count: 3,
      isSwitch: true,
      data_item_switch: [
        {
          name: t('darkMode'),
          isSwitch: true,
        },
      ],
    },
    {
      title: t('changePassword'),
      id: 1,
      count: 1,
      data_item_switch: [
        {
          name: t('changePassword'),
          isSwitch: false,
          navigation: 'CHANGE_PASSWORD',
        },
      ],
    },
  ];
  return (
    <Block flex>
      <Header canGoBack title={t('setting')} />
      <ListFeatureSetting data={DATA} />
    </Block>
  );
};

export default SettingScreen;
