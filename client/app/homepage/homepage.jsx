import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
// import Actions
import * as homePageActions from './redux/actions';

if (global.IS_BROWSER) {
  require('./homepage.styl');
}
// import Components
import ShebangList from '../../component/shebangList/shebangList';
import ShebangAddForm from '../../component/shebangAddForm/shebangAddForm';
import AddRecallForm from '../../component/addRecallForm/addRecallForm';

const propTypes = {
  shebangList: PropTypes.array,
  recallList: PropTypes.array,
  limit: PropTypes.number
};

class Homepage extends Component {
  constructor(props) {
    super(props);
    console.log()
  }

  static onClickShebangHandler() {
    return '';
  }

  render() {
    let {shebangList, recallList, limit} = this.props;
    return (
      <div className='homepage'>
        <div className='c-rating'>
          <div className='content-header widget block no-padding'>
            <div className='widget-extra themed-background filters-header'>
              <h4 className='widget-content-light-custom'>
                <span className='gi gi-cutlery m-r-10 m-t-15 text-muted pull-right'>Lunch Map</span>
                <br/>
                <small className='easterСhant' data-toggle='tooltip' data-placement='bottom' title=''
                       data-original-title='Скопируй на память =)'>
                  Check them All!
                </small>
              </h4>
            </div>
          </div>

          <div className='row map-row'>
            <div id='myMap' />
            <div className='row' id='search-field'/>
          </div>
          <div className='col-sm-4 col-md-4 col-lg-4'>
            <ShebangList
              shebangList={shebangList}
              recallList={recallList}
              limit={limit}
              onClickHandler={this.onClickShebangHandler}
            />
          </div>
          <div className='col-sm-4 col-md-4 col-lg-4'>
            <AddRecallForm homePageActions={homePageActions}/>
            <ShebangAddForm homePageActions={homePageActions}/>
          </div>
        </div>
      </div>
    );
  }

}

Homepage.propTypes = propTypes;

function mapStateToProps(state) {
  return {
    shebangList: state.homepageState.shebangList,
    recallList: state.homepageState.recallList,
    limit: state.homepageState.limit
  };
}

function mapDispatchToProps(dispatch) {
  return {
    homePageActions: bindActionCreators(homePageActions, dispatch)
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
