import {icons} from '@assets';
import {Block, Text} from '@components';
import {theme} from '@theme';
import React from 'react';
import {Image, Pressable} from 'react-native';
import styles from './styles';

const ItemCourse = ({onPress, title, group_id, index}) => {
  return (
    <Block flex key={index} marginTop={6} marginBottom={26}>
      <Pressable onPress={onPress}>
        <Block
          radius={5}
          borderWidth={0.3}
          marginHorizontal={10}
          height={98}
          width="95%"
          shadowColor={theme.colors.blue}
          alignCenter
          row>
          <Block>
            <Image
              source={{
                uri: 'https://gocbinhluan.com/public/photos/shares/201911/20191130/20191130_hinh12.jpg',
              }}
              style={styles.image}
            />
            <Block
              absolute
              bottom={-5}
              left={9}
              width={70}
              radius={5}
              backgroundColor={theme.colors.blue}
              alignCenter>
              <Text
                size={12}
                marginLeft={5}
                color={theme.colors.white}
                fontType="bold">
                $1000
              </Text>
            </Block>
          </Block>

          <Block marginLeft={10} width="73%" shadow>
            <Text size={20} fontType="bold">
              Course
              1.............................................................
            </Text>
            <Block row alignCenter marginTop={5}>
              <Image source={icons.ratings} style={styles.icon} />
              <Text size={15} marginLeft={5}>
                5.0
              </Text>
              <Block
                height={15}
                width={50}
                marginLeft={10}
                radius={5}
                backgroundColor={theme.colors.red}
                alignCenter>
                <Text
                  size={10}
                  marginLeft={5}
                  color={theme.colors.white}
                  fontType="bold">
                  HOT!!!
                </Text>
              </Block>
            </Block>
          </Block>
        </Block>
      </Pressable>
    </Block>
  );
};

export default ItemCourse;
