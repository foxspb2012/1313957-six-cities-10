export type ReviewData = {
  comment: string;
  rating: number;
}

export type ReviewPostData = {
  offerId: string;
  commentData: ReviewData
}
