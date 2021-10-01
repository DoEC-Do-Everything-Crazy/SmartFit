import {width, getSize} from '@utils/responsive';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  textRequestAgain: {
    fontFamily: 'roboto',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
    marginTop: getSize.m(60),
    marginLeft: 5,
    color: 'blue',
  },
  text: {
    fontFamily: 'roboto',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 75,
  },
  textInput: {
    backgroundColor: '#F5F4F2',
    fontWeight: '600',
    justifyContent: 'center',
    color: 'black',
    textAlign: 'center',
    alignSelf: 'center',
    padding: 10,
    fontSize: 20,
    height: 55,
    width: '12.5%',
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: 'grey',
  },
});
