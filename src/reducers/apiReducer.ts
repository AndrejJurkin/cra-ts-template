import { StringMap } from '../types';
import Loadable from '../types/Loadable';
import { AnyAction } from 'redux';
import { apiActionType } from 'react-redux-api-middleware';

export type ApiReducerState = StringMap<Loadable>;

function apiReducer(
  state: ApiReducerState = {},
  action: AnyAction,
): ApiReducerState {
  if (!action.actionName) {
    return state;
  }

  let stateChanges = {};

  switch (action.apiActionType) {
    case apiActionType.SUCCESS: {
      stateChanges = {
        ...stateChanges,
        isLoading: false,
        isLoaded: true,
      };
      break;
    }
    case apiActionType.ERROR: {
      stateChanges = {
        ...stateChanges,
        isLoading: false,
        loadingError: {
          message: action.error,
        },
        isLoaded: false,
      };
      break;
    }
    case apiActionType.LOADING: {
      stateChanges = {
        ...stateChanges,
        isLoading: true,
        loadingError: null,
      };
      break;
    }
  }

  return {
    ...state,
    [action.actionName]: {
      ...state[action.actionName],
      ...stateChanges,
    },
  };
}

export default apiReducer;
