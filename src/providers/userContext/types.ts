interface iUserProviderProps {
  children: React.ReactNode;
}

interface iUserProviderValue {
  globalLoading: boolean;
  openUserModal: boolean;
  user: iUser | null;
  userArr: iUser[] | null;
  findUser: (id: number) => iUser | undefined;
  getUserInfo: (id: number) => void;
  userModalHandler: () => void;
}

interface iUserGeo {
  lat: string;
  lng: string;
}

interface iUserAddress {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: iUserGeo;
}

interface iUserCompany {
  name: string;
  catchPhrase: string;
  bs: string;
}

interface iUser {
  id: number;
  name: string;
  username: string;
  email: string;
  address?: iUserAddress;
  phone?: string;
  website?: string;
  company?: iUserCompany;
}

interface iUserInfo {
  address: boolean;
  geo: boolean;
  company: boolean;
}

type tUserArr = iUser[];

export type {
  iUserProviderProps,
  iUser,
  iUserGeo,
  iUserAddress,
  iUserCompany,
  tUserArr,
  iUserProviderValue,
  iUserInfo,
};
