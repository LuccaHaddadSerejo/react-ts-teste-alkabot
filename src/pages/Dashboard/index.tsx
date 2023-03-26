import { useContext, useEffect } from 'react';
import { PostContext } from '../../providers/postContext';
import { tPostArr } from '../../providers/postContext/types';
import { api } from '../../services/api';
import PostCard from '../../components/PostCard';
import CommentModal from '../../components/CommentModal';
import { UserContext } from '../../providers/userContext';
import UserInfoModal from '../../components/UserInfoModal';
import Header from '../../components/Header';
import { StyledMain } from './style';
import { BsFillArrowUpCircleFill } from 'react-icons/bs';
import { Button } from '../../components/Button';

const Dashboard = () => {
  const { setGlobalLoading, setPostArr, postArr, openCommentModal } =
    useContext(PostContext);
  const { openUserModal } = useContext(UserContext);

  const scrollToTop = (): void => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

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
      <Header />
      <StyledMain>
        <div>
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
          <Button
            type={'button'}
            buttonVariation={'scrollTop'}
            onClick={() => scrollToTop()}>
            <span>
              <BsFillArrowUpCircleFill />
            </span>
          </Button>
        </div>
      </StyledMain>
      {openCommentModal && <CommentModal />}
      {openUserModal && <UserInfoModal />}
    </>
  );
};

export default Dashboard;
