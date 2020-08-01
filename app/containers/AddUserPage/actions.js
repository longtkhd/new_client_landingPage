// CreateUser action

import {
  
  CREATE_USER_SUCCESS,
  CREATE_USER,
  UPDATE_USER,
  UPDATE_USER_SUCCESS,
  
} from './constants';

export function createUserAction(userInfor) {
  return {
    type: CREATE_USER,
    userInfor,
  };
}

export function createUserSuccessAction(query) {
  return {
    type: CREATE_USER_SUCCESS,
    query,
  };
}

export function updateUserAction(userInfor) {
  return {
    type: UPDATE_USER,
    userInfor,
  };
}

export function updateUserSuccessAction(query) {
  return {
    type: UPDATE_USER_SUCCESS,
    query,
  };
}
