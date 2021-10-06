import {Block, Button, Text, TextInput} from '@components';
import React, {useCallback, useRef, useState} from 'react';
import {Switch, Pressable, Platform} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import {Right} from '@assets/icons';
import * as yup from 'yup';
import {Formik} from 'formik';
import {BottomSheet} from '@components/BottomSheet';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useDispatch, useSelector} from 'react-redux';
import {changePassword, turnPassword} from 'reduxs/reducers';
import {useStyles} from './styles';
import {useTheme} from '@theme';

const ItemSetting = ({data, title, index}, props) => {
  const {
    theme: {theme: themeStore},
  } = useSelector(stateRoot => stateRoot.root);
  const styles = useStyles(props, themeStore);
  const theme = useTheme(themeStore);
  const navigation = useNavigation();
  const Item = ({isSwitch, name, onPress, index}) => {
    const {password, isTurn} = useSelector(state => state.root.password);
    const [isEnabled, setIsEnabled] = useState(false);
    const [isEnabledPass, setIsEnabledPass] = useState(isTurn);
    const [textError, setTextErrord] = useState('');
    const [passInput, setPassInput] = useState('');
    const dispatch = useDispatch();
    const modalizRef = useRef(null);
    const insets = useSafeAreaInsets();

    const handleOpenBottomSheet = useCallback(() => {
      if (isEnabledPass === false) {
        modalizRef?.current.open();
      } else {
        setIsEnabledPass(previousState => !previousState);
        dispatch(turnPassword(false));
      }
    }, [dispatch, isEnabledPass]);

    const toggleSwitchCreate = useCallback(
      newPassword => {
        dispatch(changePassword(newPassword));
        dispatch(turnPassword(true));
        modalizRef?.current.close();
        setIsEnabledPass(previousState => !previousState);
      },
      [dispatch],
    );
    const toggleSwitchConfirm = useCallback(
      passwordInput => {
        if (passwordInput === password) {
          modalizRef?.current.close();
          dispatch(turnPassword(true));
          setTextErrord('');
          setPassInput('');
          setIsEnabledPass(previousState => !previousState);
        } else {
          setTextErrord('You have entered the wrong password');
        }
      },
      [dispatch, password],
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
                <Block paddingVertical={10}>
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
            <Block paddingVertical={10}>
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
                style={styles.button}
              />
            </Block>
          )}
        </>
      );
    }, [
      passInput,
      password,
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
              <Switch
                value={index === 1 ? isEnabledPass : null}
                trackColor={{
                  false: 'rgba(155, 155, 155, 0.3)',
                  true: 'rgba(155, 155, 155, 0.3)',
                }}
                thumbColor={
                  index === 1
                    ? isEnabledPass
                      ? '#2AA952'
                      : theme.colors.white
                    : isEnabled
                    ? '#2AA952'
                    : theme.colors.white
                }
                onChange={() => {
                  index === 1 ? handleOpenBottomSheet() : null;
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
                      ? theme.colors.white
                      : theme.colors.gray
                    : null
                }
                space="between">
                <Text size={16}>{name}</Text>
                <Right />
              </Block>
            </Pressable>
          )}
        </Block>

        <BottomSheet
          ref={modalizRef}
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
      <Text size={18} fontType="bold">
        {title}
      </Text>
      <Block
        shadow
        marginTop={10}
        borderRadius={8}
        space="between"
        backgroundColor={theme.colors.white}>
        {data.map(renderItem)}
      </Block>
    </Block>
  );
};

export default ItemSetting;
