import LoginScreen from './LoginScreen';
import SignUpScreen from './SignUpScreen';
import UpdateProfileScreen from './UpdateProfileScreen';
import SendEmail from './SignUpScreen/navigation/SendEmail';
import VFTPhoneNumberScreen from './VFTPhoneNumberScreen';
import EnterPhoneNumberScreen from './SignUpScreen/navigation/EnterPhoneNumberScreen';

export const auth = {
  LOGIN_SCREEN: LoginScreen,
  SIGNUP_SCREEN: SignUpScreen,
  SEND_EMAIL: SendEmail,
  VFT_PHONE_NUMBER_SCREEN: VFTPhoneNumberScreen,
  UPDATE_PROFILE: UpdateProfileScreen,
  ENTER_PHONE_NUMBER_SCREEN: EnterPhoneNumberScreen,
};
