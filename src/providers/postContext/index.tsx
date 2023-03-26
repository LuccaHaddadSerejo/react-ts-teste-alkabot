import { createContext, useState } from 'react';
import { api } from '../../services/api';
import {
  tCommentArr,
  iPost,
  iPostProviderProps,
  iPostProviderValue,
  tPostArr,
} from './types';

const PostContext = createContext({} as iPostProviderValue);

const PostProvider = ({ children }: iPostProviderProps) => {
  const [globalLoading, setGlobalLoading] = useState(false);
  const [post, setPost] = useState<null | iPost>(null);
  const [postArr, setPostArr] = useState<tPostArr>([]);
  const [postComments, setPostComments] = useState<tCommentArr>([]);
  const [openCommentModal, setOpenCommentModal] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const getPostComments = async (postId: number): Promise<void> => {
    try {
      setGlobalLoading(true);
      setOpenCommentModal(true);
      const res = await api.get<tCommentArr>(`/posts/${postId}/comments`);
      setPostComments(() => [...res.data]);
    } catch (error) {
      console.error(error);
    } finally {
      setGlobalLoading(false);
    }
  };

  const commentModalHandler = (): void => {
    setIsClosing(true);
    setTimeout(() => {
      setOpenCommentModal(false);
      setIsClosing(false);
    }, 600);
  };

  return (
    <PostContext.Provider
      value={{
        post,
        globalLoading,
        postArr,
        setPostArr,
        setGlobalLoading,
        getPostComments,
        postComments,
        commentModalHandler,
        openCommentModal,
        isClosing,
      }}>
      {children}
    </PostContext.Provider>
  );
};

export { PostContext, PostProvider };
