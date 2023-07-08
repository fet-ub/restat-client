import { IUser } from "./user.type";

export type LoginResponseType = {
  accessToken: string;
  user: IUser;
  role: string;
};

export type LoginRequestType = {
  email: string;
  password: string;
};
