import { useContext } from 'react';
import { PostContext } from '../../providers/postContext';
import { Button } from '../Button';
import CommentCard from '../CommentCard';
import { StyledModalBox, StyledModalWrapper } from './style';
const CommentModal = () => {
  const { postComments, commentModalHandler, isClosing } =
    useContext(PostContext);

  return (
    <StyledModalWrapper>
      <StyledModalBox isClosing={isClosing}>
        <div>
          <h2>Comentários:</h2>
          <Button
            onClick={() => commentModalHandler()}
            type={'button'}
            buttonVariation={'closeModal'}>
            X
          </Button>
        </div>
        <ul>
          {postComments.map((comment) => {
            return (
              <CommentCard
                key={comment.id}
                name={comment.name}
                email={comment.email}
                body={comment.body}
              />
            );
          })}
        </ul>
      </StyledModalBox>
    </StyledModalWrapper>
  );
};

export default CommentModal;
function useState(arg0: boolean): [any, any] {
  throw new Error('Function not implemented.');
}
