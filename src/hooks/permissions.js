import {Alert, Platform} from 'react-native';
import {
  check,
  PERMISSIONS,
  RESULTS,
  request,
  openSettings,
} from 'react-native-permissions';
const PLATFORM_CAMERA_PERMISSIONS = {
  ios: PERMISSIONS.IOS.CAMERA,
  android: PERMISSIONS.ANDROID.CAMERA,
};

const REQUEST_PERMISSION_TYPE = {
  camera: PLATFORM_CAMERA_PERMISSIONS,
};

export const PERMISSION_TYPE = {
  camera: 'camera',
};

const requestPermission = async permissions => {
  try {
    const granted = await request(permissions);
    if (granted === RESULTS.GRANTED) {
      return true;
    }
  } catch (err) {
    return false;
  }
};
export const checkPermission = async type => {
  const permissions = REQUEST_PERMISSION_TYPE[type][Platform.OS];

  try {
    const result = await check(permissions);

    if (result === RESULTS.GRANTED) {
      return true;
    } else if (result === RESULTS.BLOCKED) {
      Alert.alert(
        'Camera permission',
        'OBL need camera permission to read barcode',
        [
          {
            text: 'Go to',
            onPress: () => openSettings(),
            style: 'cancel',
          },
          {
            text: 'Cancel',
            style: 'default',
            onPress: () => {
              return false;
            },
          },
        ],
      );
    } else {
      return requestPermission(permissions);
    }
  } catch (err) {
    return false;
  }
};
