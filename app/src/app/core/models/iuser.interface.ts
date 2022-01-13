export interface IUser {
  _id: String;
  name: String;
  email: String;
  password: String;
  emoji: String;
}

export interface IUserSignIn {
  email: String;
  password: String;
}
