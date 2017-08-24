import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { Dropdown, DropdownMenu, DropdownItem, Progress } from 'reactstrap';
import axios from 'axios';
import { Redirect } from 'react-router-dom'
import { getAllPost, postAPost } from '../../actions/post';


class Dashboard extends Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false,
      strContent: ''
    };
  }

  componentDidMount() {
    this.handleGetAllPost();
  }

  handleGetAllPost = async () => {
    this.props.getAllPost();
  }

  handlePostAPost = async () => {
    this.props.postAPost(this.state.strContent);
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  handleChangePost = () => async (event) => {
    const value = event.target.value;
    this.setState({ strContent: value });
  }

  renderPosts() {
    if (this.props.loading) {
      return (<p>Đang load...</p>);
    }

    const list = this.props.listPost.map(function (post) {
      return (
        <div className="row" key={post.id}>
          <div className="col-md-12">

            <div className="card">
              <div className="card-block" style={{ paddingBottom: '0.1rem', paddingTop: '0.5rem' }}>
                <div className="form-horizontal">
                  <div className="form-group row">
                    <div className="col-md-1">
                      <div className="avatar">
                        <img src={'img/avatars/1.jpg'} className="img-avatar" alt="1" />
                      </div>
                    </div>
                    <div className="col-md-8">
                      <span className="d-md-down-none">
                        <button type="button" className="btn btn-link" style={{ padding: '0' }}>Phạm Văn Tuấn</button>
                      </span> <br />
                      <span style={{ color: '#90949c' }}> 2 giờ trước</span>
                    </div>
                  </div>
                  <div className="form-group row">
                    <div className="col-md-12">
                      <span>{post.content}</span>
                    </div>
                  </div>
                  <div className="form-group row" style={{ paddingTop: '0', marginBottom: '0', borderTop: '1px solid #cfd8dc' }}>
                    <div className="col-md-1">
                      <button type="button" className="btn btn-link" style={{ color: '#4b4f56', paddingLeft: '0' }}><i className="fa fa-thumbs-up"></i> Thích</button>
                    </div>
                    <div className="col-md-2">
                      <button type="button" className="btn btn-link" style={{ color: '#4b4f56', paddingLeft: '0' }}><i className="fa fa-comment"></i> Bình luận</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-footer" style={{ paddingTop: '0.3rem', backgroundColor: '#f6f7f9', paddingBottom: '0' }}>
                <div className="form-horizontal">
                  <div className="form-group row" style={{ borderBottom: '1px solid #cfd8dc', paddingBottom: '0.5rem', marginBottom: '0.5rem' }}>
                    <div className="col-md-12">
                      <button type="button" className="btn btn-link" style={{ paddingTop: '0', paddingBottom: '0', paddingLeft: '0' }}><i className="fa fa-thumbs-up"></i> Phạm Tuấn và 100 người khác</button>
                    </div>
                  </div>
                  <div className="form-group row" style={{ marginBottom: '0.5rem' }}>
                    <div className="col-md-1">
                      <div className="avatar">
                        <img src={'img/avatars/2.jpg'} className="img-avatar" alt="2" />
                      </div>
                    </div>
                    <div className="col-md-11">
                      <button type="button" className="btn btn-link" style={{ padding: '0', paddingBottom: '0.3rem' }}>Phương Anh</button>
                      <span> Hay lắm</span> <br />
                      <button type="button" className="btn btn-link" style={{ padding: '0', paddingBottom: '0.3rem' }}>Thích</button>
                      <span style={{ color: '#90949c' }}> - 1 giờ trước</span>
                    </div>
                  </div>
                  <div className="form-group row" style={{ marginBottom: '0.5rem' }}>
                    <div className="col-md-1">
                      <div className="avatar">
                        <img src={'img/avatars/3.jpg'} className="img-avatar" alt="3" />
                      </div>
                    </div>
                    <div className="col-md-11">
                      <button type="button" className="btn btn-link" style={{ padding: '0', paddingBottom: '0.3rem' }}>Phương Anh</button>
                      <span> Hay lắm</span> <br />
                      <button type="button" className="btn btn-link" style={{ padding: '0', paddingBottom: '0.3rem' }}>Thích</button>
                      <span style={{ color: '#90949c' }}> - 1 giờ trước</span>
                    </div>
                  </div>
                  <div className="form-group row" style={{ marginBottom: '0.5rem' }}>
                    <button type="button" className="btn btn-link" style={{ paddingTop: '0', paddingBottom: '0' }}>Xem thêm bình luận</button>
                  </div>
                  <div className="form-group row" style={{ marginBottom: '0.5rem' }}>
                    <div className="col-md-1">
                      <div className="avatar">
                        <img src={'img/avatars/4.jpg'} className="img-avatar" alt="4" />
                      </div>
                    </div>
                    <div className="col-md-11">
                      <textarea id="textarea-input" name="textarea-input" rows="1" className="form-control" placeholder="Viết bình luận..."></textarea>
                    </div>
                  </div>
                </div>
              </div>
            </div>



          </div>
        </div>
      );
    });
    return (
      list
    );

  }

  render() {
    return (
      <div className="animated fadeIn">
        <div className="row">
          <div className="col-md-12">
            <div className="card" style={{ marginTop: '0.5rem', marginBottom: '1rem' }}>
              <div className="card-header" style={{ backgroundColor: '#f6f7f9' }}>
                <strong>Sáng kiến</strong>
              </div>
              <div className="card-block">
                <div className="form-horizontal">
                  <div className="form-group row" style={{ marginBottom: '0' }}>
                    <div className="col-md-12">
                      <textarea
                        id="textarea-input"
                        name="textarea-input"
                        rows="2"
                        className="form-control"
                        placeholder="Nhập sáng kiến"
                        onChange={this.handleChangePost()}
                        value={this.state.strContent}
                      ></textarea>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-footer" style={{ backgroundColor: '#f6f7f9' }}>
                <div className="form-horizontal">
                  <div className="form-group row text-right" style={{ marginBottom: '0' }}>
                    <div className="col-md-8">
                      <label className="radio-inline" htmlFor="inline-radio1">
                        <input type="radio" id="inline-radio1" name="inline-radios" value="option1" /> Chia sẻ
                      </label>&nbsp;&nbsp;
                      <label className="radio-inline" htmlFor="inline-radio2">
                        <input type="radio" id="inline-radio2" name="inline-radios" value="option2" /> Sáng kiến
                      </label>&nbsp;&nbsp;
                      <label className="radio-inline" htmlFor="inline-radio3">
                        <input type="radio" id="inline-radio3" name="inline-radios" value="option3" /> Công việc
                      </label>&nbsp;&nbsp;
                      <label className="radio-inline" htmlFor="inline-radio4">
                        <input type="radio" id="inline-radio4" name="inline-radios" value="option4" /> Khác
                      </label>
                    </div>
                    <div className="col-md-2">
                      <select id="select" name="select" className="form-control form-control-sm">
                        <option value="0">Mọi người</option>
                        <option value="1">Trong khối</option>
                        <option value="2">Trong trung tâm</option>
                        <option value="3">Trong phòng</option>
                        <option value="3">Trong bộ phận</option>
                        <option value="3">Người cụ thể</option>
                        <option value="3">Chỉ mình tôi</option>
                      </select>
                    </div>
                    <div className="col-md-2">
                      <button
                        type="submit"
                        className="btn btn-sm btn-primary"
                        onClick={this.handlePostAPost}
                      >
                        <i className="fa fa-dot-circle-o"></i> Đăng</button>
                    </div>
                  </div>
                </div>


              </div>
            </div>
          </div>
        </div>


        {this.renderPosts()}
        {/* <div className="row">
          <div className="col-md-12">

            <div className="card">
              <div className="card-block" style={{ paddingBottom: '0.1rem', paddingTop: '0.5rem' }}>
                <div className="form-horizontal">
                  <div className="form-group row">
                    <div className="col-md-1">
                      <div className="avatar">
                        <img src={'img/avatars/1.jpg'} className="img-avatar" alt="1" />
                      </div>
                    </div>
                    <div className="col-md-8">
                      <span className="d-md-down-none">
                        <button type="button" className="btn btn-link" style={{ padding: '0' }}>Phạm Văn Tuấn</button>
                      </span> <br />
                      <span style={{ color: '#90949c' }}> 2 giờ trước</span>
                    </div>
                  </div>
                  <div className="form-group row">
                    <div className="col-md-12">
                      <span>Điều chỉnh điều kiện XHTD trong các Quy định hiện hành đối với khách hàng chấm điểm theo mô hình SME tại Quyết định số 162/QĐ-TGĐ.16</span>
                    </div>
                  </div>
                  <div className="form-group row" style={{ paddingTop: '0', marginBottom: '0', borderTop: '1px solid #cfd8dc' }}>
                    <div className="col-md-1">
                      <button type="button" className="btn btn-link" style={{ color: '#4b4f56', paddingLeft: '0' }}><i className="fa fa-thumbs-up"></i> Thích</button>
                    </div>
                    <div className="col-md-2">
                      <button type="button" className="btn btn-link" style={{ color: '#4b4f56', paddingLeft: '0' }}><i className="fa fa-comment"></i> Bình luận</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-footer" style={{ paddingTop: '0.3rem', backgroundColor: '#f6f7f9', paddingBottom: '0' }}>
                <div className="form-horizontal">
                  <div className="form-group row" style={{ borderBottom: '1px solid #cfd8dc', paddingBottom: '0.5rem', marginBottom: '0.5rem' }}>
                    <div className="col-md-12">
                      <button type="button" className="btn btn-link" style={{ paddingTop: '0', paddingBottom: '0', paddingLeft: '0' }}><i className="fa fa-thumbs-up"></i> Phạm Tuấn và 100 người khác</button>
                    </div>
                  </div>
                  <div className="form-group row" style={{ marginBottom: '0.5rem' }}>
                    <div className="col-md-1">
                      <div className="avatar">
                        <img src={'img/avatars/2.jpg'} className="img-avatar" alt="2" />
                      </div>
                    </div>
                    <div className="col-md-11">
                      <button type="button" className="btn btn-link" style={{ padding: '0', paddingBottom: '0.3rem' }}>Phương Anh</button>
                      <span> Hay lắm</span> <br />
                      <button type="button" className="btn btn-link" style={{ padding: '0', paddingBottom: '0.3rem' }}>Thích</button>
                      <span style={{ color: '#90949c' }}> - 1 giờ trước</span>
                    </div>
                  </div>
                  <div className="form-group row" style={{ marginBottom: '0.5rem' }}>
                    <div className="col-md-1">
                      <div className="avatar">
                        <img src={'img/avatars/3.jpg'} className="img-avatar" alt="3" />
                      </div>
                    </div>
                    <div className="col-md-11">
                      <button type="button" className="btn btn-link" style={{ padding: '0', paddingBottom: '0.3rem' }}>Phương Anh</button>
                      <span> Hay lắm</span> <br />
                      <button type="button" className="btn btn-link" style={{ padding: '0', paddingBottom: '0.3rem' }}>Thích</button>
                      <span style={{ color: '#90949c' }}> - 1 giờ trước</span>
                    </div>
                  </div>
                  <div className="form-group row" style={{ marginBottom: '0.5rem' }}>
                    <button type="button" className="btn btn-link" style={{ paddingTop: '0', paddingBottom: '0' }}>Xem thêm bình luận</button>
                  </div>
                  <div className="form-group row" style={{ marginBottom: '0.5rem' }}>
                    <div className="col-md-1">
                      <div className="avatar">
                        <img src={'img/avatars/4.jpg'} className="img-avatar" alt="4" />
                      </div>
                    </div>
                    <div className="col-md-11">
                      <textarea id="textarea-input" name="textarea-input" rows="1" className="form-control" placeholder="Viết bình luận..."></textarea>
                    </div>
                  </div>
                </div>
              </div>
            </div>



          </div>
        </div> */}

      </div >
    )
  }
}

const mapStateToProps = (state) => {
  const { status, loading, error, listPost, postLoading } = state.post;
  return { status, loading, error, listPost, postLoading };
};

export default connect(mapStateToProps, { getAllPost, postAPost })(Dashboard);
