import {LOGIN, LOGOUT_HANDLE} from './constants';

export const loginHandle = (payload, onSuccess, onFailed) => ({
  type: LOGIN.HANDLER,
  payload,
  onSuccess,
  onFailed,
});

export const loginSuccess = payload => ({
  type: LOGIN.SUCCESS,
  payload,
});

export const loginFailed = error => ({
  type: LOGIN.FAILURE,
  error,
});

export const logoutHandle = () => ({
  type: LOGOUT_HANDLE,
});
