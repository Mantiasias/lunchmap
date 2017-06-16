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

export function appActionsCreateShebang(shebangModel) {
  return (dispatch) => {
    console.log('dispathc!!!');
    console.log(shebangModel);
    dispatch({
      type: HOMEPAGE_ACTIONS.CREATE_SHEBANG,
      payload: shebangModel
    });
  };
}

