import React, {useState} from 'react';
import {Image} from 'react-native';
import {Block, Text} from '@components';
import styles from './styles';
import {getSize, width} from '@utils/responsive';
import CircularProgress from 'react-native-circular-progress-indicator';
import {icons} from '@assets';

const StatsBlock = ({
  title,
  height,
  width,
  icon,
  circular,
  heart,
  valueCir,
  clock,
  bmp,
}) => {
  return (
    <Block
      shadow={15}
      width={width}
      height={height}
      borderRadius={10}
      backgroundColor="white"
      marginVertical={getSize.m(8)}
      paddingVertical={getSize.m(10)}
      paddingHorizontal={getSize.m(10)}>
      <Block row space="between">
        <Text style={styles.text}>{title}</Text>
        <Block width={getSize.s(20)} height={getSize.v(20)} radius={20}>
          <Image source={icon} />
        </Block>
      </Block>
      <Block alignCenter height="30%">
        {circular ? (
          <CircularProgress
            value={valueCir}
            inActiveStrokeColor={'#2ecc71'}
            inActiveStrokeOpacity={0.2}
            textColor={'black'}
          />
        ) : (
          <Text></Text>
        )}
        {heart ? <Image source={icons.heart} /> : <Text></Text>}
      </Block>
      {clock ? <Text style={styles.clock}>08:00</Text> : <Text></Text>}
      {clock ? <Text style={styles.clock1}>Hours</Text> : <Text></Text>}
      {bmp ? <Text>110 bpm</Text> : <Text></Text>}
    </Block>
  );
};

export default StatsBlock;
