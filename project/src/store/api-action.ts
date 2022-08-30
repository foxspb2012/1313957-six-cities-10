import type {Hotel} from '../types/hotel';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {AxiosInstance} from 'axios';
import {APIRoute} from '../const';
import {loadHotelsAction, setDataLoadedStatus} from './action';
import {AppDispatch, State} from '../types/state';

export const getHotelsAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/loadHotelsAction',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<Hotel[]>(APIRoute.Hotels);
    dispatch(setDataLoadedStatus(true));
    dispatch(loadHotelsAction(data));
    dispatch(setDataLoadedStatus(false));
  },
);
