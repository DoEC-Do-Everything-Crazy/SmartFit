import {Block, Header, Button} from '@components';
import {theme} from '@theme';
import React, {Component} from 'react';
import {View, Text, TextInput, Touchableopacity} from 'react-native';

export default class VFTPhoneNumberScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number1: '',
      number2: '',
      number3: '',
      number4: '',
      number5: '',
      number6: '',
    };
  }

  componentDidMount = () => {
    this.refs.number1ref.focus();
  };

  render() {
    const {number1, number2, number3, number4, number5, number6} = this.state;
    return (
      <View style={{flex: 1, backgroundColor: '#FFF'}}>
        <Header canGoBack title="Sign in with phone number" />
        <View style={{marginTop: 100}}>
          <Text
            style={{
              fontFamily: 'roboto',
              fontStyle: 'normal',
              fontWeight: 'bold',
              fontSize: 18,
              textAlign: 'center',
              marginBottom: 75,
            }}>
            Code is send to 0862 090 010
          </Text>
          <View
            style={{
              flex: 0.5,
              justifyContent: 'space-evenly',
              flexDirection: 'row',
            }}>
            <TextInput
              ref={'number1ref'}
              maxLenght={1}
              keyboardType="number-pad"
              value={number1}
              onChangeText={number1 => {
                this.setState({number1: number1});
                if (number1 != '') {
                  this.refs.number2ref.focus();
                }
              }}
              style={{
                backgroundColor: '#F5F4F2',
                fontWeight: '600',
                justifyContent: 'center',
                textAlign: 'center',
                alignSelf: 'center',
                padding: 10,
                fontSize: 20,
                height: 55,
                width: '12.5%',
                borderRadius: 10,
                borderWidth: 0.5,
                borderColor: 'grey',
              }}
            />

            <TextInput
              ref={'number2ref'}
              maxLenght={1}
              keyboardType="number-pad"
              value={number2}
              onChangeText={number2 => {
                this.setState({number2: number2});
                if (number2 != '') {
                  this.refs.number3ref.focus();
                }
              }}
              style={{
                backgroundColor: '#F5F4F2',
                fontWeight: '600',
                justifyContent: 'center',
                textAlign: 'center',
                alignSelf: 'center',
                padding: 10,
                fontSize: 20,
                height: 55,
                width: '12.5%',
                borderRadius: 10,
                borderWidth: 0.5,
                borderColor: 'grey',
              }}
            />

            <TextInput
              ref={'number3ref'}
              maxLenght={1}
              keyboardType="number-pad"
              value={number3}
              onChangeText={number3 => {
                this.setState({number3: number3});
                if (number3 != '') {
                  this.refs.number4ref.focus();
                }
              }}
              style={{
                backgroundColor: '#F5F4F2',
                fontWeight: '600',
                justifyContent: 'center',
                textAlign: 'center',
                alignSelf: 'center',
                padding: 10,
                fontSize: 20,
                height: 55,
                width: '12.5%',
                borderRadius: 10,
                borderWidth: 0.5,
                borderColor: 'grey',
              }}
            />

            <TextInput
              ref={'number4ref'}
              maxLenght={1}
              keyboardType="number-pad"
              value={number4}
              onChangeText={number4 => {
                this.setState({number4: number4});
                if (number4 != '') {
                  this.refs.number5ref.focus();
                }
              }}
              style={{
                backgroundColor: '#F5F4F2',
                fontWeight: '600',
                justifyContent: 'center',
                textAlign: 'center',
                alignSelf: 'center',
                padding: 10,
                fontSize: 20,
                height: 55,
                width: '12.5%',
                borderRadius: 10,
                borderWidth: 0.5,
                borderColor: 'grey',
              }}
            />

            <TextInput
              ref={'number5ref'}
              maxLenght={1}
              keyboardType="number-pad"
              value={number5}
              onChangeText={number5 => {
                this.setState({number5: number5});
                if (number5 != '') {
                  this.refs.number6ref.focus();
                }
              }}
              style={{
                backgroundColor: '#F5F4F2',
                fontWeight: '600',
                justifyContent: 'center',
                textAlign: 'center',
                alignSelf: 'center',
                padding: 10,
                fontSize: 20,
                height: 55,
                width: '12.5%',
                borderRadius: 10,
                borderWidth: 0.5,
                borderColor: 'grey',
              }}
            />

            <TextInput
              ref={'number6ref'}
              maxLenght={1}
              keyboardType="number-pad"
              value={number6}
              onChangeText={number6 => {
                this.setState({number6: number6});
                if (number6 != '') {
                  alert('OK Bro');
                }
              }}
              style={{
                backgroundColor: '#F5F4F2',
                fontWeight: '600',
                justifyContent: 'center',
                textAlign: 'center',
                alignSelf: 'center',
                padding: 10,
                fontSize: 20,
                height: 55,
                width: '12.5%',
                borderRadius: 10,
                borderWidth: 0.5,
                borderColor: 'grey',
              }}
            />
          </View>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
          <Text
            style={{
              fontFamily: 'roboto',
              fontStyle: 'normal',
              fontWeight: 'bold',
              fontSize: 18,
              textAlign: 'center',
              marginTop: 60,
            }}>
            Didn’t receive code?
          </Text>
          <Text
            style={{
              fontFamily: 'roboto',
              fontStyle: 'normal',
              fontWeight: 'bold',
              fontSize: 18,
              textAlign: 'center',
              marginTop: 60,
              marginLeft: 5,
              color: 'blue',
            }}>
            Request again
          </Text>
        </View>
        <Button title="Verify and Create Account" height={45} marginLeft={10} />
      </View>
    );
  }
}
