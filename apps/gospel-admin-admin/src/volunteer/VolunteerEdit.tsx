import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const VolunteerEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="phone" source="phone" />
        <TextInput label="availability" multiline source="availability" />
        <TextInput label="name" source="name" />
        <TextInput label="email" source="email" type="email" />
      </SimpleForm>
    </Edit>
  );
};
