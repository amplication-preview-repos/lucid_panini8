import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { MemberWhereUniqueInput } from "../member/MemberWhereUniqueInput";

export type DonationWhereInput = {
  id?: StringFilter;
  amount?: FloatNullableFilter;
  date?: DateTimeNullableFilter;
  member?: MemberWhereUniqueInput;
};
