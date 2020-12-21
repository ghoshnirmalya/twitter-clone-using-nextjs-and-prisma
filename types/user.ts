import ITweet from "./tweet";

export default interface IUser {
  id: number;
  name: string;
  image: string;
  email: string;
  emailVerified: null | Boolean;
  createdAt: Date;
  updatedAt: Date;
  tweets?: ITweet[];
}
