import { DonationCreateNestedManyWithoutMembersInput } from "./DonationCreateNestedManyWithoutMembersInput";

export type MemberCreateInput = {
  firstName?: string | null;
  lastName?: string | null;
  email?: string | null;
  phone?: string | null;
  joinDate?: Date | null;
  donations?: DonationCreateNestedManyWithoutMembersInput;
};
