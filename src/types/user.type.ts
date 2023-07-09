export interface IUser {
    nane:  string
    email: string
    id: number
    status: string
}

export enum UserType {
    ADMIN,
    HOD,
    DEAN,
    STUDENT,
    LECTURER,
    SUPPORT_STAFF,
    EXAMINER,
    COORDINATOR
}