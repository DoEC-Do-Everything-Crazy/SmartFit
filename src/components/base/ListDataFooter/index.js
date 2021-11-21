import {Block, LoadMore, Loading, Text} from '@components';

import {Platform} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';

const ListDataFooter = ({...props}) => {
  const {
    theme: {theme: themeStore},
  } = useSelector(stateRoot => stateRoot.root);

  const {
    allLoaded,
    isLoading,
    loadingSize = 'small',
    loadingHeight = 60,
    loadingColor = themeStore === 'dark' ? 'white' : 'black',
    loadTitle = 'Load more',
    loadHeight = 60,
    loadTextColor = themeStore === 'dark' ? 'white' : 'black',
    onPress,
    horizontal,
  } = props;

  const body = (
    <>
      {allLoaded ? null : isLoading ? (
        <Loading
          height={loadingHeight}
          size={loadingSize}
          color={loadingColor}
        />
      ) : (
        <LoadMore
          title={loadTitle}
          height={loadHeight}
          onPress={onPress}
          textColor={loadTextColor}
        />
      )}
    </>
  );

  return (
    <>
      <Block marginBottom={horizontal ? 0 : Platform.OS === 'ios' ? 20 : 10}>
        {body}
      </Block>
    </>
  );
};

export default ListDataFooter;
