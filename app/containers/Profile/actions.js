
import {
  GET_USER_ID,
  GET_USER_ID_SUCCESS,
  GET_USER_ID_FAILED, 
} from './constants';

export function getUserById(id){
  return {
    type: GET_USER_ID,
    id
  }
}
export function getUserByIdSuccess(data) {
  return {
    type: GET_USER_ID_SUCCESS,
    data
  }
}

export function getUserByIdFailed(data) {
  return {
    type: GET_USER_ID_FAILED,
    data
  }
}