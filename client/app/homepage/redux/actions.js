export const HOMEPAGE_ACTIONS = {
  CREATE_RECALL: 'APP_ACTIONS_CREATE_RECALL'
};

export function appActionsCreateRecall(recall) {
  return (dispatch) => {
    dispatch({
      type: HOMEPAGE_ACTIONS.CREATE_RECALL,
      payload: {recall}
    });
  };
}

