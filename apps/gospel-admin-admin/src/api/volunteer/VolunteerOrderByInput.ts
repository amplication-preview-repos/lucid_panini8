import { SortOrder } from "../../util/SortOrder";

export type VolunteerOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  phone?: SortOrder;
  availability?: SortOrder;
  name?: SortOrder;
  email?: SortOrder;
};
