import React, {Component} from 'react';
import PropTypes from 'prop-types';

if (global.IS_BROWSER) {
  require('./app.styl');
}

const propTypes = {
  children: PropTypes.node
};

class App extends Component {

  render() {
    return (
      <div className=''>
        {this.props.children}
      </div>
    );
  }

}

App.propTypes = propTypes;

export default App;
