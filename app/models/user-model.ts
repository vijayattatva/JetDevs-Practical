export type Pictures = {
  medium: string;
};

export type Username = {
  first: string;
  last: string;
};

export type Login = {
  uuid: string;
};

export type UserItemModal = {
  picture: Pictures;
  name: Username;
  gender: string;
  isFavorite: boolean;
  id: string;
  login: Login;
};