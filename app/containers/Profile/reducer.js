import produce from 'immer';
import {
  GET_USER_ID,
  GET_USER_ID_SUCCESS,
  GET_USER_ID_FAILED,
} from './constants';

export const initialState = {
  users: {},
  loading: false,
  error: false,
  success: false,
};


const profileReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case GET_USER_ID:
        draft.loading = true;
        draft.error = false;
        draft.success = false;
        break;
      case GET_USER_ID_SUCCESS:
        draft.loading = false;
        draft.error = false;
        draft.success = true;
        draft.users = action.data;
        // console.log(action.data.user)
        break;
      case GET_USER_ID_FAILED:
        draft.loading = false;
        draft.success = false;
        draft.error = false;
        break;

      

    }
  });


export default profileReducer;