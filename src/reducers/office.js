import {
  GETALL_OFFICE_START,
  GETALL_OFFICE_SUCCESS,
  GETALL_OFFICE_FAIL
} from '../constants/ActionTypes';

const INITIAL_STATE = {
  status: '',
  loading: false,
  error: '',
  listOffice: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    // Get all office
    case GETALL_OFFICE_START:
      return { ...state, error: '', loading: true };
    case GETALL_OFFICE_SUCCESS:
      return { ...state, status: '00', error: '', loading: false, listOffice: action.payload };
    case GETALL_OFFICE_FAIL:
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
};
