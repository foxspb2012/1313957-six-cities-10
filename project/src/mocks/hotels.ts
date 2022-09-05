import type {Hotel} from '../types/hotel';

export const hotels: Hotel[] = [
  {
    bedrooms: 3,
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10
      },
      name: 'Amsterdam',
    },
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    goods: ['Heating'],
    host: {
      avatarUrl: 'img/avatar-angelina.jpg',
      id: 3,
      isPro: true,
      name: 'Angelina'
    },
    id: 1,
    images: ['img/apartment-01.jpg', 'img/apartment-02.jpg', 'img/apartment-03.jpg'],
    isFavorite: true,
    isPremium: false,
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 8
    },
    maxAdults: 4,
    previewImage: 'img/apartment-03.jpg',
    price: 120,
    rating: 4.8,
    title: 'Beautiful & luxurious studio at great location',
    type: 'apartment'
  },
  {
    bedrooms: 2,
    city: {
      location: {
        latitude: 52.270216,
        longitude: 4.795168,
        zoom: 10
      },
      name: 'Amsterdam',
    },
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Gorki.',
    goods: ['Heating'],
    host: {
      avatarUrl: 'img/avatar-max.jpg',
      id: 4,
      isPro: true,
      name: 'Angel'
    },
    id: 2,
    images: ['img/apartment-03.jpg', 'img/apartment-02.jpg'],
    isFavorite: true,
    isPremium: true,
    location: {
      latitude: 52.369553943508,
      longitude: 4.85309666406198,
      zoom: 8
    },
    maxAdults: 6,
    previewImage: 'img/room.jpg',
    price: 220,
    rating: 3.2,
    title: 'Beautiful studio',
    type: 'apartment'
  },
  {
    bedrooms: 3,
    city: {
      location: {
        latitude: 48.5112,
        longitude: 2.2055,
        zoom: 10
      },
      name: 'Paris',
    },
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    goods: ['Heating'],
    host: {
      avatarUrl: 'img/avatar-angelina.jpg',
      id: 3,
      isPro: true,
      name: 'Angelina'
    },
    id: 7,
    images: ['img/apartment-01.jpg', 'img/apartment-02.jpg', 'img/apartment-03.jpg'],
    isFavorite: true,
    isPremium: false,
    location: {
      latitude: 48.51122233,
      longitude: 2.20554432,
      zoom: 8
    },
    maxAdults: 4,
    previewImage: 'img/apartment-03.jpg',
    price: 120,
    rating: 4.8,
    title: 'Beautiful & luxurious studio at great location',
    type: 'apartment'
  }
];

export const sortedHotels = [
  {
    bedrooms: 3,
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10
      },
      name: 'Amsterdam',
    },
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    goods: ['Heating'],
    host: {
      avatarUrl: 'img/avatar-angelina.jpg',
      id: 3,
      isPro: true,
      name: 'Angelina'
    },
    id: 1,
    images: ['img/apartment-01.jpg', 'img/apartment-02.jpg', 'img/apartment-03.jpg'],
    isFavorite: true,
    isPremium: false,
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 8
    },
    maxAdults: 4,
    previewImage: 'img/apartment-03.jpg',
    price: 120,
    rating: 4.8,
    title: 'Beautiful & luxurious studio at great location',
    type: 'apartment'
  },
  {
    bedrooms: 2,
    city: {
      location: {
        latitude: 52.270216,
        longitude: 4.795168,
        zoom: 10
      },
      name: 'Amsterdam',
    },
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Gorki.',
    goods: ['Heating'],
    host: {
      avatarUrl: 'img/avatar-max.jpg',
      id: 4,
      isPro: true,
      name: 'Angel'
    },
    id: 2,
    images: ['img/apartment-03.jpg', 'img/apartment-02.jpg'],
    isFavorite: true,
    isPremium: true,
    location: {
      latitude: 52.369553943508,
      longitude: 4.85309666406198,
      zoom: 8
    },
    maxAdults: 6,
    previewImage: 'img/room.jpg',
    price: 220,
    rating: 3.2,
    title: 'Beautiful studio',
    type: 'apartment'
  }
];
