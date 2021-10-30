/* eslint-disable react-hooks/exhaustive-deps */
import {Block, DropDown, Text} from '@components';
import React, {useEffect, useState} from 'react';
import {FlatList} from 'react-native';
import ItemSetting from '@components/ItemList/ItemSetting';
import {useSelector, useDispatch} from 'react-redux';
import {useTheme} from '@theme';
import {changeLanguage} from 'reduxs/reducers';
import {useTranslation} from 'react-i18next';
import {useStyles} from './styles';

const ListFeatureSetting = ({data, props}) => {
  const {
    theme: {theme: themeStore},
  } = useSelector(stateRoot => stateRoot.root);
  const theme = useTheme(themeStore);
  const styles = useStyles(props, themeStore);
  const {t} = useTranslation();
  const languageStore = useSelector(state => state.root.setting.language);
  const [valueLanguage, setValueLanguage] = useState(languageStore);
  const [openLanguage, setOpenLanguage] = useState(false);
  const [language, setLanguage] = useState([
    {label: t('english'), value: 'en'},
    {label: t('vietnamese'), value: 'vi'},
  ]);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(changeLanguage(valueLanguage));
    setLanguage([
      {label: t('english'), value: 'en'},
      {label: t('vietnamese'), value: 'vi'},
    ]);
  }, [dispatch, languageStore, valueLanguage]);

  const _renderItem = ({index}) => (
    <ItemSetting
      title={data[index].title}
      data={data[index].data_item_switch}
      index={index}
    />
  );
  return (
    <Block
      backgroundColor={theme.colors.backgroundSetting}
      paddingTop={16}
      flex>
      <Text
        marginLeft={16}
        marginBottom={10}
        color={theme.colors.text}
        size={18}
        fontType="bold">
        {t('language')}
      </Text>
      <DropDown
        open={openLanguage}
        value={valueLanguage}
        items={language}
        setOpen={() => {
          setOpenLanguage(!openLanguage);
        }}
        setValue={setValueLanguage}
        setItems={setLanguage}
        containerStyle={styles.picker}
        boxStyle={styles.picker}
      />

      <Block style={styles.list}>
        <FlatList
          data={data}
          renderItem={_renderItem}
          keyExtractor={item => item.id}
        />
      </Block>
    </Block>
  );
};

export default ListFeatureSetting;