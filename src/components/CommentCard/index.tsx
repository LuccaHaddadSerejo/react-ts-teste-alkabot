import { iComment } from '../../providers/postContext/types';
import { StyledLi } from './style';

const CommentCard = ({ name, email, body }: iComment) => {
  return (
    <StyledLi>
      <h3>{name}</h3>
      <span>{email}</span>
      <p>{body}</p>
    </StyledLi>
  );
};

export default CommentCard;
