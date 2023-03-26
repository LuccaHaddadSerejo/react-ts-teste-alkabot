import { useContext } from 'react';
import { PostContext } from '../../providers/postContext';
import { iPost } from '../../providers/postContext/types';
import { UserContext } from '../../providers/userContext';
import { Button } from '../Button';
import { StyledLi } from './style';
import { BiUserPin } from 'react-icons/bi';

const PostCard = ({ title, body, id, userId }: iPost) => {
  const { getPostComments } = useContext(PostContext);
  const { findUser, getUserInfo, userArr } = useContext(UserContext);

  return (
    <StyledLi>
      <div>
        <div>
          <h3>
            {userArr.length > 0 ? findUser(userId)!.name : 'Loading Name'}
          </h3>
          <Button
            onClick={() => getUserInfo(userId)}
            type={'button'}
            buttonVariation={'info'}>
            <span>{<BiUserPin size={20} />}</span>
          </Button>
        </div>
        <div>
          <h4>{title}</h4>
          <p>{body}</p>
        </div>
      </div>
      <Button
        onClick={() => getPostComments(id)}
        type={'button'}
        buttonVariation={'comment'}>
        Ver comentários
      </Button>
    </StyledLi>
  );
};

export default PostCard;
