import { SortOrder } from "../../util/SortOrder";

export type MemberOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  firstName?: SortOrder;
  lastName?: SortOrder;
  email?: SortOrder;
  phone?: SortOrder;
  joinDate?: SortOrder;
};
