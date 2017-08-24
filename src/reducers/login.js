import {
  LOGIN_UPDATE,
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAIL
} from '../constants/ActionTypes';

const INITIAL_STATE = {
  username: 'pvtuan',
  password: '123456',
  error: '',
  loading: false,
  status: '',
  oAccess: {},
  oUser: [],
  isAuthenticated: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN_UPDATE: {
      return { ...state, [action.payload.prop]: action.payload.value };
    }
    case LOGIN_START:
      return { ...state, error: '', loading: true };
    case LOGIN_SUCCESS:
      return { ...state, status: '00', error: '', loading: false, oAccess: action.payload, isAuthenticated: true };
    case LOGIN_FAIL:
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
};

