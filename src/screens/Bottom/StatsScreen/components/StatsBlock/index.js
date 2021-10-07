import {Heart} from '@assets/icons';
import {Block, Text} from '@components';
import React from 'react';
import {Pressable} from 'react-native';
import CircularProgress from 'react-native-circular-progress-indicator';
import {useStyles} from './styles';
import {useSelector} from 'react-redux';

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
  props,
}) => {
  const {
    theme: {theme: themeStore},
  } = useSelector(state => state.root);
  const styles = useStyles(props, themeStore);
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
            <Text />
          )}
          {heart ? <Heart /> : <Text />}
        </Block>
        {clock ? <Text style={styles.clock}>08:00</Text> : <Text />}
        {clock ? <Text style={styles.clock1}>Hours</Text> : <Text />}
        {bmp ? <Text>110 bpm</Text> : <Text />}
      </Pressable>
    </Block>
  );
};

export default StatsBlock;
