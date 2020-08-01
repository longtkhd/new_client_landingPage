/*
 *
 * LoginPage reducer
 *
 */

import { fromJS } from 'immutable';
import { LOGIN, LOGIN_SUCCEED, LOGIN_FAILD, LOGOUT } from './constants';

export const initialState = fromJS({
  logined: false,
});


function signInReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return state
        .set('account', action.data.account)
        .set('password', action.data.password)
        .set('isLoading', false);
    case LOGIN_SUCCEED:
      return state.set('logined', true);
    case LOGIN_FAILD:
      return state.set('error', action.data.error).set('isLoading', false);
    case LOGOUT:
      return state.set('logined', false);
    default:
      return state;
  }
}

export default signInReducer;
