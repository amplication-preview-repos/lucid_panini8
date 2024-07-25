import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const EventCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="name" source="name" />
        <DateTimeInput label="date" source="date" />
        <TextInput label="location" source="location" />
        <TextInput label="description" multiline source="description" />
      </SimpleForm>
    </Create>
  );
};
