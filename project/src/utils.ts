import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
export const calculateRating = (rating:number) => (`${(rating * 100 / 5).toString()}%`) as string;
export const calculateRatingRound = (rating:number) => (`${(Math.round(rating) * 100 / 5).toString()}%`) as string;

