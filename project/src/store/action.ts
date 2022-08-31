import type {Hotel} from '../types/hotel';
import type {UserData} from '../types/user-data';
import type {Comment} from '../types/comment';
import {AuthorizationStatus} from '../const';
import {createAction} from '@reduxjs/toolkit';

export const changeCity = createAction('main/changeCity', (city, hotels) => ({payload: {city, hotels}}));
export const hoverOnCard = createAction('main/hoverCard', (id) => ({payload: id}));
export const clickSortMenuAction = createAction('sort/clickSortMenuAction');
export const changeSortTypeAction = createAction('sort/changeSortTypeAction', (sortOption) => ({payload: {sortOption}}));
export const loadHotelsAction = createAction<Hotel[]>('data/loadHotelsAction');
export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');
export const setDataLoadedStatus = createAction<boolean>('data/setDataLoadedStatus');
export const redirectToRoute = createAction('main/redirectToRoute', (value) => ({payload: value}));
export const setUser = createAction<{user: UserData | null}>('app/setUser');
export const setDataLoadingError = createAction<boolean>('hotel/setDataLoadingError');
export const setHotelAction = createAction<Hotel>('setOffer');
export const setNearHotelAction = createAction<Hotel[]>('nearOffer');
export const setReviewAction = createAction<Comment[]>('reviews');
