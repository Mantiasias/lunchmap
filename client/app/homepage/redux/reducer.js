import {HOMEPAGE_ACTIONS} from './actions';
import moment from 'moment';

const initialState = {
  shebangList: [
  ],
  recallList: [
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
    case HOMEPAGE_ACTIONS.CREATE_SHEBANG:
      state.shebangList = [...state.shebangList, payload];
      return state;
    default:
      return state;
  }
}
