import IUser from "types/user";

export default interface ITweet {
  id: string;
  created_at: string;
  body: string;
  userId: number;
  createdAt: Date;
  updatedAt: Date;
  author: IUser;
}
