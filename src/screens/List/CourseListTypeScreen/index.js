import {Block, Header} from '@components';
import ItemCourseBig from '@components/ItemList/ItemCourseBig';
import {useSelector} from 'react-redux';
import {useTheme} from '@theme';
import React from 'react';
import {FlatList} from 'react-native';
import {useTranslation} from 'react-i18next';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useStyles} from './styles';

const CourseListTypeScreen = ({props, route}) => {
  const {valuePromotion} = route.params;
  const {
    theme: {theme: themeStore},
  } = useSelector(stateRoot => stateRoot.root);
  const theme = useTheme(themeStore);
  const {t} = useTranslation();
  const styles = useStyles(props, themeStore);

  const _renderItem = item => (
    <ItemCourseBig
      nameScreen={valuePromotion}
      title={item.title}
      url={item.url}
    />
  );
  return (
    <SafeAreaView
      edges={['bottom', 'left', 'right']}
      style={styles.sendControlContainerOuter}>
      <Block flex backgroundColor={theme.colors.backgroundSetting}>
        <Header
          canGoBack
          title={t('courseCategory')}
          colorTheme={theme.colors.blue}
        />
        <Block flex alignCenter paddingHorizontal={16}>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={[1]}
            keyExtractor={(item, index) => index.toString()}
            renderItem={_renderItem}
          />
        </Block>
      </Block>
    </SafeAreaView>
  );
};

export default CourseListTypeScreen;
