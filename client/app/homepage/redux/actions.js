import moment from 'moment';

export const HOMEPAGE_ACTIONS = {
  CREATE_RECALL: 'APP_ACTIONS_CREATE_RECALL',
  CREATE_SHEBANG: 'APP_ACTIONS_CREATE_SHEBANG'
};

export function appActionsCreateRecall(recall) {
  return (dispatch) => {
    dispatch({
      type: HOMEPAGE_ACTIONS.CREATE_RECALL,
      payload: {recall}
    });
  };
}

export function getAppInitialData() {
  return (dispatch) => {
  }
}

export function appActionsCreateShebang(shebangModel) {
  return (dispatch) => {
    let shebangToState = Object.assign({}, shebangModel);
    shebangToState.visitDate = moment({}).format('YYYY MM DD');
    dispatch({
      type: HOMEPAGE_ACTIONS.CREATE_SHEBANG,
      payload: shebangToState
    });
  };
}

