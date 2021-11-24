import {Block, Text} from '@components';
import React, {useState} from 'react';

import {Pressable} from 'react-native';
import {useSelector} from 'react-redux';
import {useTheme} from '@theme';
import {useTranslation} from 'react-i18next';

const DescriptionDetail = ({desc}) => {
  const [seeMore, setSeemore] = useState(true);
  const {
    theme: {theme: themeStore},
  } = useSelector(stateRoot => stateRoot.root);

  const {t} = useTranslation();

  const theme = useTheme(themeStore);
  const numberOfLines = seeMore ? 0 : 2;
  const txtSeemore = seeMore ? t('collapse') : t('seeMore');

  const isSeemore = () => setSeemore(!seeMore);
  return (
    <Block marginTop={32} paddingHorizontal={16}>
      <Text
        size={16}
        numberOfLines={numberOfLines}
        color={theme.colors.textLight}
        fontType="bold">
        {desc}
      </Text>
      <Pressable onPress={() => isSeemore()}>
        <Text size={16} fontType="bold" color={theme.colors.orange}>
          {txtSeemore}
        </Text>
      </Pressable>
    </Block>
  );
};

export default DescriptionDetail;
