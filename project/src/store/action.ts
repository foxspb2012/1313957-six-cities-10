import {createAction} from '@reduxjs/toolkit';

export const changeCity = createAction('main/changeCity', (city, hotels) => ({payload: {city, hotels}}));
export const hoverOnCard = createAction('main/hoverCard', (id) => ({payload: id}));
export const clickSortMenuAction = createAction('sort/clickSortMenuAction');
export const changeSortTypeAction = createAction('sort/changeSortTypeAction', (sortOption) => ({payload: {sortOption}}));
