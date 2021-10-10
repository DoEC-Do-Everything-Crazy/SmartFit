import React from 'react';

import {Switch} from 'react-native-switch';

const Switcher = ({value, onValueChange}) => {
  return (
    <Switch
      value={value}
      onValueChange={onValueChange}
      circleSize={20}
      barHeight={21}
      circleBorderWidth={0}
      backgroundActive={'#35C4BA'}
      backgroundInactive={'gray'}
      circleActiveColor={'#ffff'}
      circleInActiveColor={'#ffff'}
      renderActiveText={false}
      renderInActiveText={false}
      switchLeftPx={2.8}
      switchRightPx={2.8}
      switchWidthMultiplier={1.8}
      switchBorderRadius={20}
    />
  );
};
export default Switcher;
