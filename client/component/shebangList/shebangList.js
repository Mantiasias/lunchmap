import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ShebangItem from './shebangItem/shebangItem';

const propTypes = {
  onClickHandler: PropTypes.func,
  shebangList: PropTypes.array,
  recallList: PropTypes.array
};

class ShebangList extends Component {
  constructor(props) {
    super(props);
  }

  // need limit and onClick handler
  handleClick() {
    console.log('click works');
    this.props.onClickHandler(this);
    // $('.viewAll').hide();
  }

  render() {
    let shebangList = this.props.shebangList || [],
        recallList = this.props.recallList || [];
    return (
      <div className='timeline block-content-full' id='mountPoint'>
        <div className='row'>
          <div className='col-md-11 pull-right'><i className='fa fa-asterisk fa-spin fa-3x col-md-offset-5 text-info'/>
          </div>
        </div>
        <ul className='timeline-list timeline-hover'>
          {shebangList.map((shebang, ratingPlace) => {
            let shebangRecallList = recallList.filter((recall) => recall.shebangId === shebang.id);
            return (<ShebangItem key={ratingPlace} place={ratingPlace} recallList={shebangRecallList}
                                 shebang={shebang}/>);
          })}
        </ul>
      </div>

    );
  }
}

ShebangList.propTypes = propTypes;

export default ShebangList;
