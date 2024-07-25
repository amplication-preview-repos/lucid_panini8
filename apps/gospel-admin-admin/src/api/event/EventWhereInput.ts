import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type EventWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  date?: DateTimeNullableFilter;
  location?: StringNullableFilter;
  description?: StringNullableFilter;
};
