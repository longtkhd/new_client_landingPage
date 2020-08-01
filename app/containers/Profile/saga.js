import { call, put, takeLatest, takeEvery, delay } from 'redux-saga/effects';
import { USER } from '../../urlConfig';
import * as types from './constants';
import axios from 'axios';
import history from '../../utils/history';

import { getUserById, getUserByIdSuccess, getUserByIdFailed} from './actions';


export function* fetchGetAllUserById(action) {
  // console.log(action);
  try {
    const data = yield call(axios, {

      url: `${USER}/get/${action.id}`,
      method: 'GET',
      

    });

    if (data) {
      console.log(data.data)

      yield put(getUserByIdSuccess(data.data));


    } else {
      yield put(getUserByIdFailed({}));
      console.log("fetch api failed");
    }

  } catch (error) {
    yield put(getUserByIdFailed({ error }));
    console.log("error");
    localStorage.clear();

  }
}

export default function* profileSaga() {
  // See example in containers/HomePage/saga.js
  yield takeLatest(types.GET_USER_ID, fetchGetAllUserById);
 

}

