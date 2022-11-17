export interface IUser {
  id: string
  username: string
  firstname: string
  lastname: string
  password: string
  email: string
  phone: string
  address: string
  birthday: Date
}
export interface IRegisterUserInput {
  registerUserInput: {
    username: string;
    password: string;
    firstname: string;
    lastname: string;
  };
}
export interface ILoginUserInput {
    loginUserInput: {
      username: string;
      password: string;
    };
  }