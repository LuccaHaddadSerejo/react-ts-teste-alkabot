import { useContext, useEffect } from 'react';
import { PostContext } from '../../providers/postContext';
import { tPostArr } from '../../providers/postContext/types';
import { api } from '../../services/api';
import PostCard from '../../components/PostCard';
import CommentModal from '../../components/CommentModal';
import { UserContext } from '../../providers/userContext';
import UserInfoModal from '../../components/UserInfoModal';

const Dashboard = () => {
  const { setGlobalLoading, setPostArr, postArr, openCommentModal } =
    useContext(PostContext);
  const { openUserModal } = useContext(UserContext);

  useEffect(() => {
    (async () => {
      try {
        setGlobalLoading(true);
        const res = await api.get<tPostArr>('posts');
        setPostArr(() => res.data);
      } catch (error) {
        console.error(error);
      } finally {
        setGlobalLoading(false);
      }
    })();
  }, []);

  return (
    <>
      <section>
        <ul>
          {postArr.map((post) => {
            return (
              <PostCard
                key={post.id}
                userId={post.userId}
                id={post.id}
                title={post.title}
                body={post.body}
              />
            );
          })}
        </ul>
      </section>
      {openCommentModal && <CommentModal />}
      {openUserModal && <UserInfoModal />}
    </>
  );
};

export default Dashboard;
