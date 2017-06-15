import React, {Component} from 'react';
import PropTypes from 'prop-types';
import RecallLink from '../recallLink/recallLink';
import FirstRecall from '../firstRecall/firstRecall';

const propTypes = {
  shebang: PropTypes.object,
  place: PropTypes.number,
  recallList: PropTypes.array
};

class ShebangItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let color = '', hideStyle = {display: 'none'}, {shebang, place, recallList} = this.props;
    if (place === 0) {
      color = 'timeline-icon themed-border-autumn themed-background-autumn';
    } else if (place === 1) {
      color = 'timeline-icon themed-border-night themed-background-night';
    } else if (place === 2) {
      color = 'timeline-icon themed-border-amethyst themed-background-amethyst';
    } else {
      color = 'timeline-icon';
    }
    return (
      <li className='active' key={place + 1} id={shebang.id}>
        <div className={color}><strong>{place + 1}</strong></div>
        <div className='timeline-time'><strong>{shebang.rating}</strong> <i className='fa fa-thumbs-up'/></div>
        <div className='timeline-content'>
          <p className='push-bit'>
            <strong>
              <RecallLink name={shebang.name}
                          key={shebang.id}
                          dataId={shebang.id}
                          dataName={shebang.name}
                          address={shebang.address}
                          dataRating={shebang.rating}/>
            </strong>
          </p>
          <small style={hideStyle}>{shebang.address}</small>
          <FirstRecall key={shebang.id}
                       recall={recallList[0]}/>
          <p className='push-bit'>
            <a href='#' onClick={this.handleClick}>
              Показать отзывы
            </a>
          </p>
        </div>
      </li>
    );
  }
}

ShebangItem.propTypes = propTypes;

export default ShebangItem;
