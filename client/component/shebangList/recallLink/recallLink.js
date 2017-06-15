import React, {Component} from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  name: PropTypes.string
};

class RecallLink extends Component {
  constructor(props) {
    super(props);
  }
  // params event and index
  handleClick() {
    // $('#shebang-select').val(st.props.dataId)
    // $('select').trigger('chosen:updated');
  }
  render() {
    return <a href='' onClick={this.handleClick} className='recall-link' data-toggle='modal'>{this.props.name}</a>;
  }
}
RecallLink.propTypes = propTypes;

export default RecallLink;
