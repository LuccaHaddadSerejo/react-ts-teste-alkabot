import { iComment } from '../../providers/postContext/types';

const CommentCard = ({ name, email, body }: iComment) => {
  return (
    <li>
      <h3>{name}</h3>
      <h4>{email}</h4>
      <p>{body}</p>
    </li>
  );
};

export default CommentCard;
