import {HOMEPAGE_ACTIONS} from './actions';
import moment from 'moment';

const initialState = {
  shebangList: [
    {
      id: 1,
      address: '',
      name: 'KFC',
      rating: 2
    },
    {
      id: 2,
      address: '',
      name: 'MacDonalds',
      rating: 1
    },
    {
      id: 3,
      address: '',
      name: 'Other shebang',
      rating: 1
    }
  ],
  recallList: [
    {
      id: 1,
      text: 'Cool id 1 text',
      recallSign: 1,
      visitDate: moment('12.06.2017', 'YYYY MM DD').format('YYYY MM DD'),
      shebangId: 1
    },
    {
      id: 2,
      text: 'Cool id 2 text',
      recallSign: -1,
      visitDate: moment('12.06.2017', 'YYYY MM DD').format('YYYY MM DD'),
      shebangId: 2
    },
    {
      id: 3,
      text: 'Cool id 3 text',
      recallSign: 1,
      visitDate: moment('12.05.2017', 'YYYY MM DD').format('YYYY MM DD'),
      shebangId: 1
    },
    {
      id: 4,
      text: 'Cool id 4 text',
      recallSign: 1,
      visitDate: moment('12.05.2017', 'YYYY MM DD').format('YYYY MM DD'),
      shebangId: 3
    }
  ],
  limit: 1,
  addShebangForm: {
    name: '',
    address: '',
    rating: 0
  },
  addRecallForm: {
    text: '',
    recallSign: 0,
    visitDate: moment({}).format('YYYY MM DD'),
    shebangId: null
  }
};

export default function homepageState(_state_ = initialState, action) {
  let state = Object.assign({}, _state_), payload = action.payload;

  switch (action.type) {
    case HOMEPAGE_ACTIONS.CREATE_RECALL:
      state.shebangList.push(...payload);
      return state;

    default:
      return state;
  }
}
