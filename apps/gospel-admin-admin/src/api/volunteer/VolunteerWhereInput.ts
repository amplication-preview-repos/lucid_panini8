import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type VolunteerWhereInput = {
  id?: StringFilter;
  phone?: StringNullableFilter;
  availability?: StringNullableFilter;
  name?: StringNullableFilter;
  email?: StringNullableFilter;
};
