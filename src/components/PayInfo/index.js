import {Block, Text} from '@components';
import React from 'react';
import {useTheme} from '@theme';
import {useSelector} from 'react-redux';

const PayInfo = ({title1, titlePrice1, title2, titlePrice2, total}) => {
  const {
    theme: {theme: themeStore},
  } = useSelector(stateRoot => stateRoot.root);
  const theme = useTheme(themeStore);
  return (
    <Block
      borderRadius={8}
      marginTop={10}
      padding={15}
      backgroundColor={theme.colors.border}>
      <Block row marginHorizontal={16} space="between">
        <Text>{title1}:</Text>
        <Text>{titlePrice1}$</Text>
      </Block>
      <Block
        height={0.5}
        backgroundColor={theme.colors.text}
        marginBottom={5}
        marginTop={10}
        marginHorizontal={25}
      />
      <Block row marginHorizontal={16} marginTop={5} space="between">
        <Text>{title2}:</Text>
        <Text>{titlePrice2}$</Text>
      </Block>
      <Block
        height={0.5}
        backgroundColor={theme.colors.text}
        marginBottom={5}
        marginTop={10}
        marginHorizontal={25}
      />
      <Block row marginHorizontal={16} marginTop={5} space="between">
        <Text fontType="bold">Summary:</Text>
        <Text fontType="bold">{total}$</Text>
      </Block>
    </Block>
  );
};

export default PayInfo;
