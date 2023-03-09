import {callApi} from '../../helpers/callApi';
import {fork, put, takeLatest} from 'redux-saga/effects';
import {LOGIN} from './constants';
import {loginFailed, loginSuccess} from './actions';
import {loginApi} from '../../services/api/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

export function* loginSaga(obj) {
  const {payload, onSuccess, onError} = obj;
  try {
    const res = yield callApi(loginApi, payload);
    onSuccess?.(res.data.data);
    yield put(loginSuccess(res.data.data));
    AsyncStorage.setItem('ACCESS_TOKEN', res?.data?.data?.accessToken);
  } catch (err) {
    yield put(loginFailed(err));
    onError?.(err);
  }
}

function* watchUser() {
  yield takeLatest(LOGIN.HANDLER, loginSaga);
}

export default function* rootChild() {
  yield fork(watchUser);
}
