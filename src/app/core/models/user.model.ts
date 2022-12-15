export interface ILogin {
  username: String,
  password: String
}

// export interface ILoggedUser {
//   id: number,
//   username: string,
//   firstName: string,
//   lastName: string,
//   role: string
// }
//
// export interface IRegisterUser {
//   id?: number,
//   username: string,
//   firstName: string,
//   lastName: string,
//   phoneNumber: string,
//   password: string,
//   userRole: string
// }
//
// export interface User {
//   id: number,
//   username: string,
//   firstName: string,
//   lastName: string,
//   phoneNumber: string,
//   userRole: string,
//   status: number,
//   devices: []
// }

// export interface IUserRole {
//   id: number;
//   name: string;
// }

export enum UserRole {
  SUPERVISOR = 'SUPERVISOR',
  ADMIN = 'ADMIN',
  CASHIER = 'CASHIER'
}
