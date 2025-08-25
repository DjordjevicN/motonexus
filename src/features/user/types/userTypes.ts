export type IUser = {
  id: string;
  _id?: string;
  displayName: string;
  email: string;
  createdAt?: string;
  city?: string;
  country?: string;
  avatar?: string;
  subscription?: ["free" | "premium"];
};
