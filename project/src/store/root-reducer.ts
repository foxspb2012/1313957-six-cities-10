import {combineReducers} from '@reduxjs/toolkit';
import {NameSpace} from '../const';
import {hotelsData} from './hotels-data/hotels-data';
import {offersProcess} from './offers-process/offers-process';
import {userProcess} from './user-process/user-process';

export const rootReducer = combineReducers({
  [NameSpace.Data]: hotelsData.reducer,
  [NameSpace.Offers]: offersProcess.reducer,
  [NameSpace.User]: userProcess.reducer,
});
