import { createContext, useEffect, useState } from 'react';
import { api } from '../../services/api';
import {
  iUser,
  iUserProviderProps,
  tUserArr,
  iUserProviderValue,
} from './types';

const UserContext = createContext({} as iUserProviderValue);

const UserProvider = ({ children }: iUserProviderProps) => {
  const [globalLoading, setGlobalLoading] = useState(false);
  const [openUserModal, setOpenUserModal] = useState(false);
  const [user, setUser] = useState<iUser>({} as iUser);
  const [userArr, setUserArr] = useState<tUserArr>([]);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setGlobalLoading(true);
        const res = await api.get<tUserArr>('users');
        setUserArr(() => [...res.data]);
      } catch (error) {
        console.error(error);
      } finally {
        setGlobalLoading(false);
      }
    })();
  }, []);

  const getUserInfo = async (id: number): Promise<void> => {
    try {
      setGlobalLoading(true);
      const res = await api.get<iUser>(`users/${id}`);
      setUser(res.data);
      setOpenUserModal(true);
    } catch (error) {
      console.error(error);
    } finally {
      setGlobalLoading(false);
    }
  };

  const userModalHandler = (): void => {
    setIsClosing(true);
    setTimeout(() => {
      setOpenUserModal(false);
      setIsClosing(false);
    }, 600);
  };

  const findUser = (id: number): iUser | undefined => {
    return userArr.find((user) => user.id === id);
  };

  return (
    <UserContext.Provider
      value={{
        user,
        globalLoading,
        userArr,
        findUser,
        getUserInfo,
        openUserModal,
        userModalHandler,
        isClosing,
      }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserProvider, UserContext };
