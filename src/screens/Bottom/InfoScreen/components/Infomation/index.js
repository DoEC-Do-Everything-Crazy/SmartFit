import {Block, Header, Text} from '@components';

import {AuthService} from '@services';
import InfoProfile from './components/InfoProfile';
import ListItemFeature from './components/ListItemFeature';
import React from 'react';
import StatisticalProfile from './components/StatisticalProfile';
import {TouchableOpacity} from 'react-native';
import {routes} from '@navigation/routes';
import styles from './styles';
import {theme} from '@theme';
import {useNavigation} from '@react-navigation/core';
import {useSelector} from 'react-redux';

const DATA_STATISTICAL_PROFILE = [
  {
    balance: '$2285',
    course: '4',
  },
];
const Information = () => {
  const {user} = useSelector(state => state.root.user);
  const DATA_INFO = [
    {
      image: user.photoURL,
      name: user.displayName,
      phoneNumber: user.phoneNumber,
      email: user.email,
      gene: 'Male',
      birthday: '01-01-2001',
    },
  ];
  const navigation = useNavigation();
  return (
    <Block flex backgroundColor={theme.colors.blue}>
      <Header
        type="Bottom"
        title="Infomation"
        colorTheme={theme.colors.white}
      />
      <Block
        flex
        style={styles.container}
        backgroundColor={theme.colors.background}>
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
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            AuthService.signOut();
          }}>
          <Text color="red" fontType="bold">
            Logout
          </Text>
        </TouchableOpacity>
      </Block>
    </Block>
  );
};

export default Information;
