import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import main from './component/main/reducer';
import homepageState from './app/homepage/redux/reducer';

export default function store(initialState) {
  return createStore(
    combineReducers({
      main,
      homepageState
    }),
    initialState,
    applyMiddleware(thunk)
  );
}
