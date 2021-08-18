import {Block} from '@components';
import ItemNotification from '@components/Common/ItemList/ItemNotification';
import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {FlatList} from 'react-native';

const data = [
  {
    id: 1,
    title: 'Title test 1',
    content:
      'This is content 1 This is content 1 This is content 1 This is content 1 This is content 1 This is content 1',
    date: '14-08-2021',
  },
  {
    id: 2,
    title: 'Title test 2',
    content:
      'This is content 2 This is content 2 This is content 2 This is content 2 This is content 2 This is content 2',
    date: '14-08-2021',
  },
  {
    id: 3,
    title: 'Title test 3',
    content:
      'This is content 3 This is content 3 This is content 3 This is content 3 This is content 3',
    date: '14-08-2021',
  },
  {
    id: 4,
    title: 'Title test 4',
    content: 'This is content 4',
    date: '14-08-2021',
  },
  {
    id: 5,
    title: 'Title test 5',
    content:
      'This is content 3 This is content 3 This is content 3 This is content 3 This is content 3',
    date: '14-08-2021',
  },
  {
    id: 6,
    title: 'Title test 6',
    content:
      'This is content 3 This is content 3 This is content 3 This is content 3 This is content 3',
    date: '14-08-2021',
  },
  {
    id: 7,
    title: 'Title test 7',
    content:
      'This is content 3 This is content 3 This is content 3 This is content 3 This is content 3',
    date: '14-08-2021',
  },
  {
    id: 8,
    title: 'Title test 8',
    content:
      'This is content 3 This is content 3 This is content 3 This is content 3 This is content 3',
    date: '14-08-2021',
  },
  {
    id: 9,
    title: 'Title test 9',
    content:
      'This is content 3 This is content 3 This is content 3 This is content 3 This is content 3',
    date: '14-08-2021',
  },
  {
    id: 10,
    title: 'Title test 10',
    content:
      'This is content 3 This is content 3 This is content 3 This is content 3 This is content 3',
    date: '14-08-2021',
  },
  {
    id: 11,
    title: 'Title test 11',
    content:
      'This is content 3 This is content 3 This is content 3 This is content 3 This is content 3',
    date: '14-08-2021',
  },
  {
    id: 12,
    title: 'Title test 12',
    content:
      'This is content 3 This is content 3 This is content 3 This is content 3 This is content 3',
    date: '14-08-2021',
  },
];

const ListNotification = () => {
  const navigation = useNavigation();
  const _renderItem = ({item}) => (
    <ItemNotification
      title={item.title}
      content={item.content}
      date={item.date}
      onPress={() => {
        console.log(item.title);
      }}
    />
  );

  return (
    <Block marginTop={10}>
      <FlatList
        showsVerticalScrollIndicator={false}
        nestedScrollEnabled
        data={data}
        keyExtractor={item => item.id}
        renderItem={_renderItem}
      />
    </Block>
  );
};

export default ListNotification;
