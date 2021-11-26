/* eslint-disable react-hooks/exhaustive-deps */
import {Block, Button, Header, Text} from '@components';
import {Modal, Platform, Pressable, TouchableOpacity, View} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import {removeUser, setUser} from 'reduxs/reducers';
import {useDispatch, useSelector} from 'react-redux';

import InfoProfile from './components/InfoProfile';
import ListItemFeature from './components/ListItemFeature';
import setAuthToken from 'utils/setAuthToken';
import {useStyles} from './styles';
import {useTheme} from '@theme';
import {useTranslation} from 'react-i18next';

const Information = props => {
  const [modalVisible, setModalVisible] = useState(false);
  const dispatch = useDispatch();
  const {
    theme: {theme: themeStore},
    user: {user, token},
  } = useSelector(state => state.root);
  const {t} = useTranslation();
  const theme = useTheme(themeStore);
  const styles = useStyles(props, themeStore);
  const handleLogout = useCallback(() => {
    setModalVisible(false);
    setAuthToken(undefined);
    dispatch(setUser(undefined));
  }, [dispatch]);

  useEffect(() => {
    setAuthToken(token);
  }, []);

  return (
    <Block flex backgroundColor={theme.colors.blue}>
      <Header
        type="Bottom"
        title={t('information')}
        colorTheme={theme.colors.white}
      />
      <Block
        flex
        style={styles.container}
        backgroundColor={theme.colors.backgroundSetting}>
        <InfoProfile user={user} />
        <ListItemFeature />
        <Button
          title={t('logout')}
          onPress={() => {
            setModalVisible(true);
          }}
        />
      </Block>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <Pressable
          style={[
            Platform.OS === 'ios' ? styles.iOSBackdrop : styles.androidBackdrop,
            styles.backdrop,
          ]}
          onPress={() => setModalVisible(false)}
        />
        <View style={styles.containerBox}>
          <View style={styles.alertBox}>
            <View>
              <Text style={styles.titleDialog} fontType="bold">
                Do you really want to log out?
              </Text>
            </View>
            <View style={styles.btnSubmit}>
              <TouchableOpacity onPress={() => setModalVisible(false)}>
                <View style={styles.btnNo}>
                  <Text style={styles.titleNo} variant="bold">
                    NO
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={handleLogout}>
                <View style={styles.btnYes}>
                  <Text style={styles.titleNo} variant="bold">
                    YES
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </Block>
  );
};

export default Information;
