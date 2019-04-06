import apiReducer from '../apiReducer';
import {
  createSuccessAction,
  createErrorAction,
  createLoadingAction,
  createApiActionSet,
} from 'react-redux-api-middleware';

describe('apiReducer', () => {
  const initialState = {};
  const testActionSet = createApiActionSet('TEST');
  it('has default initial state', () => {
    // @ts-ignore
    expect(apiReducer(undefined, {})).toEqual({});
  });
  it('does not change the state if action does not have actionName prop', () => {
    const mockState = {
      testProperty: 'test_property',
    };

    const testAction = {
      type: 'test_action',
    };
    // @ts-ignore
    expect(apiReducer(mockState, testAction)).toEqual(mockState);
  });
  it('handle SUCCESS action correctly', () => {
    const action = createSuccessAction(testActionSet, {}, {});
    const expectedState = {
      TEST: {
        isLoading: false,
        isLoaded: true,
      },
    };
    expect(apiReducer(initialState, action)).toEqual(expectedState);
  });
  it('handle LOADING action correctly', () => {
    const action = createLoadingAction(testActionSet, {});
    const expectedState = {
      TEST: {
        isLoading: true,
        loadingError: null,
      },
    };
    expect(apiReducer(initialState, action)).toEqual(expectedState);
  });
  it('handle ERROR action correctly', () => {
    const action = createErrorAction(testActionSet, 'test_error', {});
    const expectedState = {
      TEST: {
        isLoading: false,
        loadingError: {
          message: 'test_error',
        },
        isLoaded: false,
      },
    };
    expect(apiReducer(initialState, action)).toEqual(expectedState);
  });
  it('does not change isLoaded flag if loading again', () => {
    const action = createLoadingAction(testActionSet, {});
    const mockState = {
      TEST: {
        isLoading: false,
        isLoaded: true,
      },
    };
    const expectedState = {
      TEST: {
        isLoading: true,
        isLoaded: true,
        loadingError: null,
      },
    };
    expect(apiReducer(mockState, action)).toEqual(expectedState);
  });
  it('resets loading error when loading again', () => {
    const action = createLoadingAction(testActionSet, {});
    const mockState = {
      TEST: {
        isLoading: false,
        isLoaded: false,
        loadingError: {
          message: 'test_error',
        },
      },
    };
    const expectedState = {
      TEST: {
        isLoading: true,
        isLoaded: false,
        loadingError: null,
      },
    };
    expect(apiReducer(mockState, action)).toEqual(expectedState);
  });
});
