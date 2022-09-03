import {createSlice} from '@reduxjs/toolkit';
import {DEFAULT_CITY, DEFAULT_SORT_VALUE, NameSpace} from '../../const';
import {HotelData} from '../../types/state';
import {getHotelsByCity, getSortedHotels} from '../../utils';
import {
  addCommentAction,
  changeFavoriteStatusAction,
  getFavoriteHotelsAction,
  getHotelsAction,
  fetchNearOfferAction,
  fetchOfferAction,
  fetchReviewsAction
} from '../api-action';

export const initialState: HotelData = {
  city: DEFAULT_CITY,
  sortValue: DEFAULT_SORT_VALUE,
  hotels: [],
  hotelsByCity: [],
  isDataLoaded: false,
  hotel: null,
  nearOffers: [],
  comments: [],
  favoriteHotels: [],
  isLoadingError: false,
  reloadFavorites: false
};

export const hotelsData = createSlice({
  name: NameSpace.User,
  initialState,
  reducers: {
    selectCityAction: (state, action) => {
      state.city = action.payload;
    },
    setOffersByCityAction: (state) => {
      state.hotelsByCity = getHotelsByCity(state.hotels, state.city);
    },
    sortValueAction: (state, action) => {
      state.sortValue = action.payload;
    },
    sortingCityAction: (state) => {
      state.hotelsByCity = getSortedHotels(getHotelsByCity(state.hotels, state.city), state.sortValue);
    },
    clearFavoriteOffers: (state) => {
      state.favoriteHotels = [];
    }
  },
  extraReducers(builder) {
    builder
      .addCase(getHotelsAction.pending, (state) => {
        state.isDataLoaded = true;
      })
      .addCase(getHotelsAction.fulfilled, (state, action) => {
        state.hotels = action.payload;
        state.hotelsByCity = getHotelsByCity(state.hotels, state.city);
        state.isDataLoaded = false;
      })
      .addCase(fetchOfferAction.fulfilled, (state, action) => {
        state.hotel = action.payload;
        state.isLoadingError = false;
      })
      .addCase(fetchOfferAction.rejected, (state) => {
        state.isLoadingError = true;
      })
      .addCase(fetchNearOfferAction.fulfilled, (state, action) => {
        state.nearOffers = action.payload;
      })
      .addCase(fetchReviewsAction.fulfilled, (state, action) => {
        state.comments = action.payload;
      })
      .addCase(addCommentAction.fulfilled, (state, action) => {
        state.comments = action.payload;
      })
      .addCase(getFavoriteHotelsAction.fulfilled, (state, action) => {
        state.favoriteHotels = action.payload;
        state.reloadFavorites = false;
      })
      .addCase(getFavoriteHotelsAction.rejected, (state) => {
        state.reloadFavorites = false;
      })
      .addCase(getFavoriteHotelsAction.pending, (state) => {
        state.reloadFavorites = true;
      })
      .addCase(changeFavoriteStatusAction.fulfilled, (state, action) => {
        if (!action.payload.isFavorite) {
          state.favoriteHotels = state.favoriteHotels.filter(({id}) => id !== action.payload.id);
        } else {
          state.favoriteHotels = [...state.favoriteHotels, action.payload];
        }
        state.hotels = state.hotels.map((hotel) => hotel.id === action.payload.id ? {
          ...hotel,
          isFavorite: action.payload.isFavorite
        } : hotel);
        state.hotelsByCity = getHotelsByCity(state.hotels, state.city);
        state.hotel = action.payload;
      });
  }
});

export const {selectCityAction, setOffersByCityAction, sortValueAction, sortingCityAction} = hotelsData.actions;
