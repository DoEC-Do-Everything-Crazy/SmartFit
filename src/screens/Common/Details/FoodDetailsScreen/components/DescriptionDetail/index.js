import {Block, Text} from '@components';
import {useTheme} from '@theme';
import React, {useState} from 'react';
import {Pressable} from 'react-native';
import {useSelector} from 'react-redux';

const DescriptionDetail = () => {
  const [seeMore, setSeemore] = useState(true);
  const {
    theme: {theme: themeStore},
  } = useSelector(stateRoot => stateRoot.root);

  const theme = useTheme(themeStore);
  const numberOfLines = seeMore ? 0 : 2;
  const txtSeemore = seeMore ? 'Collapse' : 'See more';

  const isSeemore = () => setSeemore(!seeMore);
  return (
    <Block marginTop={32} paddingHorizontal={16}>
      <Text
        size={16}
        numberOfLines={numberOfLines}
        color={theme.colors.textLight}
        fontType="bold">
        Fake food no healthy Fake food no healthy Fake food no healthy Fake food
        no healthy Fake food no healthy Fake food no healthy
      </Text>
      <Pressable onPress={() => isSeemore()}>
        <Text size={16} fontType="bold" color={theme.colors.orange}>
          {txtSeemore}
        </Text>
      </Pressable>
    </Block>
  );
};

export default DescriptionDetail;
