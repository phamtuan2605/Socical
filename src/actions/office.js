import axios from 'axios';
import { Config } from '../constants/Config';
import {
  GETALL_OFFICE_START,
  GETALL_OFFICE_SUCCESS,
  GETALL_OFFICE_FAIL
} from '../constants/ActionTypes';

// Get All Office
export const getAllOffice = () => (dispatch, getState) => {
  dispatch({ type: GETALL_OFFICE_START });

  const url = `${Config().Api.UrlRoot}/api/Office`;

  axios.get(url,
    {
      headers: {
        "authorization": `${getState().login.oAccess.token_type} ${getState().login.oAccess.access_token}`
      },
    })
    .then(function (response) {
      getAllOfficeSuccess(dispatch, response.data);
    })
    .catch(function (error) {
      getAllOfficeFail(dispatch, error);
    });;
};
export const getAllOfficeSuccess = (dispatch, list) => {
  dispatch({ type: GETALL_OFFICE_SUCCESS, payload: list });
};
export const getAllOfficeFail = (dispatch, error) => {
  dispatch({ type: GETALL_OFFICE_FAIL, payload: error });
};