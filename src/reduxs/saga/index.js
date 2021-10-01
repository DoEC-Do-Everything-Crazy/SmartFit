import {takeEvery} from 'redux-saga/effects';

import {actions} from './actions';
import {signInSaga} from './authSaga';

export default function* rootSaga() {
  yield takeEvery(actions.SIGN_IN_SAGA, signInSaga);
}
