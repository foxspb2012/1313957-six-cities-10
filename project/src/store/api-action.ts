import type {Hotel} from '../types/hotel';
import type {UserData} from '../types/user-data';
import type {AuthData} from '../types/auth';
import type {Comment} from '../types/comment';
import type {ReviewPostData} from '../types/review';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {AxiosInstance} from 'axios';
import {APIRoute, AppRoute, AuthorizationStatus} from '../const';
import {
  loadHotelsAction, setDataLoadedStatus, redirectToRoute, requireAuthorization, setUser,
  setDataLoadingError, setNearHotelAction, setHotelAction, setReviewAction,
} from './action';
import {AppDispatch, State} from '../types/state';
import {dropToken, saveToken} from '../services/token';

export const getHotelsAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/loadHotelsAction',
  async (_arg, {dispatch, extra: api}) => {
    dispatch(setDataLoadedStatus(true));
    const {data} = await api.get<Hotel[]>(APIRoute.Hotels);
    dispatch(loadHotelsAction(data));
    dispatch(setDataLoadedStatus(false));
  },
);

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'user/checkAuth',
  async (_arg, {dispatch, extra: api}) => {
    try {
      const { data } = await api.get(APIRoute.Login);
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
      dispatch(setUser({user: data}));
    } catch {
      dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  },
);

export const loginAction = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'user/login',
  async ({login: email, password}, {dispatch, extra: api}) => {
    const {data} = await api.post<UserData>(APIRoute.Login, {email, password});
    saveToken(data.token);
    dispatch(setUser({user: data}));
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
    dispatch(redirectToRoute(AppRoute.Main));
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'user/logout',
  async (_arg, {dispatch, extra: api}) => {
    await api.delete(APIRoute.Logout);
    dropToken();
    dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
  },
);

export const fetchOfferAction = createAsyncThunk<void, string, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchOffer',
  async (id, {dispatch, extra: api}) => {
    try {
      const { data } = await api.get<Hotel>(`/hotels/${id}`);
      dispatch(setDataLoadingError(false));
      dispatch(setHotelAction(data));
    } catch {
      dispatch(setDataLoadingError(true));
    }
  }
);

export const fetchNearOfferAction = createAsyncThunk<void, string, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchOffer',
  async (id, {dispatch, extra: api}) => {
    const {data} = await api.get<Hotel[]>(`/hotels/${id}/nearby`);
    dispatch(setNearHotelAction(data));
  }
);

export const fetchReviewsAction = createAsyncThunk<void, string, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchOffer',
  async (id, {dispatch, extra: api}) => {
    const {data} = await api.get<Comment[]>(`/comments/${id}`);
    dispatch(setReviewAction(data));
  }
);

export const addCommentAction = createAsyncThunk<void, ReviewPostData, {
  dispatch: AppDispatch, state: State, extra: AxiosInstance
}>(
  'addComment',
  async ({offerId, commentData}, {dispatch, extra: api}) => {
    const { data } = await api.post<Comment[]>(`${APIRoute.Comment}${offerId}`, commentData);
    dispatch(setReviewAction(data));
  },
);
