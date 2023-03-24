import { useContext, useState } from 'react';
import { UserContext } from '../../providers/userContext';
import { iUserInfo } from '../../providers/userContext/types';
import { Button } from '../Button';

const UserInfoModal = () => {
  const [userInfo, setUserInfo] = useState<iUserInfo>({
    address: false,
    geo: false,
    company: false,
  });
  const { userModalHandler, user } = useContext(UserContext);

  const handleClick = (property: keyof iUserInfo): void => {
    setUserInfo((prevState) => {
      return {
        ...prevState,
        [property]: !prevState[property],
      };
    });
  };

  return (
    <div>
      <div>
        <header>
          <h2>Informações do Usuário:</h2>
          <Button onClick={() => userModalHandler()} type={'button'}>
            X
          </Button>
        </header>
        <div>
          <h3>{user!.name}</h3>
          <h3>{user!.username}</h3>
          <h3>{user!.email}</h3>
          <div>
            <h3>Address:</h3>
            <Button onClick={() => handleClick('address')} type={'button'}>
              {userInfo.address ? '-' : '+'}
            </Button>
          </div>
          {userInfo.address && (
            <div>
              <h4>{user!.address!.street}</h4>
              <h4>{user!.address!.suite}</h4>
              <h4>{user!.address!.city}</h4>
              <h4>{user!.address!.zipcode}</h4>
              <div>
                <h4>Geo:</h4>
                <Button onClick={() => handleClick('geo')} type={'button'}>
                  {userInfo.geo ? '-' : '+'}
                </Button>
              </div>
              {userInfo.geo && (
                <div>
                  <h5>{user!.address!.geo.lat}</h5>
                  <h5>{user!.address!.geo.lng}</h5>
                </div>
              )}
            </div>
          )}
          <h3>{user!.phone}</h3>
          <h3>{user!.website}</h3>
          <div>
            <h3>Company:</h3>
            <Button onClick={() => handleClick('company')} type={'button'}>
              {userInfo.company ? '-' : '+'}
            </Button>
          </div>
          {userInfo.company && (
            <div>
              <h4>{user!.company!.name}</h4>
              <h4>{user!.company!.catchPhrase}</h4>
              <h4>{user!.company!.bs}</h4>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserInfoModal;
