import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect, NavLink } from 'react-router-dom'
import { loginUpdate, loginUser } from '../../../actions/login';

class Login extends Component {
  handleSubmit = async () => {
    const { username, password } = this.props;
    this.props.loginUser({ username, password });
  }

  handleChange = (prop) => async (event) => {
    const value = event.target.value;
    this.props.loginUpdate({ prop, value });
  }

  renderButton() {
    if (this.props.loading) {
      return (<p>Đang load...</p>);
    }

    return (
      <button type="button" className="btn btn-primary px-4" onClick={this.handleSubmit}>Đăng nhập</button>
    );
  }

  render() {
    if (this.props.status === '00') {
      return <Redirect to={'/dashboard'} />;
    }

    return (
      <div className="app flex-row align-items-center">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <div className="card-group mb-0">
                <div className="card p-4">
                  <div className="card-block">
                    <h1>Đăng nhập</h1>
                    <p className="text-muted">Đăng nhập vào tài khoản của bạn</p>
                    <div className="input-group mb-3">
                      <span className="input-group-addon"><i className="icon-user"></i></span>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Username"
                        onChange={this.handleChange('username')}
                        value={this.props.username}
                      />
                    </div>
                    <div className="input-group mb-4">
                      <span className="input-group-addon"><i className="icon-lock"></i></span>
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Password"
                        onChange={this.handleChange('password')}
                        value={this.props.password}
                      />
                    </div>
                    <div className="row">
                      <div className="col-6">
                        {/* <button type="button" className="btn btn-primary px-4">Đăng nhập</button> */}
                        {this.renderButton()}
                      </div>
                      <div className="col-6 text-right">
                        <button type="button" className="btn btn-link px-0">Quên mật khẩu?</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card card-inverse card-primary py-5 d-md-down-none" style={{ width: 44 + '%' }}>
                  <div className="card-block text-center">
                    <div>
                      <h2>Đăng ký</h2>
                      <p>Đăng ký tài khoản bằng user domain.</p>

                      <NavLink to={'/register'}>
                        <button type="button" className="btn btn-primary active mt-3">Đăng ký ngay bây giờ!</button>
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { username, password, error, loading, status } = state.login;
  return { username, password, error, loading, status };
};

export default connect(mapStateToProps, { loginUpdate, loginUser })(Login);
