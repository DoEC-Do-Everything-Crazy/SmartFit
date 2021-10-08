import {Block, Text} from '@components';
import React from 'react';
import {Image} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useStyles} from './styles';
import {useSelector} from 'react-redux';
import {useTheme} from '@theme';

const Header = ({image, name, date, props}) => {
  const {top} = useSafeAreaInsets();
  const {
    theme: {theme: themeStore},
  } = useSelector(state => state.root);
  const styles = useStyles(props, themeStore);
  const theme = useTheme(themeStore);
  return (
    <Block
      borderBottomWidth={1}
      borderColor={theme.colors.border}
      row
      paddingVertical={16}
      marginHorizontal={16}
      marginTop={top}>
      <Image
        style={styles.image}
        source={{
          uri: image,
        }}
      />
      <Block marginHorizontal={15}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.date}>{date}</Text>
      </Block>
    </Block>
  );
};

export default Header;
