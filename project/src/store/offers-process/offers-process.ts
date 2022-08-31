import {createSlice} from '@reduxjs/toolkit';
import {NameSpace} from '../../const';
import {OffersProcess} from '../../types/state';

export const initialState: OffersProcess = {
  hoverCityId: null,
};

export const offersProcess = createSlice({
  name: NameSpace.Offers,
  initialState,
  reducers: {
    setHoverCityIdAction: (state, action) => {
      state.hoverCityId = action.payload;
    },
  }
});

export const {setHoverCityIdAction} = offersProcess.actions;
