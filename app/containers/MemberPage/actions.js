// MemberPage Action

import {
  GET_USER,
  GET_USER_SUCCESS,
  GET_USER_FALSE,
  DELETE_USER,
  DELETE_USER_SUCCESS,
  CLOSE_SNACKBAR,
  CHANGE_SNACKBAR
} from './constants';
import history from '../../utils/history';
// import { func } from 'prop-types';

export function getAllUserAction(body){
  return {
    type: GET_USER,
    body,
  }
}

export function getAllUserSuccessAction(data){
  return {
    type: GET_USER_SUCCESS,
    data,
  }
}

export function getAllUserFalseAction(){
  return {
    type: GET_USER_FALSE,
  }
}

//DELETE USER
export function deleteUsers(userdelete) {
  //{id:abc}
  return {
    type: DELETE_USER,
    userdelete,
  };
}
export function deleteUserSuccess(query) {
  return {
    type: DELETE_USER_SUCCESS,
    query,
  };
}
export function closeSnackbar() {
  return {
    type: CLOSE_SNACKBAR
  };
}
export function changeSnackbar(data) {
  return {
    type: CHANGE_SNACKBAR,
     data
  };
}
  
// export const closeSnackbar = () => ({ type: CLOSE_SNACKBAR });

// export const changeSnackbar = data => ({ type: CHANGE_SNACKBAR, data });