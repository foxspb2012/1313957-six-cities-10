import {createAction} from '@reduxjs/toolkit';

export const getHotels = createAction('main/getHotels');
export const changeCity = createAction('main/changeCity', (city) => ({payload: city}));
