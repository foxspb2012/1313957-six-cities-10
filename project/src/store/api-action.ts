import type {Hotel} from '../types/hotel';
import type {UserData} from '../types/user-data';
import type {AuthData} from '../types/auth';
import type {Comment} from '../types/comment';
import type {ReviewPostData} from '../types/review';
import type {FavoriteStatus} from '../types/favorite';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {AxiosInstance} from 'axios';
import {APIRoute, AppRoute} from '../const';
import {redirectToRoute} from './action';
import {AppDispatch, State} from '../types/state';
import {dropToken, saveToken} from '../services/token';

export const getHotelsAction = createAsyncThunk<Hotel[], undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/loadHotelsAction',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<Hotel[]>(APIRoute.Hotels);
    return data;
  },
);

export const checkAuthAction = createAsyncThunk<UserData, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'user/checkAuth',
  async (_arg, {extra: api}) => {
    const {data} = await api.get(APIRoute.Login);
    return data;
  },
);

export const loginAction = createAsyncThunk<UserData, AuthData, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'user/login',
  async ({login: email, password}, {dispatch, extra: api}) => {
    const {data} = await api.post<UserData>(APIRoute.Login, {email, password});
    saveToken(data.token);
    dispatch(redirectToRoute(AppRoute.Main));
    return data;
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'user/logout',
  async (_arg, {extra: api}) => {
    await api.delete(APIRoute.Logout);
    dropToken();
  },
);

export const fetchOfferAction = createAsyncThunk<Hotel, string, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchOffer',
  async (id, {extra: api}) => {
    const {data} = await api.get<Hotel>(`/hotels/${id}`);
    return data;
  }
);

export const fetchNearOfferAction = createAsyncThunk<Hotel[], string, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchNearOffer',
  async (id, {extra: api}) => {
    const {data} = await api.get<Hotel[]>(`/hotels/${id}/nearby`);
    return data;
  }
);

export const fetchReviewsAction = createAsyncThunk<Comment[], string, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchComment',
  async (id, {extra: api}) => {
    const {data} = await api.get<Comment[]>(`/comments/${id}`);
    return data;
  }
);

export const addCommentAction = createAsyncThunk<Comment[], ReviewPostData, {
  dispatch: AppDispatch, state: State, extra: AxiosInstance
}>(
  'addComment',
  async ({offerId, commentData}, {extra: api}) => {
    const {data} = await api.post<Comment[]>(`${APIRoute.Comment}${offerId}`, commentData);
    return data;
  },
);

export const getFavoriteHotelsAction = createAsyncThunk<Hotel[], undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance,
}>(
  'data/getFavoriteHotels',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<Hotel[]>(`${APIRoute.Favorites}`);
    return data;
  }
);

export const changeFavoriteStatusAction = createAsyncThunk<Hotel, FavoriteStatus, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance,
}>(
  'data/changeFavoriteStatus',
  async ({id, status}, {extra: api}) => {
    const {data} = await api.post<Hotel>(`${APIRoute.Favorites}${id}/${status}`);
    return data;
  },
);
