import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'
import { Button, ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { getAllOffice } from '../../actions/office';

class UserProfile extends Component {

  componentDidMount() {
    this.props.getAllOffice();
  }

  renderListOffice() {
    if (this.props.loading) {
      return (<option value="1">Loading...</option>);
    }
    const list = this.props.listOffice.map(function (office) {
      return (
        <option value={office.uid} key={office.uid}>{office.name}</option>
      )
    });
    return (
      list
    );
  }

  render() {
    return (
      <div className="animated fadeIn">
        <div className="row">
          <div className="col-md-6">
            <div className="card">
              <div className="card-header">
                <strong>Cập nhật</strong> thông tin tài khoản
              </div>
              <div className="card-block">
                <div className="form-horizontal">
                  <div className="form-group row">
                    <label className="col-md-3 form-control-label">Tài khoản</label>
                    <div className="col-md-9">
                      <p className="form-control-static">pvtuan</p>
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className="col-md-3 form-control-label" htmlFor="text-input">Họ tên</label>
                    <div className="col-md-9">
                      <input type="text" id="text-input" name="text-input" className="form-control" placeholder="" />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className="col-md-3 form-control-label">Giới tính</label>
                    <div className="col-md-9">
                      <div className="radio">
                        <label htmlFor="radio1">
                          <input type="radio" id="radio1" name="radios" value="NAM" /> Nam
                        </label>
                      </div>
                      <div className="radio">
                        <label htmlFor="radio2">
                          <input type="radio" id="radio2" name="radios" value="NU" /> Nữ
                        </label>
                      </div>
                      <div className="radio">
                        <label htmlFor="radio3">
                          <input type="radio" id="radio3" name="radios" value="KHAC" /> Khác
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className="col-md-3 form-control-label" htmlFor="text-input">ĐT di động</label>
                    <div className="col-md-9">
                      <input type="text" id="text-input" name="text-input" className="form-control" placeholder="" />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className="col-md-3 form-control-label" htmlFor="text-input">ĐT làm việc</label>
                    <div className="col-md-9">
                      <input type="text" id="text-input" name="text-input" className="form-control" placeholder="" />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className="col-md-3 form-control-label" htmlFor="text-input">Email</label>
                    <div className="col-md-9">
                      <input type="text" id="text-input" name="text-input" className="form-control" placeholder="" />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className="col-md-3 form-control-label" htmlFor="text-input">Địa chỉ nơi ở</label>
                    <div className="col-md-9">
                      <input type="text" id="text-input" name="text-input" className="form-control" placeholder="" />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className="col-md-3 form-control-label" htmlFor="text-input">Địa chỉ làm việc</label>
                    <div className="col-md-9">
                      <input type="text" id="text-input" name="text-input" className="form-control" placeholder="" />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className="col-md-3 form-control-label" htmlFor="select">Đơn vị</label>
                    <div className="col-md-9">
                      <select id="select" name="select" className="form-control">
                        <option value="0">Chọn đơn vị</option>
                        {this.renderListOffice()}
                        {/* <option value="1">Option #1</option>
                        <option value="2">Option #2</option>
                        <option value="3">Option #3</option> */}
                      </select>
                    </div>
                  </div>
                  <div className="form-group row">
                    <label className="col-md-3 form-control-label" htmlFor="file-input">Ảnh đại diện</label>
                    <div className="col-md-9">
                      <input type="file" id="file-input" name="file-input" />
                    </div>
                  </div>

                </div>
              </div>
              <div className="card-footer">
                <button type="submit" className="btn btn-sm btn-primary"><i className="fa fa-dot-circle-o"></i> Lưu trữ</button>
                <button type="reset" className="btn btn-sm btn-danger"><i className="fa fa-ban"></i> Nhập lại</button>
              </div>
            </div>
          </div>
        </div>
      </div>

    );
  }
}

const mapStateToProps = (state) => {
  const { loading, listOffice } = state.office;
  return { loading, listOffice };
};

export default connect(mapStateToProps, { getAllOffice })(UserProfile);