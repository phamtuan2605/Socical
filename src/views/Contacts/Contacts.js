import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'

class Contacts extends Component {
  render() {
    return (
      <div className="app flex-row align-items-center">
        <div className="container">
          Contacts
        </div>
      </div>

    );
  }
}

export default connect()(Contacts);