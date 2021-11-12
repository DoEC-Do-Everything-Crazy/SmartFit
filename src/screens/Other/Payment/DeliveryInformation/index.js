import React, {useState} from 'react';
import {Block, Text, Header, TextInput, DropDown} from '@components';
import {getSize, width} from '@utils/responsive';
import {useStyles} from './styles';
import {useTranslation} from 'react-i18next';
import {useSelector} from 'react-redux';

const DeliveryInformation = ({props}) => {
  const {t} = useTranslation();
  const styles = useStyles(props, themeStore);
  const {
    theme: {theme: themeStore},
  } = useSelector(state => state.root);

  const [openProvince, setOpenProvince] = useState(false);
  const [valueProvince, setValueProvince] = useState('');

  const [province, setProvince] = useState([
    {label: 'Tiền Giang', value: 'Tiền Giang'},
    {label: 'Long An', value: 'Long An'},
    {label: 'Bến Tre', value: 'Bến Tre'},
  ]);
  return (
    <Block flex>
      <Header canGoBack title="Thêm địa chỉ" />
      <Block padding={10}>
        <Text marginHorizontal={16} size={20} fontType="bold">
          Liên hệ
        </Text>
        <Block marginHorizontal={25} marginVertical={10}>
          <TextInput paddingHorizontal={10} placeholder="Họ và tên" />
          <Block marginVertical={5} />
          <TextInput paddingHorizontal={10} placeholder="Số điện thoại" />
        </Block>
      </Block>
      <Block flex padding={10} backgroundColor="red">
        <Text marginHorizontal={16} size={20} fontType="bold">
          Liên hệ
        </Text>
        <DropDown
          open={openProvince}
          value={valueProvince}
          items={province}
          setOpen={setOpenProvince}
          setValue={setValueProvince}
          setItems={setProvince}
          containerStyle={styles.containerDropdown}
          boxStyle={styles.pickerBox}
          onChangeValue={setValueProvince}
          placeholder={'Tỉnh, thành phố'}
        />
      </Block>
    </Block>
  );
};

export default DeliveryInformation;
