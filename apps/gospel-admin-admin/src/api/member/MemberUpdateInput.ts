import { DonationUpdateManyWithoutMembersInput } from "./DonationUpdateManyWithoutMembersInput";

export type MemberUpdateInput = {
  firstName?: string | null;
  lastName?: string | null;
  email?: string | null;
  phone?: string | null;
  joinDate?: Date | null;
  donations?: DonationUpdateManyWithoutMembersInput;
};
