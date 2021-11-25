import EnterPhoneNumberScreen from './EnterPhoneNumberScreen';
import LoginScreen from './LoginScreen';
import OnBoardScreen from './OnBoardScreen';
import PasswordScreen from './PasswordScreen';
import RegisterScreen from './RegisterScreen';
import SendEmail from './SendEmail';
import SplashScreen from './SplashScreen';
import UpdateProfileScreen from './UpdateProfileScreen';
import VFTPhoneNumberScreen from './VFTPhoneNumberScreen';
import ChangePasswordAuth from './ChangePasswordAuth';

export const auth = {
  LOGIN_SCREEN: LoginScreen,
  REGISTER_SCREEN: RegisterScreen,
  SEND_EMAIL_SCREEN: SendEmail,
  VFT_PHONE_NUMBER_SCREEN: VFTPhoneNumberScreen,
  UPDATE_PROFILE_SCREEN: UpdateProfileScreen,
  ENTER_PHONE_NUMBER_SCREEN: EnterPhoneNumberScreen,
  SPLASH_SCREEN: SplashScreen,
  ONBOARD_SCREEN: OnBoardScreen,
  PASSWORD_SCREEN: PasswordScreen,
  CHANGE_PASSWORD_AUTH: ChangePasswordAuth,
};
