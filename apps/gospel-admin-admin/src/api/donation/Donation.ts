import { Member } from "../member/Member";

export type Donation = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  amount: number | null;
  date: Date | null;
  member?: Member | null;
};
