import {icons} from '@assets';
import {routes} from './../navigation/routes';
const DATA_INFO = [
  {
    image:
      'https://i.pinimg.com/originals/85/a4/0a/85a40a6b89b0d51f020c80e7dd6d6ea4.jpg',
    name: 'Hồ Công Khanh',
    phoneNumber: '0344108493',
    email: 'congkhanh2424@gmail.com',
    gene: 'Male',
    birthday: '01-01-2001',
  },
];

const DATA_STATISTICAL_PROFILE = [
  {
    balance: '$2285',
    course: '4',
  },
];

const DATA_FEATURE = [
  {
    id: 1,
    title: 'Your favorite',
    image: icons.heartPf,
    navigation: routes.YOUR_FAVORITE_SCREEN,
  },
  {
    id: 2,
    title: 'Payment',
    image: icons.payment,
  },
  {
    id: 3,
    title: 'Promotion',
    image: icons.promotion,
  },
  {
    id: 4,
    title: 'Order',
    image: icons.order,
    navigation: routes.ORDER_SCREEN,
  },
  {
    id: 5,
    title: 'Setting',
    image: icons.setting,
    navigation: routes.SETTING_SCREEN,
  },
];

export {DATA_INFO, DATA_STATISTICAL_PROFILE, DATA_FEATURE};
