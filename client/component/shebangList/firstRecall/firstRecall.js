import React, {Component} from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  recall: PropTypes.object
};

class FirstRecall extends Component {
  constructor(props) {
    super(props);
  }
  updateList() {
    // @todo service to update shebang list
    // $.ajax({
    //   url: '/api/recall?order={"id":1}&where='+JSON.stringify({"shebang_id" : this.props.dataId}),
    //   method: 'GET',
    //   success: function(result) {
    //     if(result.code == 200) {
    //       st.setState({result : result.data[0]});
    //     }
    //   },
    //   error: function() {
    //   }
    // });
  }
  render() {
    let {recall} = this.props;
    console.log(recall);
    return (
      <p className='push-bit recall-text'>{recall.visitDate}: {recall.text.substr(0, 100)}</p>
    );
  }
}

FirstRecall.propTypes = propTypes;
export default FirstRecall;
