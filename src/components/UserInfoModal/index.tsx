import { useContext, useState } from 'react';
import { UserContext } from '../../providers/userContext';
import { iUserInfo } from '../../providers/userContext/types';
import { Button } from '../Button';
import { StyledDivInfo, StyledModalBox, StyledModalWrapper } from './style';

const UserInfoModal = () => {
  const [userInfo, setUserInfo] = useState<iUserInfo>({
    address: false,
    geo: false,
    company: false,
  });

  const { userModalHandler, user, isClosing } = useContext(UserContext);

  const handleClick = (key: keyof iUserInfo): void => {
    setUserInfo((prevState) => {
      return {
        ...prevState,
        [key]: !prevState[key],
      };
    });
  };

  return (
    <StyledModalWrapper>
      <StyledModalBox isClosing={isClosing}>
        <div>
          <h3>Informações do Usuário:</h3>
          <Button
            onClick={() => userModalHandler()}
            type={'button'}
            buttonVariation={'closeModal'}>
            X
          </Button>
        </div>

        <div>
          <h4>Name:</h4>
          <span>{user!.name}</span>

          <h4>Username:</h4>
          <span>{user!.username}</span>

          <h4>Email:</h4>
          <span>{user!.email}</span>

          <h4>Phone:</h4>
          <span>{user!.phone}</span>

          <h4>Website:</h4>
          <span>{user!.website}</span>

          <div>
            <StyledDivInfo>
              <h4>Address</h4>
              <Button
                onClick={() => handleClick('address')}
                type={'button'}
                buttonVariation={'openInfoDetail'}>
                {userInfo.address ? '-' : '+'}
              </Button>
            </StyledDivInfo>

            {userInfo.address && (
              <div>
                <h4>Street:</h4>
                <span>{user!.address!.street}</span>
                <h4>Suite:</h4>
                <span>{user!.address!.suite}</span>
                <h4>City:</h4>
                <span>{user!.address!.city}</span>
                <h4>Zipcode:</h4>
                <span>{user!.address!.zipcode}</span>
                <div>
                  <StyledDivInfo>
                    <h4>Geo</h4>
                    <Button
                      onClick={() => handleClick('geo')}
                      type={'button'}
                      buttonVariation={'openInfoDetail'}>
                      {userInfo.geo ? '-' : '+'}
                    </Button>
                  </StyledDivInfo>
                  {userInfo.geo && (
                    <>
                      <h4>Lat:</h4>
                      <span>{user!.address!.geo.lat}</span>
                      <h4>Lng</h4>
                      <span>{user!.address!.geo.lng}</span>
                    </>
                  )}
                </div>
              </div>
            )}
          </div>

          <div>
            <StyledDivInfo>
              <h4>Company</h4>
              <Button
                onClick={() => handleClick('company')}
                type={'button'}
                buttonVariation='openInfoDetail'>
                {userInfo.company ? '-' : '+'}
              </Button>
            </StyledDivInfo>

            {userInfo.company && (
              <>
                <h4>Name:</h4>
                <span>{user!.company!.name}</span>
                <h4>CatchPhrase</h4>
                <span>{user!.company!.catchPhrase}</span>
                <h4>Bs</h4>
                <span>{user!.company!.bs}</span>
              </>
            )}
          </div>
        </div>
      </StyledModalBox>
    </StyledModalWrapper>
  );
};

export default UserInfoModal;
