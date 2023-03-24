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
  const [user, setUser] = useState<null | iUser>(null);
  const [userArr, setUserArr] = useState<null | iUser[]>(null);
  const [openUserModal, setOpenUserModal] = useState(false);

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

  const findUser = (id: number): iUser | undefined => {
    const user = userArr!.find((user) => user.id === id);
    return user;
  };

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
    setOpenUserModal(false);
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
      }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserProvider, UserContext };
