import {UserType} from './user';

export type ReviewType = {
  id: number,
  user: UserType,
  rating: number,
  comment: string,
  date: string,
}
