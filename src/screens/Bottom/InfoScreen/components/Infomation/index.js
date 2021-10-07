import { Block, Header, Text } from '@components'
import { DATA_STATISTICAL_PROFILE } from '@constants/'
import { AuthService } from '@services'
import React from 'react'

import { useSelector } from 'react-redux'
import InfoProfile from './components/InfoProfile'
import ListItemFeature from './components/ListItemFeature'
import StatisticalProfile from './components/StatisticalProfile'
import { useTheme } from '@theme'
import { useStyles } from './styles'

const Information = (props) => {
  const {
    theme: { theme: themeStore },
    user: { user },
  } = useSelector((state) => state.root)

  const theme = useTheme(themeStore)
  const styles = useStyles(props, themeStore)

  const DATA_INFO = [
    {
      image: user.photoURL,
      name: user.displayName,
      phoneNumber: user.phoneNumber,
      email: user.email,
      gene: 'Male',
      birthday: '01-01-2001',
    },
  ]
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
        backgroundColor={theme.colors.background}
      >
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
            AuthService.signOut()
          }}
        >
          <Text color={theme.colors.white} fontType="bold">
            Logout
          </Text>
        </TouchableOpacity>
      </Block>
    </Block>
  )
}

export default Information
