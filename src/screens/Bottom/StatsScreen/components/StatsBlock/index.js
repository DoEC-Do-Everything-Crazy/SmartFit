import {Heart} from '@assets/icons';
import {Block, Text} from '@components';
import React from 'react';
import {Pressable} from 'react-native';
import CircularProgress from 'react-native-circular-progress-indicator';
import {useStyles} from './styles';
import {useSelector} from 'react-redux';
import {useTheme} from '@theme';

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
  const theme = useTheme(themeStore);
  const colorProgress = themeStore === 'dark' ? '#045694' : '#2ecc71';
  return (
    <Block
      shadow={20}
      width={width}
      height={height}
      borderRadius={10}
      backgroundColor={theme.colors.border}
      marginVertical={8}
      paddingVertical={10}
      paddingHorizontal={10}>
      <Pressable onPress={onPress}>
        <Text style={styles.text}>{title}</Text>
        <Block alignCenter height="30%">
          {circular ? (
            <CircularProgress
              value={valueCir}
              activeStrokeColor={colorProgress}
              inActiveStrokeColor={colorProgress}
              inActiveStrokeOpacity={0.3}
              textColor={colorProgress}
            />
          ) : (
            <Text />
          )}
          {heart ? <Heart color={colorProgress} /> : <Text />}
        </Block>
        {clock ? <Text style={styles.clock}>08:00</Text> : <Text />}
        {clock ? <Text style={styles.clock1}>Hours</Text> : <Text />}
        {bmp ? <Text>110 bpm</Text> : <Text />}
      </Pressable>
    </Block>
  );
};

export default StatsBlock;
