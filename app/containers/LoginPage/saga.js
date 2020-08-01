import { takeLatest, call, put, delay} from 'redux-saga/effects';
import axios from 'axios';
import { loginSucceed, loginFaild } from './actions';
import * as types from './constants';
import { LOGIN_API } from '../../urlConfig';
import { changeSnackbar } from '../MemberPage/actions';

export function* login(action) {
  console.log('login');
  try {
    const data = yield call(axios, {
      url: LOGIN_API,
      method: 'POST',
      data: {
        email: action.data.email,
        password: action.data.password,
      },
    });
    console.log(data);
    if (data) {
      console.log('data');
      localStorage.setItem('token', data.data.token);
      localStorage.setItem('isAuthenticated', true);
     
      yield put(loginSucceed(data.data.token));
      // yield put(
      //   changeSnackbar({
      //     status: true,
      //     message: 'Đăng nhập thành công'
      //   }),
      // );
      
    }
  } catch (error) {}
}

export default function* signInSaga() {
  // See example in containers/HomePage/saga.js
  yield takeLatest(types.LOGIN, login);
}
