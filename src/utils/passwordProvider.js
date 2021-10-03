/* eslint-disable no-undef */
import {useCallback, useContext} from 'react';

import {retrievePassword, storePassword, clearStorage} from '../ultils';

// @ts-ignore
export function PasswordProvider() {
  /**
   * store seed in encrypt storage
   */
  const addPassword = useCallback(async password => {
    await storePassword(password);
  }, []);

  /**
   * change account
   */
  const changePassword = useCallback(async (currentPassword, password) => {
    if (currentPassword === password) {
      await retrievePassword();
      return true;
    } else {
      return false;
    }
  }, []);

  /**
   * remove seed from encrypt storage
   */
  const removePassword = useCallback(async () => {
    await clearStorage();
  }, []);
}

export function useProvider() {
  const context = useContext(ProviderContext);
  if (!context) {
    throw new Error('Missing provider context');
  }
  return context;
}
