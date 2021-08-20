import {icons} from '@assets';
import {Block, Text} from '@components';
import {width} from '@utils/responsive';
import React from 'react';
import {Image} from 'react-native';

const StatisticalProfile = ({balance, course}) => {
  return (
    <Block justifyCenter height="10%">
      <Block row space="between" paddingHorizontal={width / 4.5}>
        <Block justifyCenter alignCenter>
          <Text color="#444C5C" fontType="bold">
            {balance}
          </Text>
          <Text color="#444C5C">Balance</Text>
        </Block>
        <Image source={icons.line} />
        <Block justifyCenter alignCenter>
          <Text color="#444C5C" fontType="bold">
            {course}
          </Text>
          <Text color="#444C5C">Course</Text>
        </Block>
      </Block>
    </Block>
  );
};

export default StatisticalProfile;
