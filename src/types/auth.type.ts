import { IUser, UserType } from "./user.type";

export type LoginResponseType = {
  accessToken: string;
  user: IUser;
  role: string;
};

export type LoginRequestType = {
  email: string;
  password: string;
};

export type userRequestType = {
  facultyId: string;
  departmentId?: string;
  firstName: string;
  lastName: string;
  email: string;
  profilePicture?: string;
  role?: UserType;
};
