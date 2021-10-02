import {put} from 'redux-saga/effects';

import {authToken} from '../reducers';
import {actions} from './actions';

export function* signInSaga(params) {
  try {
    const token = '123456';
    yield put(authToken(token));
    yield put({type: actions.SIGN_IN_SAGA_SUCCESS});
  } catch (error) {
    yield put({type: actions.SIGN_IN_SAGA_FAILED});
  }
}
