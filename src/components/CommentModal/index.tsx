import { useContext } from 'react';
import { PostContext } from '../../providers/postContext';
import CommentCard from '../CommentCard';
const CommentModal = () => {
  const { postComments, commentModalHandler } = useContext(PostContext);

  return (
    <div>
      <div>
        <header>
          <h2>Comentários:</h2>
          <button onClick={() => commentModalHandler()}>X</button>
        </header>
        <div>
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
        </div>
      </div>
    </div>
  );
};

export default CommentModal;
