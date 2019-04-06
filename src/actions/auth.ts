export const INIT_AUTH_STATE = 'INIT_AUTH_STATE';

export const LOG_OUT = 'LOG_OUT';

export const initAuthState = () => ({
  type: INIT_AUTH_STATE,
});

export const logOut = () => ({
  type: LOG_OUT,
});
