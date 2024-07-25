import { MemberWhereUniqueInput } from "../member/MemberWhereUniqueInput";

export type DonationUpdateInput = {
  amount?: number | null;
  date?: Date | null;
  member?: MemberWhereUniqueInput | null;
};
