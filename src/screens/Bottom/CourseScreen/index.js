import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  Dimensions,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';
import {Block} from '@components';
import {FlatGrid} from 'react-native-super-grid';

const CourseScreen = () => {
  const [items] = React.useState([
    {name: 'GYM', code: '#1abc9c'},
    {name: '2ECC71', code: '#2ecc71'},
    {name: '3498DB', code: '#3498db'},
    {name: '9B59B6', code: '#9b59b6'},
    {name: '34495E', code: '#34495e'},
    {name: '16A085', code: '#16a085'},
    {name: '27AE60', code: '#27ae60'},
    {name: '2980b9', code: '#2980b9'},
    {name: '8E44AD', code: '#8e44ad'},
    {name: '2C3E50', code: '#2c3e50'},
    {name: 'f1c40f', code: '#f1c40f'},
    {name: 'e67e22', code: '#e67e22'},
    {name: '27AE60', code: '#27ae60'},
    {name: '2980b9', code: '#2980b9'},
    {name: 'e67e22', code: '#e67e22'},
    {name: '27AE60', code: '#27ae60'},
  ]);

  return (
    <Block style={styles.blockContainer}>
      <Block style={styles.blockHeader}>
        <TextInput
          style={styles.textInput}
          placeholderTextColor="#045694"
          placeholder={'Search...'}
          onChangeText={text => {
            text;
          }}
        />
        <TouchableOpacity style={styles.button}>
          <Image
            source={require('@assets/icons/cart.png')}
            style={styles.iconCart}
          />
        </TouchableOpacity>
      </Block>
      <Block style={styles.blockFlatGrid}>
        <FlatList
          itemDimension={125}
          data={items}
          style={styles.gridView}
          spacing={10}
          renderItem={({item}) => (
            <Block flexDirection={'column'} width={width}>
              <Block
                style={[styles.blockHorizontal, {backgroundColor: item.code}]}>
                <Text style={styles.itemNameHorizontal}>{item.name}</Text>
              </Block>
              <Block flexDirection={'row'}>
                <Block flexDirection={'column'}>
                  <Block
                    backgroundColor={item.code}
                    height={183}
                    width={183}
                    marginTop={16}
                    borderRadius={5}
                    justifyContent={'center'}
                    alignItems={'center'}>
                    <Text style={styles.itemNameHorizontalColumOne}>
                      {item.name}
                    </Text>
                  </Block>
                  <Block
                    backgroundColor={item.code}
                    height={183}
                    width={183}
                    marginTop={16}
                    borderRadius={5}
                    justifyContent={'center'}
                    alignItems={'center'}>
                    <Text style={styles.itemNameHorizontalColumOne}>
                      {item.name}
                    </Text>
                  </Block>
                </Block>
                <Block
                  width={width / 2.3}
                  backgroundColor={item.code}
                  marginTop={16}
                  marginLeft={16}
                  borderRadius={5}>
                  <Text style={styles.itemNameHorizontalColumTwo}>
                    {item.name}
                  </Text>
                </Block>
              </Block>
            </Block>
          )}
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
  button: {
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
  blockHorizontal: {
    borderRadius: 8,
    width: width / 1.085,
    height: 192,
    marginTop: 16,
  },
  itemContainer: {
    justifyContent: 'flex-end',
    flexDirection: 'column-reverse',
    width: width,
    height: height,
    borderRadius: 5,
    padding: 10,
  },
  itemNameHorizontal: {
    fontSize: 40,
    color: '#fff',
    fontWeight: '600',
    textTransform: 'uppercase',
    position: 'absolute',
    bottom: 0,
    margin: 10,
  },
  itemNameHorizontalColumOne: {
    fontSize: 40,
    color: '#fff',
    fontWeight: '600',
    textTransform: 'uppercase',
    marginTop: 100,
  },
  itemNameHorizontalColumTwo: {
    fontSize: 40,
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
});
