import {Heart, WeightBig} from '@assets/icons';
import {Block, Text} from '@components';
import React from 'react';
import {Pressable} from 'react-native';
import CircularProgress from 'react-native-circular-progress-indicator';
import {useStyles} from './styles';
import {useSelector} from 'react-redux';
import {useTheme} from '@theme';
import {HeightBig} from '@assets/icons/HeightBig';

const StatsBlock = ({
  title,
  heightComponent,
  widthComponent,
  circular,
  heart,
  valueCir,
  userHeight,
  userWeight,
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
      width={widthComponent}
      height={heightComponent}
      borderRadius={10}
      alignCenter
      backgroundColor={theme.colors.border}
      marginVertical={8}
      paddingHorizontal={10}>
      <Pressable onPress={onPress}>
        <Text margin={10} style={styles.text}>
          {title}
        </Text>

        <Block
          width={widthComponent}
          height={heightComponent}
          alignCenter
          justifyCenter>
          {circular ? (
            <Block alignCenter height="50%">
              <CircularProgress
                value={valueCir}
                radius={50}
                activeStrokeColor={colorProgress}
                inActiveStrokeColor={colorProgress}
                inActiveStrokeOpacity={0.3}
                textColor={colorProgress}
              />
            </Block>
          ) : (
            <Text />
          )}
          {heart ? <Heart color={colorProgress} /> : <Text />}

          {userHeight && (
            <Block
              style={styles.body}
              marginTop={20}
              row
              alignCenter
              justifyCenter>
              <HeightBig color={theme.colors.text} />
              <Block marginLeft={5} column alignCenter>
                <Text style={styles.clock} color={theme.colors.iconInf}>
                  {userHeight}
                </Text>
                <Text style={styles.clock1} color={theme.colors.iconInf}>
                  Cm
                </Text>
              </Block>
            </Block>
          )}
          {userWeight && (
            <Block style={styles.body} row alignCenter justifyCenter>
              <WeightBig color={theme.colors.text} />
              <Block marginLeft={5} column alignCenter>
                <Text style={styles.clock} color={theme.colors.iconInf}>
                  {userWeight}
                </Text>
                <Text style={styles.clock1} color={theme.colors.iconInf}>
                  Kg
                </Text>
              </Block>
            </Block>
          )}
          {bmp ? <Text>110 bpm</Text> : <Text />}
        </Block>
      </Pressable>
    </Block>
  );
};

export default StatsBlock;
