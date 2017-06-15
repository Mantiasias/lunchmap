import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import main from './component/main/reducer';
import homepageState from './app/homepage/redux/reducer';
import {combineForms} from 'react-redux-form';

export default function store(initialState) {
  const reducers = combineReducers({
    main,
    homepageState,
    forms: combineForms(
      {
        shebangAddForm: homepageState.shebangAddForm,
        addRecallForm: homepageState.addRecallForm
      }, 'forms')
  });
  return createStore(
    reducers,
    initialState,
    applyMiddleware(thunk)
  );
}
