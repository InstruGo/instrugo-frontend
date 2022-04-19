export type User = {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  phone: string;
  role: string;
  avatarUrl: string;
  createdOn: Date;
  averageRating: number;
  ratingsCount: number;
};

export type OptionalUser = User | null;
