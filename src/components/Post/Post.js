import React, { Component } from 'react';

class Post extends Component {
  render() {
    return (
      <div className="row">
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
      </div>
    );
  }
}

export default Post;