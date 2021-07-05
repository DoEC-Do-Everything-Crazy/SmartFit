import {Block} from '@components';
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const Header = ({title, canGoBack}) => {
  const {top} = useSafeAreaInsets();
  const navigation = useNavigation();

  return <Block paddingTop={top + 10} padding={16}></Block>;
};

export default Header;
