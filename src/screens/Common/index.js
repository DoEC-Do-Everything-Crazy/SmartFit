// LIST
import CourseListScreen from './List/CourseListScreen';
import ProductListScreen from './List/ProductListScreen';
import CourseListTypeScreen from './List/CourseListTypeScreen';
import FoodListScreen from './List/FoodListScreen';

// DETAILS
import DetailsCourseScreen from './Details/DetailsCourseScreen';
import FoodDetailsScreen from './Details/FoodDetailsScreen';
import OrderDetailScreen from './Details/OrderDetailScreen';

// TABS
import TabLesson from './Details/DetailsCourseScreen/components/TabScreen/TabLesson';
import TabDetails from './Details/DetailsCourseScreen/components/TabScreen/TabDetails';

// FEATURE INFO
import OrderScreen from './NavigationInfo/OrderScreen';
import YourFavoriteScreen from './NavigationInfo/YourFavoriteScreen';
import SettingScreen from './NavigationInfo/SettingScreen';

// OTHER

import FilterScreen from './Other/FilterScreen';
import CartScreen from './Other/CartScreen';
import ChangePassword from './Navigation/ChangePassword';
import ChangePinCode from './Navigation/ChangePinCode';

export const common = {
  DETAILS_COURSE_SCREEN: DetailsCourseScreen,
  COURSE_LIST_SCREEN: CourseListScreen,
  TAB_DETAILS: TabDetails,
  TAB_LESSON: TabLesson,
  PRODUCT_LIST_SCREEN: ProductListScreen,
  FOOD_DETAILS_SCREEN: FoodDetailsScreen,
  FILTER_SCREEN: FilterScreen,
  FOOD_LIST_SCREEN: FoodListScreen,
  COURSE_LIST_TYPE_SCREEN: CourseListTypeScreen,

  ORDER_SCREEN: OrderScreen,
  ORDER_DETAIL_SCREEN: OrderDetailScreen,
  CART_SCREEN: CartScreen,
  YOUR_FAVORITE_SCREEN: YourFavoriteScreen,
  SETTING_SCREEN: SettingScreen,
  CHANGE_PASSWORD: ChangePassword,
  CHANGE_PIN_CODE: ChangePinCode,
};
