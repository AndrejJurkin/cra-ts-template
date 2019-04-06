import { AnyAction, combineReducers, Reducer } from 'redux';
import apiReducer, { ApiReducerState } from './apiReducer';

export interface AppState {
  api: ApiReducerState;
}

const rootReducer: Reducer<AppState, AnyAction> = combineReducers({
  api: apiReducer,
});

export default rootReducer;
