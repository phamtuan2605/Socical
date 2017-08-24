import axios from 'axios';
import { Config } from '../constants/Config';
import { Commons } from '../constants/Commons';
import {
  LOGIN_UPDATE,
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAIL
} from '../constants/ActionTypes';

// Object input vao api dang ky
export const oUser = {
  'grant_type': 'password',
  'username': 'pvtuan',
  'password': '123456'
};

// Cap nhat cac truong tren form
export const loginUpdate = ({ prop, value }) => ({
  type: LOGIN_UPDATE,
  payload: { prop, value }
});

export const loginUser = ({ username, password }) => (dispatch, getState) => {
  dispatch({ type: LOGIN_START });

  const url = `${Config().Api.UrlRoot}/token`;
  //const url = `${Config().Api.UrlRoot}/api/Gamers`;
  const data1 = JSON.stringify(oUser);

  var params = new URLSearchParams();
  params.append('grant_type', 'password');
  params.append('username', 'pvtuan');
  params.append('password', '123456');

  const data2 = `grant_type=password&username=${username}&password=${password}`;
  axios.post(url, data2)
  .then(function (response) {
      //console.log(response);
      const rs = response.data;
      loginSuccess(dispatch, rs);
    })
    .catch(function (error) {
      //console.log(error);
      loginFail(dispatch, 'Đăng nhập thất bại');
    });;

  // axios({
  //   method: 'post',
  //   url: 'http://localhost:8086/token',
  //   headers: {
  //     "accept": "application/json",
  //     "content-type": "application/x-www-form-urlencoded",
  //   },
  //   body: data1
  // })
  //   .then(function (response) {
  //     console.log(response);
  //   })
  //   .catch(function (error) {
  //     console.log(error);
  //   });

  // axios({
  //   method: 'get',
  //   url: url,
  //   headers: {
  //   'authorization': "Bearer KWLLiTxrikgkzXu0kWoWj8KZwf5lpLCDNNb26n0SnGWlFmrmtURaF9H5Rc9Y4aWnnUfgwNCNUFsdc04zm8J2q3x4muzjX79wxXGgeBWsarYOfEkOVWKL3uGNEifH-2gP5yCHgBfLZRGFVSQmWyJOJ-8KgCCo07BO_d5bmlHdbu_vdq0mEE0cGejpbEMH0Zg3ol4iiYQMDtOC0JQsA6tTdz_P3laDlgNE0Jg6sve8npM"}
  // })
  //   .then(function (response) {
  //     console.log(response);
  //   })
  //   .catch(function (error) {
  //     console.log(error);
  //   });

  // if (username === 'north\\pvtuan' && password === 'abc~1234') {
  //   console.log('aaaaaaaa');
  //   loginSuccess(dispatch, '00');
  // } else {
  //   loginFail(dispatch, 'Đăng nhập thất bại');
  // }
};

export const loginSuccess = (dispatch, dataAccess) => {
  dispatch({ type: LOGIN_SUCCESS, payload: dataAccess });
};

export const loginFail = (dispatch, message) => {
  dispatch({ type: LOGIN_FAIL, payload: message });
};

