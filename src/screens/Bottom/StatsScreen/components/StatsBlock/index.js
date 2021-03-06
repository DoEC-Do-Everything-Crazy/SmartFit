import {icons} from '@assets';
import {Block, Text} from '@components';
import {getSize} from '@utils/responsive';
import React from 'react';
import {Image, Pressable} from 'react-native';
import CircularProgress from 'react-native-circular-progress-indicator';
import styles from './styles';

const StatsBlock = ({
  title,
  height,
  width,
  circular,
  heart,
  valueCir,
  clock,
  bmp,
  onPress,
}) => {
  return (
    <Block
      shadow={20}
      width={width}
      height={height}
      borderRadius={10}
      backgroundColor="white"
      marginVertical={8}
      paddingVertical={10}
      paddingHorizontal={10}>
      <Pressable onPress={onPress}>
        <Text style={styles.text}>{title}</Text>
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
      </Pressable>
    </Block>
  );
};

export default StatsBlock;
