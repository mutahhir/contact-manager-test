import React from 'react';
import { connect } from 'react-redux';
import { pushState } from 'redux-router';

const App = React.createClass({
  propTypes: {
    pushState: React.PropTypes.func.isRequired,
    children: React.PropTypes.node
  },

  render: function () {
    const {children} = this.props;
    return (
      <div>
        <header className="bs-header">
          <div className="container">
            <h1>Contact Manager</h1>
            <p>Simple Backbone.js example application</p>
          </div>
        </header>
        <div className="container">
          <div className="row">
            <div className="col-xs-12 main-container">
              {children}
            </div>
          </div>
        </div>
      </div>
    );
  }
});

function mapStateToProps (/*state*/) {
  return {};
}

export default connect(mapStateToProps, {
  pushState
})(App);
