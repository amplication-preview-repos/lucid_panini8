import { MemberWhereUniqueInput } from "../member/MemberWhereUniqueInput";

export type DonationCreateInput = {
  amount?: number | null;
  date?: Date | null;
  member?: MemberWhereUniqueInput | null;
};
