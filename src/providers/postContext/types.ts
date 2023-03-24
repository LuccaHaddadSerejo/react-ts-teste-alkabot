import { SetStateAction } from 'react';

interface iPostProviderProps {
  children: React.ReactNode;
}

interface iPostProviderValue {
  globalLoading: boolean;
  openCommentModal: boolean;
  post: iPost | null;
  postArr: tPostArr;
  postComments: tCommentArr;
  setPostArr: React.Dispatch<SetStateAction<tPostArr>>;
  setGlobalLoading: React.Dispatch<SetStateAction<boolean>>;
  getPostComments: (postId: number) => Promise<void>;
  commentModalHandler: () => void;
}

interface iPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface iComment {
  postId?: number;
  id?: number;
  name: string;
  email: string;
  body: string;
}

type tCommentArr = iComment[];
type tPostArr = iPost[];

export type {
  iPostProviderProps,
  iPost,
  iComment,
  tPostArr,
  iPostProviderValue,
  tCommentArr,
};
