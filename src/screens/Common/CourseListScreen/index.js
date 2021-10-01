import {Block, Header} from '@components';
import ItemCourse from '@components/Common/ItemList/ItemCourse';
import {theme} from '@theme';
import React, {useState, useEffect} from 'react';
import {FlatList} from 'react-native';
import axios from 'axios';

const DATA = [
  {
    picture:
      'https://topquangngai.vn/wp-content/uploads/2021/01/phong-tap-gym-Quang-Ngai-7.jpg',
    title: 'Gym of woman',
    description: 'Bài tập gym dành cho nữ',
    ratting: '5.0',
    price: 5000,
  },
  {
    picture:
      'https://lh3.googleusercontent.com/proxy/CWn55BVRh0hImaI39hfspi0nOXI_sBOFkFBdwt94omfNMWJ-3Xf8FlV3dico2iQgbfnlulCpCaG5-d9Z-VY5LAAYfNgaKFz2y4I2QMILN1hS82NroA',
    title: 'The belly',
    description: 'Bài tập căng cơ giúp tăng chiều cao, cơ thể khỏe mạnh',
    ratting: '5.0',
    price: 5000,
  },
  {
    picture:
      'https://kenhhomestay.com/wp-content/uploads/2019/08/phong-tap-gym-Can-Tho-1.jpg',
    title: 'Jogging',
    description: 'Chạy bộ giúp căng cơ nâng cao sức khỏe và đề kháng',
    ratting: '5.0',
    price: 5000,
  },
  {
    picture:
      'https://www.thethaothientruong.vn/uploads/contents/lich-tap-hit-dat-tai-nha.jpg',
    title: 'Push-up',
    description: 'Tập hít đất tốt cho phổi và hô hấp, tăng cường cơ bắp',
    ratting: '5.0',
    price: 5000,
  },
  {
    picture: 'https://dungcutheduc.vn/images/hit-xa-don-phat-trien-co-bap.jpg',
    title: 'Pull up bar',
    description: 'Nâng xà tăng cơ tay, rắn chắc',
    ratting: '5.0',
    price: 5000,
  },
  {
    picture: 'https://meta.vn/Data/image/2021/07/22/day-ngu-sac-tap-gym-2.jpg',
    title: 'Muscle tension',
    description: 'Bài tập tăng cơ ngực và tăng sức khỏe',
    ratting: '5.0',
    price: 5000,
  },
  {
    picture:
      'https://leep.imgix.net/2021/03/ghe-tap-ta-4.jpeg?auto=compress&fm=pjpg&ixlib=php-1.2.1',
    title: 'Weightlifting',
    description: 'Bài tập gym cơ bản của bộ môn tập gym',
    ratting: '5.0',
    price: 5000,
  },
];

const CourseListScreen = () => {
  const [data, setData] = useState([]);

  const fetchData = async data => {
    try {
      const resp = await axios({
        method: 'POST',
        url: 'http://10.0.2.2:5000/',
        data: data,
      });
      var obj = resp.data;
      setData(obj);
    } catch (err) {
      console.log('error');
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const _renderItem = ({item, index}) => {
    return (
      <ItemCourse
        price={item.price}
        picture={item.picture}
        title={item.title}
        description={item.description}
        ratting={item.ratting}
      />
    );
  };

  return (
    <Block flex>
      <Header
        canGoBack
        title="GYM"
        colorTheme={theme.colors.blue}
        filter
        search
      />
      <Block flex alignCenter>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={DATA}
          keyExtractor={(item, index) => index.toString()}
          renderItem={_renderItem}
        />
      </Block>
    </Block>
  );
};

export default CourseListScreen;
