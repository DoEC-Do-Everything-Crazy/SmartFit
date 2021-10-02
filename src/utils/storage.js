/* eslint-disable no-undef */
import EncryptedStorage from 'react-native-encrypted-storage';

/**
 * encrypted password and save to storage
 */
export async function storePassword(password) {
  try {
    await EncryptedStorage?.setItem('password', JSON.stringify(password));
  } catch (error) {
    console.log('storePassword Error : ', error);
  }
}

/**
 * get encrypted password and from storage
 * @returns seed Buffer
 */
export async function retrievePassword() {
  try {
    const password = await EncryptedStorage?.getItem('password');

    if (seedString) {
      return JSON.parse(password);
    } else {
      throw new Error('password not found');
    }
  } catch (error) {
    console.log('retrievePassword Error : ', error);
  }
}

/**
 * clear Storage
 */
export async function clearStorage() {
  try {
    await EncryptedStorage?.clear();
  } catch (error) {
    console.log('clearStorage Error :', error);
  }
}
