import {LOGIN, LOGOUT_HANDLE} from './constants';

const initialState = {
  userInfo: {},
  accessToken: '',
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN.SUCCESS: {
      return {
        ...state,
        userInfo: action.payload?.user,
        accessToken: action.payload?.accessToken,
      };
    }
    case LOGOUT_HANDLE: {
      return initialState;
    }
    default:
      return state;
  }
};

export default authReducer;
