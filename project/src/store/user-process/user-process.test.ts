import {AuthorizationStatus} from '../../const';
import {UserProcess} from '../../types/state';
import {checkAuthAction, loginAction, logoutAction} from '../api-action';
import {userProcess} from './user-process';

describe('Reducer: user-process', () => {
  const mockUser = {
    id: 1,
    isPro: false,
    name: 'test user',
    avatarUrl: '',
    email: '',
    token: ''
  };
  let state: UserProcess;

  beforeEach(() => {
    state = {
      authorizationStatus: AuthorizationStatus.Unknown,
      user: null
    };
  });

  it('without additional parameters should return initial state', () => {
    expect(userProcess.reducer(undefined, {type: 'UNKNOWN_ACTION'}))
      .toEqual({authorizationStatus: AuthorizationStatus.Unknown, user: null});
  });

  describe('checkAuthAction test', () => {
    it('should update authorizationStatus to "AUTH" and user data if checkAuthAction fulfilled', () => {
      expect(userProcess.reducer(state, {type: checkAuthAction.fulfilled.type, payload: mockUser}))
        .toEqual({authorizationStatus: AuthorizationStatus.Auth, user: mockUser});
    });
    it('should update authorizationStatus to "NO_AUTH" if checkAuthAction rejected', () => {
      expect(userProcess.reducer(state, {type: checkAuthAction.rejected.type}))
        .toEqual({...state, authorizationStatus: AuthorizationStatus.NoAuth});
    });
  });

  describe('loginAction test', () => {
    it('should update authorizationStatus to "AUTH" and user data if loginAction fulfilled', () => {
      expect(userProcess.reducer(state, {type: loginAction.fulfilled.type, payload: mockUser}))
        .toEqual({authorizationStatus: AuthorizationStatus.Auth, user: mockUser});
    });
    it('should update authorizationStatus to "NO_AUTH" if loginAction rejected', () => {
      expect(userProcess.reducer(state, {type: loginAction.rejected.type}))
        .toEqual({...state, authorizationStatus: AuthorizationStatus.NoAuth});
    });
  });

  describe('logoutAction test', () => {
    it('should update authorizationStatus to "NO_AUTH" if logoutAction fulfilled', () => {
      expect(userProcess.reducer(state, {type: logoutAction.fulfilled.type}))
        .toEqual({...state, authorizationStatus: AuthorizationStatus.NoAuth});
    });
  });
});
