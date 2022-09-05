import {hotelsData, selectCityAction, setOffersByCityAction, sortingCityAction, sortValueAction} from './hotels-data';
import {HotelData} from '../../types/state';
import {Cities, DEFAULT_CITY, DEFAULT_SORT_VALUE, SortOptions} from '../../const';
import {hotels, sortedHotels} from '../../mocks/hotels';
import {
  addCommentAction,
  changeFavoriteStatusAction,
  getFavoriteHotelsAction,
  getHotelsAction,
  fetchNearOfferAction,
  fetchOfferAction,
  fetchReviewsAction
} from '../api-action';
import {comments} from '../../mocks/comments';

describe('Reducer: hotels-data', () => {
  let state: HotelData;

  beforeEach(() => {
    state = {
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
  });
  it('without additional parameters should return initial state', () => {
    expect(hotelsData.reducer(undefined, {type: 'UNKNOWN_ACTION'}))
      .toEqual(state);
  });

  it('should set a selected city', () => {
    expect(hotelsData.reducer(state, {type: selectCityAction.type, payload: 'Paris'}))
      .toEqual({...state, city: 'Paris'});
  });

  it('should set hotels by city', () => {
    state = {
      ...state,
      hotels: hotels
    };
    const hotelsByCity = hotels.slice(-1);
    expect(hotelsData.reducer(state, {type: setOffersByCityAction.type}))
      .toEqual({...state, hotelsByCity: hotelsByCity});
  });

  it('should set sort value city', () => {
    expect(hotelsData.reducer(state, {type: sortValueAction.type, payload: 'Popular'}))
      .toEqual({...state, sortValue: 'Popular'});
  });

  it('should sort offers by city', () => {
    state = {
      ...state,
      hotels: hotels,
      city: Cities[3],
      sortValue: SortOptions.PRICE_LOW_TO_HIGH,
    };
    expect(hotelsData.reducer(state, {type: sortingCityAction.type}))
      .toEqual({...state, hotelsByCity: sortedHotels});
  });

  describe('fetchHotelsAction test', () => {
    it('should add hotels to state, change downloading status to true', () => {
      expect(hotelsData.reducer(state, {type: getHotelsAction.pending.type}))
        .toEqual({...state, isDataLoaded: true});
    });

    it('should add hotels to state, change downloading status to false', () => {
      state = {
        ...state,
        hotels: hotels,
      };
      const hotelsByCity = hotels.slice(-1);
      expect(hotelsData.reducer(state, {type: getHotelsAction.fulfilled.type, payload: hotels}))
        .toEqual({...state, hotelsByCity: hotelsByCity, isDataLoaded: false});
    });
  });

  describe('fetchOfferAction test', () => {
    it('should add hotels to state, change downloading status to true', () => {
      expect(hotelsData.reducer(state, {type: fetchOfferAction.fulfilled.type, payload: hotels[0]}))
        .toEqual({...state, hotel: hotels[0], isLoadingError: false});
    });

    it('should add hotels to state, change downloading status to false', () => {
      expect(hotelsData.reducer(state, {type: fetchOfferAction.rejected.type}))
        .toEqual({...state, isLoadingError: true});
    });
  });

  describe('fetchNearOfferAction test', () => {
    it('should add near offers to state, change downloading status to true', () => {
      expect(hotelsData.reducer(state, {type: fetchNearOfferAction.fulfilled.type, payload: hotels}))
        .toEqual({...state, nearOffers: hotels});
    });
  });

  describe('fetchReviewsAction test', () => {
    it('should add review to state, change downloading status to true', () => {
      expect(hotelsData.reducer(state, {type: fetchReviewsAction.fulfilled.type, payload: comments}))
        .toEqual({...state, comments: comments});
    });
  });

  describe('addCommentAction test', () => {
    it('should add comment to state, change downloading status to true', () => {
      expect(hotelsData.reducer(state, {type: addCommentAction.fulfilled.type, payload: comments}))
        .toEqual({...state, comments: comments});
    });
  });

  describe('getFavoriteHotelsAction test', () => {
    it('should add favorites offers to state, change downloading status to true', () => {
      expect(hotelsData.reducer(state, {type: getFavoriteHotelsAction.pending.type}))
        .toEqual({...state, reloadFavorites: true});
    });

    it('should add favorites offers to state, change downloading status to false', () => {
      expect(hotelsData.reducer(state, {type: getFavoriteHotelsAction.fulfilled.type, payload: hotels}))
        .toEqual({...state, favoriteHotels: hotels, reloadFavorites: false});
    });

    it('should add favorites offers to state', () => {
      expect(hotelsData.reducer(state, {type: getFavoriteHotelsAction.rejected.type}))
        .toEqual({...state, reloadFavorites: false});
    });
  });

  describe('changeFavoriteStatusAction test', () => {
    it('should change favorites offers', () => {
      state = {
        ...state,
        favoriteHotels: hotels
      };
      const favoritesOffers = hotels.slice(1);
      const hotel = {
        ...hotels[0],
        isFavorite: false
      };
      expect(hotelsData.reducer(state, {type: changeFavoriteStatusAction.fulfilled.type, payload: hotel}))
        .toEqual({...state, favoriteHotels: favoritesOffers, hotel});
    });
  });
});
