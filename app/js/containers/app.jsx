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
        {children}
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
