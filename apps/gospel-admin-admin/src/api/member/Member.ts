import { Donation } from "../donation/Donation";

export type Member = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  firstName: string | null;
  lastName: string | null;
  email: string | null;
  phone: string | null;
  joinDate: Date | null;
  donations?: Array<Donation>;
};
