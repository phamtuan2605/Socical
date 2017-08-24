import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import { Dropdown, DropdownMenu, DropdownItem } from 'reactstrap';

class Header extends Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  sidebarToggle(e) {
    e.preventDefault();
    document.body.classList.toggle('sidebar-hidden');
  }

  sidebarMinimize(e) {
    e.preventDefault();
    document.body.classList.toggle('sidebar-minimized');
  }

  mobileSidebarToggle(e) {
    e.preventDefault();
    document.body.classList.toggle('sidebar-mobile-show');
  }

  asideToggle(e) {
    e.preventDefault();
    document.body.classList.toggle('aside-menu-hidden');
  }

  render() {
    return (
      <header className="app-header navbar">
        <button className="navbar-toggler mobile-sidebar-toggler d-lg-none" type="button" onClick={this.mobileSidebarToggle}>&#9776;</button>
        <a className="navbar-brand" href="#"></a>
        <ul className="nav navbar-nav d-md-down-none">
          <li className="nav-item">
            <button className="nav-link navbar-toggler sidebar-toggler" type="button" onClick={this.sidebarToggle}>&#9776;</button>
          </li>
          <li className="nav-item px-3">
            <a className="nav-link" href="#">Trang chủ</a>
          </li>
          <li className="nav-item px-3">
            <a className="nav-link" href="#">Người dùng</a>
          </li>
          <li className="nav-item px-3">
            <a className="nav-link" href="#">Cài đặt</a>
          </li>
        </ul>
        <ul className="nav navbar-nav ml-auto">
          <li className="nav-item d-md-down-none">
            <a className="nav-link" href="#"><i className="icon-bell"></i><span className="badge badge-pill badge-danger">5</span></a>
          </li>
          <li className="nav-item d-md-down-none">
            <a className="nav-link" href="#"><i className="icon-list"></i></a>
          </li>
          <li className="nav-item d-md-down-none">
            <a className="nav-link" href="#"><i className="icon-location-pin"></i></a>
          </li>
          <li className="nav-item">
            <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
              <button onClick={this.toggle} className="nav-link dropdown-toggle" data-toggle="dropdown" type="button" aria-haspopup="true" aria-expanded={this.state.dropdownOpen}>
                <img src={'img/avatars/4.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com" />
                <span className="d-md-down-none">Phạm Văn Tuấn</span>
              </button>

              <DropdownMenu className="dropdown-menu-right">
                <DropdownItem header className="text-center"><strong>Tài khoản</strong></DropdownItem>

                <DropdownItem><i className="fa fa-bell-o"></i> Cập nhật<span className="badge badge-info">42</span></DropdownItem>
                <DropdownItem><i className="fa fa-envelope-o"></i> Tin nhắn<span className="badge badge-success">42</span></DropdownItem>
                <DropdownItem><i className="fa fa-tasks"></i> Công việc<span className="badge badge-danger">42</span></DropdownItem>
                <DropdownItem><i className="fa fa-comments"></i> Bình luận<span className="badge badge-warning">42</span></DropdownItem>

                <DropdownItem header className="text-center"><strong>Cài đặt</strong></DropdownItem>


                {/* <DropdownItem><i className="fa fa-user"></i> Hồ sơ</DropdownItem> */}
                <DropdownItem>
                  <NavLink to={'/user-profile'} className="nav-link" style={{ color: '#263238' }}><i className="fa fa-user"></i> Hồ sơ</NavLink>
                </DropdownItem>

                <DropdownItem><i className="fa fa-wrench"></i> Cài đặt</DropdownItem>
                <DropdownItem><i className="fa fa-usd"></i> Thanh toán<span className="badge badge-default">42</span></DropdownItem>
                <DropdownItem><i className="fa fa-file"></i> Dự án<span className="badge badge-primary">42</span></DropdownItem>
                <DropdownItem divider />
                <DropdownItem><i className="fa fa-shield"></i> Khóa tài khoản</DropdownItem>
                <DropdownItem><i className="fa fa-lock"></i> Đăng xuất</DropdownItem>

              </DropdownMenu>
            </Dropdown>
          </li>
          <li className="nav-item d-md-down-none">
            <button className="nav-link navbar-toggler aside-menu-toggler" type="button" onClick={this.asideToggle}>&#9776;</button>
          </li>
        </ul>
      </header>
    )
  }
}

export default Header;
