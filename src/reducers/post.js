import {
  GET_POST_START,
  GET_POST_SUCCESS,
  GET_POST_FAIL,
  POST_POST_START,
  POST_POST_SUCCESS,
  POST_POST_FAIL
} from '../constants/ActionTypes';

const INITIAL_STATE = {
  status: '',
  loading: false,
  error: '',
  listPost: [],
  postLoading: false,
  postError: '',
  postObject: {}
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    // Get all post
    case GET_POST_START:
      return { ...state, error: '', loading: true };
    case GET_POST_SUCCESS:
      return { ...state, status: '00', error: '', loading: false, listPost: action.payload };
    case GET_POST_FAIL:
      return { ...state, error: action.payload, loading: false };
    // Post a post
    case POST_POST_START:
      return { ...state, postError: '', postLoading: true };
    case POST_POST_SUCCESS:
        return { ...state, postError: '', postLoading: false, postObject: action.payload };
    case POST_POST_FAIL:
      return { ...state, postError: action.payload, postLoading: false };
    default:
      return state;
  }
};