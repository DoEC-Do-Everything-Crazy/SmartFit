import {Block, Button, Switcher, Text, TextInput} from '@components';
import React, {useCallback, useRef, useState} from 'react';
import {Pressable, Platform} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import {Right} from '@assets/icons';
import * as yup from 'yup';
import {Formik} from 'formik';
import {BottomSheet} from '@components/BottomSheet';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useDispatch, useSelector} from 'react-redux';
import {
  changePassword,
  changeTheme,
  turnDarkMode,
  turnPassword,
} from 'reduxs/reducers';
import {useStyles} from './styles';
import {useTheme} from '@theme';

const ItemSetting = ({data, title, index}, props) => {
  const {
    theme: {theme: themeStore},
    password: {password},
    turn: {isTurnPassword, isTurnDarkMode},
  } = useSelector(stateRoot => stateRoot.root);
  const styles = useStyles(props, themeStore);
  const theme = useTheme(themeStore);

  const navigation = useNavigation();
  const Item = ({isSwitch, name, onPress, index}) => {
    const [isEnabled, setIsEnabled] = useState(false);
    const [textError, setTextErrord] = useState('');
    const [passInput, setPassInput] = useState('');
    const dispatch = useDispatch();
    const modalizeRef = useRef(null);
    const insets = useSafeAreaInsets();

    const handleOpenBottomSheet = useCallback(() => {
      if (isTurnPassword === false) {
        modalizeRef?.current.open();
      } else {
        modalizeRef?.current.open();
      }
    }, []);

    const handleDarkMode = useCallback(() => {
      if (themeStore === 'dark') {
        dispatch(changeTheme('light'));
        dispatch(turnDarkMode());
      } else {
        dispatch(changeTheme('dark'));
        dispatch(turnDarkMode());
      }
    }, [dispatch]);

    const toggleSwitchCreate = useCallback(
      newPassword => {
        dispatch(changePassword(newPassword));
        dispatch(turnPassword());
        modalizeRef?.current.close();
      },
      [dispatch],
    );
    const toggleSwitchConfirm = useCallback(
      passwordInput => {
        if (passwordInput === password) {
          modalizeRef?.current.close();
          dispatch(turnPassword());
          setTextErrord('');
          setPassInput('');
        } else {
          setTextErrord('You have entered the wrong password');
        }
      },
      [dispatch],
    );
    const FloatingComponent = useCallback(() => {
      if (insets.bottom === 0) {
        return null;
      } else {
        return (
          <Block style={[styles.floatComponent, {height: insets.bottom}]} />
        );
      }
    }, [insets.bottom]);

    const validationNewPasswordSchema = yup.object().shape({
      newPassword: yup
        .string()
        .min(6, () => 'New Password must be at least 6 characters')
        .required('Password is Required'),
    });

    const HeaderComponent = useCallback(() => {
      return (
        <>
          {password === '' ? (
            <Formik
              validationSchema={validationNewPasswordSchema}
              initialValues={{
                newPassword: '',
              }}>
              {({
                handleChange,
                handleBlur,
                touched,
                errors,
                values,
                isValid,
                dirty,
              }) => (
                <Block
                  backgroundColor={theme.colors.backgroundSetting}
                  paddingVertical={10}>
                  <Text center fontType="bold" size={16}>
                    Create new password
                  </Text>
                  <Block marginTop={30} marginHorizontal={16}>
                    <TextInput
                      onChangeText={handleChange('newPassword')}
                      value={values.newPassword}
                      inputStyle={styles.textInput}
                      placeholder="Enter New Password"
                      onBlur={handleBlur('newPassword')}
                      isSecure
                    />
                    {errors.newPassword && touched.newPassword && (
                      <Text style={styles.text}>{errors.newPassword}</Text>
                    )}
                  </Block>
                  <Button
                    title="Access"
                    disabled={dirty && isValid ? false : true}
                    onPress={() => {
                      toggleSwitchCreate(values.newPassword);
                    }}
                    style={styles.button}
                  />
                </Block>
              )}
            </Formik>
          ) : (
            <Block
              paddingVertical={10}
              backgroundColor={theme.colors.backgroundSetting}>
              <Text center fontType="bold" size={16}>
                Enter password
              </Text>
              <Block marginTop={30} marginHorizontal={16}>
                <TextInput
                  onChangeText={setPassInput}
                  value={passInput}
                  inputStyle={styles.textInput}
                  placeholder="Enter password"
                  isSecure
                />
                <Text style={styles.text}>{textError}</Text>
              </Block>
              <Button
                title="Access"
                onPress={() => {
                  toggleSwitchConfirm(passInput);
                }}
              />
            </Block>
          )}
        </>
      );
    }, [
      passInput,
      textError,
      toggleSwitchConfirm,
      toggleSwitchCreate,
      validationNewPasswordSchema,
    ]);

    return (
      <>
        <Block key={index}>
          {isSwitch ? (
            <Block
              paddingHorizontal={16}
              row
              alignCenter
              height={48}
              space="between">
              <Text size={16}>{name}</Text>
              <Switcher
                value={
                  index === 1
                    ? isTurnPassword
                    : index === 2
                    ? isTurnDarkMode
                    : null
                }
                onValueChange={() => {
                  index === 1
                    ? handleOpenBottomSheet()
                    : index === 2
                    ? handleDarkMode()
                    : null;
                }}
              />
            </Block>
          ) : (
            <Pressable
              onPress={onPress}
              disabled={index === 1 ? (password ? false : true) : null}>
              <Block
                paddingHorizontal={16}
                row
                alignCenter
                height={48}
                style={styles.changePass}
                backgroundColor={
                  index === 1
                    ? password
                      ? theme.colors.border
                      : theme.colors.disabled
                    : null
                }
                space="between">
                <Text
                  color={
                    index === 1
                      ? password
                        ? theme.colors.text
                        : theme.colors.white
                      : theme.colors.text
                  }
                  size={16}>
                  {name}
                </Text>
                <Right color={theme.colors.text} />
              </Block>
            </Pressable>
          )}
        </Block>

        <BottomSheet
          ref={modalizeRef}
          adjustToContentHeight={true}
          HeaderComponent={HeaderComponent}
          FloatingComponent={FloatingComponent}
          scrollViewProps={{keyboardShouldPersistTaps: 'handle'}}
          keyboardAvoidingBehavior={
            Platform.OS === 'ios' ? 'padding' : 'height'
          }
        />
      </>
    );
  };

  const renderItem = item => {
    const onPress = () => {
      navigation.navigate(item.navigation);
    };
    return (
      <Item
        onPress={onPress}
        isSwitch={item.isSwitch}
        name={item.name}
        isPinCode={item.isPinCode}
        index={index}
      />
    );
  };
  return (
    <Block marginHorizontal={16} marginBottom={10}>
      <Text color={theme.colors.text} size={18} fontType="bold">
        {title}
      </Text>
      <Block
        shadow
        marginTop={10}
        borderRadius={8}
        space="between"
        backgroundColor={theme.colors.border}>
        {data.map(renderItem)}
      </Block>
    </Block>
  );
};

export default ItemSetting;
