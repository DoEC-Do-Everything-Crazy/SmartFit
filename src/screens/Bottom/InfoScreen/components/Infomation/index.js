import {Block, Header} from '@components';
import {theme} from '@theme';
import React from 'react';
import InfoProfile from './components/InfoProfile';
import styles from './styles';
const data = [
  {
    image:
      'https://i.pinimg.com/originals/85/a4/0a/85a40a6b89b0d51f020c80e7dd6d6ea4.jpg',
    name: 'Hồ Công Khanh',
    phoneNumber: '0344108493',
    email: 'congkhanh2424@gmail.com',
    gene: 'Male',
    birthday: '01-01-2001',
  },
];
const Information = () => {
  return (
    <Block flex backgroundColor={theme.colors.blue}>
      <Header canGoBack title="Infomation" colorTheme={theme.colors.white} />
      <Block flex style={styles.container} backgroundColor={theme.colors.white}>
        <InfoProfile
          image={data[0].image}
          name={data[0].name}
          phoneNumber={data[0].phoneNumber}
          email={data[0].email}
          gene={data[0].gene}
          birthday={data[0].birthday}
        />
      </Block>
    </Block>
  );
};

export default Information;
