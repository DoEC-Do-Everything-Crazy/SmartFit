import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  Dimensions,
  TouchableOpacity,
  FlatList,
  ImageBackground,
  Image,
} from 'react-native';
import {Block, Button, Header} from '@components';

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
                source={{uri: item.url}}
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

const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
  blockContainer: {
    width: width,
    height: height,
    margin: 0,
    padding: 0,
    backgroundColor: '#045694',
    alignItems: 'center',
    flex: 1,
  },
  blockFlatGrid: {
    width: width,
    height: height,
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
  },
  blockHeader: {
    backgroundColor: '#045694',
    flexDirection: 'row',
    padding: 20,
  },
  textInput: {
    backgroundColor: '#FFFFFF',
    borderColor: '#E7EFF6',
    width: width / 1.35,
    height: 40,
    fontSize: 20,
    padding: 5,
    paddingLeft: 10,
    color: '#000000',
    borderRadius: 50,
  },
  seeMoreButton: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    width: width / 1.095,
    height: 48,
    borderColor: '#045694',
    borderWidth: 1,
  },
  seeMoreButtonText: {
    color: '#045694',
    fontSize: 15,
    textAlign: 'center',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    shadowColor: '#045694',
    shadowOpacity: 0.8,
    shadowRadius: 2,
  },
  imageButton: {
    backgroundColor: '#045694',
  },
  iconCart: {
    tintColor: '#FFFFFF',
    width: 35,
    height: 40,
    padding: 5,
    marginLeft: 20,
    marginRight: 10,
  },
  gridView: {
    margin: 16,
  },
  imageHorizontal: {
    borderRadius: 5,
    width: width / 1.095,
    height: 192,
    marginTop: 16,
    overflow: 'hidden',
  },
  imageColumOne: {
    height: 183,
    width: 183,
    marginTop: 16,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  imageColumTwo: {
    width: width / 2.3,
    marginTop: 16,
    marginLeft: 16,
    borderRadius: 5,
    overflow: 'hidden',
  },
  itemNameHorizontal: {
    fontSize: 20,
    color: '#fff',
    fontWeight: '600',
    textTransform: 'uppercase',
    position: 'absolute',
    bottom: 0,
    margin: 10,
  },
  itemNameHorizontalColumOne: {
    fontSize: 20,
    color: '#fff',
    fontWeight: '600',
    textTransform: 'uppercase',
    marginTop: 100,
  },
  itemNameHorizontalColumTwo: {
    fontSize: 20,
    color: '#fff',
    fontWeight: '600',
    textTransform: 'uppercase',
    position: 'absolute',
    bottom: 15,
    left: 45,
    right: 45,
  },
  itemCode: {
    fontWeight: '600',
    fontSize: 12,
    color: '#fff',
  },
  activityIndicator: {
    marginLeft: 8,
  },
});
