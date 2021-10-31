import {Block, Camera as CameraComponent} from '@components';
import {routes} from '@navigation/routes';
import React from 'react';
import {useSelector} from 'react-redux';
import Header from '../Header';
import {useNavigation} from '@react-navigation/core';
import {useStyles} from './styles';

const takePicture = ({props}) => {
  const navigation = useNavigation();
  const styles = useStyles(props, themeStore);
  const {
    theme: {theme: themeStore},
  } = useSelector(stateRoot => stateRoot.root);

  return (
    <Block>
      <Block style={styles.header}>
        <Header onPress={() => navigation.goBack()} />
      </Block>
      <CameraComponent screen={routes.RATE_SCREEN} />
    </Block>
  );
};

export default takePicture;
