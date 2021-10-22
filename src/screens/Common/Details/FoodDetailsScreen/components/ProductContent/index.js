import {Block, Text} from '@components';

import {HeartPf} from '@assets/icons';
import {Image} from 'react-native';
import ItemStats from '../ItemStats';
import React from 'react';
import {useSelector} from 'react-redux';
import {useStyles} from './styles';
import {useTheme} from '@theme';
import {useTranslation} from 'react-i18next';

const ProductContent = ({food, props}) => {
  const {t} = useTranslation();
  const {
    theme: {theme: themeStore},
  } = useSelector(stateRoot => stateRoot.root);
  const styles = useStyles(props, themeStore);
  const theme = useTheme(themeStore);

  const content = [
    {title: 'Protein', stats: '160'},
    {title: 'Carbs', stats: '45g'},
    {title: 'Vitamin', stats: 'A+'},
  ];

  const _renderItem = item => (
    <ItemStats title={item.title} stats={item.stats} />
  );
  return (
    <Block row alignCenter space="between" paddingTop={20}>
      <Block alignCenter justifyCenter width="40%">
        {content.map(_renderItem)}
        <Block alignCenter marginTop={10} marginBottom={20}>
          <HeartPf color={theme.colors.red} />
          <Text size={16}>{t('favorite')}</Text>
        </Block>
      </Block>
      <Block width="60%">
        <Block
          style={styles.linearGradient}
          backgroundColor={theme.colors.border}>
          <Block flex alignCenter justifyCenter>
            <Block style={styles.header}>
              <Text
                center
                size={22}
                marginTop={20}
                fontType="bold"
                marginHorizontal={16}>
                {food.foodName}
              </Text>
            </Block>
            <Image source={{uri: food.image[0]}} style={styles.image} />
            <Block style={styles.bottom}>
              <Text size={24} color={'#FF7F50'} center fontType="bold">
                {`$${food.lastPrice}`}
              </Text>
            </Block>
          </Block>
        </Block>
      </Block>
    </Block>
  );
};

export default ProductContent;
