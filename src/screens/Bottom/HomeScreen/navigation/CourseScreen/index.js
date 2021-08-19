import {Block, Button, Header} from '@components';
import {width} from '../../../../../utils/responsive';
import React, {useEffect, useState} from 'react';
import {FlatList, ImageBackground, Text} from 'react-native';
import styles from './styles';

const CourseScreen = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [pageCurrent, setPageCurrent] = useState(1);

  useEffect(() => {
    setIsLoading(true);
    getData();
  }, [getData, pageCurrent]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const getData = async () => {
    const apiURL =
      'https://jsonplaceholder.typicode.com/photos?_limit=10&page=1' +
      pageCurrent;
    fetch(apiURL)
      .then(res => res.json())
      .then(resJSON => {
        setData(data.concat(resJSON));
        setIsLoading(false);
      });
  };

  const handleLoadMore = () => {
    console.log('handleLoadMore' + ' ' + pageCurrent);
    setPageCurrent(pageCurrent + 1);
    setIsLoading(true);
  };

  return (
    <Block style={styles.blockContainer}>
      <Header type="Home" />
      <Block style={styles.blockFlatGrid}>
        <FlatList
          data={data}
          style={styles.gridView}
          spacing={10}
          keyExtractor={(item, index) => index.toString()}
          onEndReachedThreshold={0}
          renderItem={({item}) => (
            <Block flexDirection={'column'} width={width}>
              <ImageBackground
                source={{
                  uri: 'https://diadiemnghean.com/wp-content/uploads/2020/05/assortment-of-colorful-ripe-tropical-fruits-top-royalty-free-image-995518546-1564092355.jpg',
                }}
                style={styles.imageHorizontal}>
                <Text style={styles.itemNameHorizontal}>{item.title}</Text>
              </ImageBackground>
              <Block flexDirection={'row'}>
                <Block flexDirection={'column'}>
                  <ImageBackground
                    source={{uri: item.url}}
                    style={styles.imageColumOne}>
                    <Text style={styles.itemNameHorizontalColumOne}>
                      {item.title}
                    </Text>
                  </ImageBackground>
                  <ImageBackground
                    source={{uri: item.url}}
                    style={[styles.imageColumOne]}>
                    <Text style={styles.itemNameHorizontalColumOne}>
                      {item.title}
                    </Text>
                  </ImageBackground>
                </Block>
                <ImageBackground
                  source={{uri: item.url}}
                  style={styles.imageColumTwo}>
                  <Text style={styles.itemNameHorizontalColumTwo}>
                    {item.title}
                  </Text>
                </ImageBackground>
              </Block>
            </Block>
          )}
        />
      </Block>
      <Block position={'absolute'} bottom={0} margin={0}>
        <Button
          titleStyle={styles.seeMoreButtonText}
          containerStyle={styles.seeMoreButton}
          position={'absolute'}
          bottom={0}
          title="See More..."
          onPress={() => handleLoadMore()}
        />
      </Block>
    </Block>
  );
};

export default CourseScreen;
