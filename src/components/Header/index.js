import {icons} from '@assets';
import {Block, Text} from '@components';
import {useNavigation} from '@react-navigation/native';
import {theme} from '@theme';
import {getSize} from '@utils/responsive';
import React from 'react';
import {Image, Pressable} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useSelector} from 'react-redux';
import styles from './styles';

const Header = ({
  title,
  canGoBack,
  indicator,
  hasActionBar,
  isFavorite,
  onFavoriteClick,
}) => {
  const {top} = useSafeAreaInsets();
  const navigation = useNavigation();
  const config = useSelector(state => state.config.data);

  return (
    <Block paddingTop={top + 10} padding={16}>
      <Block row space="between">
        <Block row alignCenter>
          {canGoBack && (
            <Pressable
              onPress={() => navigation.goBack()}
              style={styles.btnBack}>
              <Image
                source={icons.back}
                style={styles.iconBack}
                resizeMode="contain"
              />
            </Pressable>
          )}
          <Text size={18} fontType="bold">
            {title}
          </Text>
        </Block>
        {hasActionBar && (
          <Block row alignCenter>
            <Image
              source={icons.share}
              style={styles.iconAction(config)}
              resizeMode="contain"
            />
            <Pressable onPress={onFavoriteClick}>
              <Image
                source={isFavorite ? icons.like_fill : icons.like_outline}
                style={{
                  ...styles.iconAction(config),
                  marginLeft: getSize.m(24),
                }}
                resizeMode="contain"
              />
            </Pressable>
          </Block>
        )}
      </Block>
      {indicator && (
        <Block
          marginTop={3}
          height={3}
          width="20%"
          backgroundColor={theme.colors.orange}
        />
      )}
    </Block>
  );
};

export default Header;
