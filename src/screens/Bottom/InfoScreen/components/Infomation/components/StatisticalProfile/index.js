import {icons} from '@assets';
import {Block, Text} from '@components';
import {width} from '@utils/responsive';
import React from 'react';
import {Image} from 'react-native';
import {useSelector} from 'react-redux';
import {useTheme} from '@theme';

const StatisticalProfile = ({balance, course}) => {
  const themeStore = useSelector(state => state.root.theme.theme);
  const theme = useTheme(themeStore);
  return (
    <Block height="10%" justifyCenter>
      <Block row paddingHorizontal={width / 4.5} space="between">
        <Block justifyCenter paddingRight={50} alignCenter borderRightWidth={1}>
          <Text color={theme.colors.darkBlue} fontType="bold">
            {balance}
          </Text>
          <Text color={theme.colors.darkBlue}>Balance</Text>
        </Block>
        <Image source={icons.line} />
        <Block justifyCenter alignCenter>
          <Text color={theme.colors.darkBlue} fontType="bold">
            {course}
          </Text>
          <Text color={theme.colors.darkBlue}>Course</Text>
        </Block>
      </Block>
    </Block>
  );
};

export default StatisticalProfile;
