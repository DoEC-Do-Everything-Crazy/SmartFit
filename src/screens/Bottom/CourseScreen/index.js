import React from 'react';
import { StyleSheet, View, Text, TextInput, Dimensions, TouchableOpacity, Image} from 'react-native';
import {Block, Header, Button} from '@components';
import {IconCart} from '@assets/icons/cart.png'
import { FlatGrid } from 'react-native-super-grid';

const CourseScreen = () => {
  const [items, setItems] = React.useState([
    { name: '1ABC9C', code: '#1abc9c' },
    { name: '2ECC71', code: '#2ecc71' },
    { name: '3498DB', code: '#3498db' },
    { name: '9B59B6', code: '#9b59b6' },
    { name: '34495E', code: '#34495e' },
    { name: '16A085', code: '#16a085' },
    { name: '27AE60', code: '#27ae60' },
    { name: '2980b9', code: '#2980b9' },
    { name: '8E44AD', code: '#8e44ad' },
    { name: '2C3E50', code: '#2c3e50' },
    { name: 'f1c40f', code: '#f1c40f' },
    { name: 'e67e22', code: '#e67e22' },
    { name: '27AE60', code: '#27ae60' },
    { name: '2980b9', code: '#2980b9' },
    { name: 'e67e22', code: '#e67e22' },
    { name: '27AE60', code: '#27ae60' },
  ]);

  return (
    <Block style={styles.blockContainer}>
      <Block style={styles.blockHeader} >
        <TextInput style={styles.textInput} 
          placeholderTextColor="#045694" placeholder={('Search...')} 
          onChangeText={(text)=> {(text)}}/>
          <TouchableOpacity style={styles.button}>
            <Image source={require('@assets/icons/cart.png')} style={styles.iconCart}/>
          </TouchableOpacity>
      </Block>
      <Block style={styles.blockFlatGrid}>
        <FlatGrid
          itemDimension={125}
          data={items}
          style={styles.gridView}
          spacing={10}
          renderItem={({item}) => (
            <View style={[styles.itemContainer, {backgroundColor: item.code }]}>
              <Text style={styles.itemName}>{item.name}</Text>
              <Text style={styles.itemCode}>{item.code}</Text>
            </View>
          )}> 
        </FlatGrid>
      </Block>
    </Block>
  );
}

export default CourseScreen;

const {width, height} = Dimensions.get("window");
const styles = StyleSheet.create({
  blockContainer: {
    width: width,
    height: height,
    margin:0,
    padding:0,
    backgroundColor: '#045694',
    flex:1
  },
  blockFlatGrid: {
    width: width,
    height: height,
    borderRadius:15,
    backgroundColor:'#FFFFFF'
  },
  blockHeader:{
    backgroundColor: '#045694',
    flexDirection: "row",
    padding:20,
  },
  textInput: {
    backgroundColor: '#FFFFFF',
    borderColor: '#E7EFF6',
    width: width/1.35,
    height: 40,
    fontSize: 20,
    padding:5,
    paddingLeft:10,
    color: "#000000",
    borderRadius: 50,
  },
  button:{
    backgroundColor: '#045694',
  },
  iconCart:{
    tintColor:'#FFFFFF',
    width:35,
    height:40,
    padding:5,
    marginLeft:20,
    marginRight:10
  }
  ,
  gridView: {
    marginTop: 10,
  },
  itemContainer: {
    justifyContent: 'flex-end',
    borderRadius: 5,
    padding: 10,
    height: 150,
  },
  itemName: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '600',
    textTransform: 'uppercase'
  },
  itemCode: {
    fontWeight: '600',
    fontSize: 12,
    color: '#fff',
  },

});