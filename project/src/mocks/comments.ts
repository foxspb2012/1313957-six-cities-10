import {Comment} from '../types/comment';

export const comments: Comment[] = [
  {
    id: 1,
    user: {
      id: 18,
      isPro: true,
      name: 'Sophie',
      avatarUrl: 'https://10.react.pages.academy/static/avatar/9.jpg'
    },
    rating: 5,
    comment: 'Home is amazing. It`s like staying in a museum. The rooms, furnishings and artworks are incredible. The views of My Vesuvius',
    date: '2022-06-06T12:25:36.939Z'
  },
  {
    id: 2,
    user: {
      id: 16,
      isPro: true,
      name: 'Mollie',
      avatarUrl: 'https://10.react.pages.academy/static/avatar/7.jpg'
    },
    rating: 4,
    comment: 'The house is very good, very happy, hygienic and simple living conditions around it are also very good. I hope to have the opportunity to come back. Thank you.',
    date: '2022-06-06T12:25:36.939Z'
  },
  {
    id: 3,
    user: {
      id: 18,
      isPro: true,
      name: 'Sophie',
      avatarUrl: 'https://10.react.pages.academy/static/avatar/9.jpg'
    },
    rating: 2,
    comment: 'The room was spacious and clean. The pool looked nothing like the photos and desparately needs a clean. The sauna and spa were closed for lunar new year holiday.',
    date: '2022-06-06T12:25:36.939Z'
  }
];
