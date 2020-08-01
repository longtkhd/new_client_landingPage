/*
 *
 * LoginPage actions
 *
 */

import { LOGIN, LOGIN_SUCCEED, LOGIN_FAILD, LOGOUT } from './constants';

export function login(email, password) {
  return {
    type: LOGIN,
    data: {
      email,
      password,
    },
  };
}
export function loginSucceed(data) {
  return {
    type: LOGIN_SUCCEED,
    data,
  };
}

export function loginFaild(data) {
  return {
    type: LOGIN_FAILD,
    data,
  };
}
export function logOut() {
  return {
    type: LOGOUT,
  };
}
