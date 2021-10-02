import {icons} from '@assets';
import {Block, Text} from '@components';
import LottieView from 'lottie-react-native';
import React from 'react';
import {Image, Pressable} from 'react-native';
import styles from './styles';

const Empty = ({
  icon,
  lottie,
  content,
  contentMore,
  onPress,
  style,
  imageStyles,
  buttonStyles,
}) => {
  return (
    <Block flex alignCenter justifyCenter padding={12} style={style}>
      {lottie ? (
        <LottieView
          loop
          autoPlay
          source={lottie}
          style={[styles.lottie, imageStyles]}
        />
      ) : (
        <Image
          source={icon || icons.empty_list}
          style={styles.icon}
          resizeMode="contain"
        />
      )}
      <Text size={16}>{content}</Text>
      {contentMore && (
        <Pressable onPress={onPress}>
          <Block style={[styles.button, buttonStyles]}>
            <Text center color="white">
              {contentMore}
            </Text>
          </Block>
        </Pressable>
      )}
    </Block>
  );
};

export default Empty;
