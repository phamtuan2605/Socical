import axios from 'axios';
import { Config } from '../constants/Config';
import {
  GET_POST_START,
  GET_POST_SUCCESS,
  GET_POST_FAIL,
  POST_POST_START,
  POST_POST_SUCCESS,
  POST_POST_FAIL
} from '../constants/ActionTypes';

// Get All Post
export const getAllPost = () => (dispatch, getState) => {
  dispatch({ type: GET_POST_START });

  const url = `${Config().Api.UrlRoot}/api/Post`;

  axios.get(url,
    {
      headers: {
        "authorization": `${getState().login.oAccess.token_type} ${getState().login.oAccess.access_token}`
      },
    })
    .then(function (response) {
      //console.log(response);
      const rs = response.data;
      getAllPostSuccess(dispatch, response.data);
    })
    .catch(function (error) {
      console.log(error);
      getAllPostFail(dispatch, 'Đăng nhập thất bại');
    });;
};
export const getAllPostSuccess = (dispatch, listPost) => {
  dispatch({ type: GET_POST_SUCCESS, payload: listPost });
};
export const getAllPostFail = (dispatch, message) => {
  dispatch({ type: GET_POST_FAIL, payload: message });
};

// Post a post
export const postAPost = (strContent) => (dispatch, getState) => {
  dispatch({ type: POST_POST_START });

  let objInput = {
    content: strContent,
  }

  const strUrl = `${Config().Api.UrlRoot}/api/Post`;
  const strData = JSON.stringify(objInput);

  axios(
    {
      method: 'post',
      url: strUrl,
      headers: {
        "Content-Type": "application/json",
        "authorization": `${getState().login.oAccess.token_type} ${getState().login.oAccess.access_token}`
      },
      data: strData
    })
    .then(function (response) {
      //console.log(response);
      const rs = response.data;
      postAPostSuccess(dispatch, rs);
    })
    .catch(function (error) {
      console.log(error);
      postAPostFail(dispatch, "Đăng thất bại");
    });;
};
export const postAPostSuccess = (dispatch, oPost) => {
  dispatch({ type: POST_POST_SUCCESS, payload: oPost });
};
export const postAPostFail = (dispatch, message) => {
  dispatch({ type: POST_POST_FAIL, payload: message });
};
