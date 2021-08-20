import {Block, Header, Text} from '@components';
import {theme} from '@theme';
import React from 'react';
import {TouchableOpacity} from 'react-native';
import InfoProfile from './components/InfoProfile';
import ListItemFeature from './components/ListItemFeature';
import StatisticalProfile from './components/StatisticalProfile';
import styles from './styles';

const DATA_INFO = [
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

const DATA_STATISTICAL_PROFILE = [
  {
    balance: '$2285',
    course: '4',
  },
];
const Information = () => {
  return (
    <Block flex backgroundColor={theme.colors.blue}>
      <Header title="Infomation" colorTheme={theme.colors.white} />
      <Block flex style={styles.container} backgroundColor={theme.colors.white}>
        <InfoProfile
          image={DATA_INFO[0].image}
          name={DATA_INFO[0].name}
          phoneNumber={DATA_INFO[0].phoneNumber}
          email={DATA_INFO[0].email}
          gene={DATA_INFO[0].gene}
          birthday={DATA_INFO[0].birthday}
        />
        <StatisticalProfile
          balance={DATA_STATISTICAL_PROFILE[0].balance}
          course={DATA_STATISTICAL_PROFILE[0].course}
        />
        <ListItemFeature />
        <TouchableOpacity style={styles.button}>
          <Text color="red" fontType="bold">
            Logout
          </Text>
        </TouchableOpacity>
      </Block>
    </Block>
  );
};

export default Information;
