import {Block, Header, Text} from '@components';
import {theme} from '@theme';
import React from 'react';
import {Image, Pressable} from 'react-native';
import styles from './style';

const SendEmail = (props) => {
    return (
        <Block flex paddingHorizontal={16} backgroundColor={theme.colors.white}>
            <Header canGoBack title="Vertify email"/>
            <Block alignCenter marginTop = {40} backgroundColor={theme.colors.white}>
                <Image style = {styles.image} source={require('@assets/icons/sendemail.png')} />
                <Block alignCenter >
                    <Text paddingVertical = {10} center color={theme.colors.blue} fontType = 'bold' size={18} >CONFIRM YOUR EMAIL ADDRESS</Text>
                    <Block alignCenter paddingVertical = {10}>
                        <Text size={18}>We sent a confirmation email to:</Text>
                        <Text size={18} fontType = 'bold'> {props.email} congkhanh2424@gmail.com </Text>
                        <Text size={18}>Check your email and click on the</Text>
                        <Text size={18}>confirmation link to continue</Text>
                    </Block>
                    <Pressable marginTop = {30} width = {200}  backgroundColor={theme.colors.white}>
                        <Text center size={18} fontType = 'bold' color={theme.colors.blue}>Resend email</Text>
                    </Pressable>
                </Block>
            </Block>
            
        </Block>
    )
}

export default SendEmail
