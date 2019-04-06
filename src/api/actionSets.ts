import { createApiActionSet } from 'react-redux-api-middleware';

export interface ApiActionSet {
  SUCCESS: string;
  ERROR: string;
  LOADING: string;
}

export const LOGIN: ApiActionSet = createApiActionSet('LOGIN');
