import type {Comment} from '../../types/comment';
import Comments from '../comments/comments';

type ReviewProps = {
  comments: Comment[];
}

function CommentsList(props: ReviewProps): JSX.Element {

  const {comments} = props;

  const commentsList = () => comments.map((comment) => (
    <Comments key={comment.id} comment={comment}/>
  ));

  return (
    <ul className="reviews__list">
      {
        commentsList()
      }
    </ul>
  );
}

export default CommentsList;
