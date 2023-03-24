import { useContext } from 'react';
import { PostContext } from '../../providers/postContext';
import { iPost } from '../../providers/postContext/types';
import { UserContext } from '../../providers/userContext';
import { Button } from '../Button';

const PostCard = ({ title, body, id, userId }: iPost) => {
  const { getPostComments } = useContext(PostContext);
  const { findUser, getUserInfo } = useContext(UserContext);

  const foundUser = findUser(userId);

  return (
    <li>
      <div>
        <h3>{foundUser!.name}</h3>
        <Button onClick={() => getUserInfo(userId)} type={'button'}>
          Informações
        </Button>
      </div>
      <div>
        <h4>{title}</h4>
        <p>{body}</p>
        <Button onClick={() => getPostComments(id)} type={'button'}>
          Ver comentários deste post
        </Button>
      </div>
    </li>
  );
};

export default PostCard;
