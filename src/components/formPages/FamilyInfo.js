import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import FormikControl from "../inputComponents/FormikControl";

const FamilyInfo = (props) => {
  const handleSubmit = (family_info) => {
    props.next({ family_info });
    console.log({ family_info });
  };
  // const famInfoValidSchema = Yup.object{

  // }

  return (
    <Formik
      initialValues={props.data.family_info}
      // validationSchema={famInfoValidSchema}
      onSubmit={handleSubmit}
      enableReinitialize
    >
      {({ values }) => {
        return (
          <Form>
            <h3>Father</h3>
            <FormikControl
              control="input"
              label="First Name"
              name="father.first_name"
            />
            <FormikControl
              control="input"
              label="Middle Name"
              name="father.middle_name"
            />
            <FormikControl
              control="input"
              label="Last Name"
              name="father.last_name"
            />
            <FormikControl control="input" label="Email" name="father.email" />
            <FormikControl
              control="input"
              label="Contact No"
              name="father.contact"
            />

            <h3>Mother</h3>
            <FormikControl
              control="input"
              label="First Name"
              name="mother.first_name"
            />
            <FormikControl
              control="input"
              label="Middle Name"
              name="mother.middle_name"
            />
            <FormikControl
              control="input"
              label="Last Name"
              name="mother.last_name"
            />
            <FormikControl control="input" label="Email" name="mother.email" />
            <FormikControl
              control="input"
              label="Contact No"
              name="mother.contact"
            />

            <h3>Guardian</h3>
            <FormikControl
              control="input"
              label="First Name"
              name="guardian.first_name"
            />
            <FormikControl
              control="input"
              label="Middle Name"
              name="guardian.middle_name"
            />
            <FormikControl
              control="input"
              label="Last Name"
              name="guardian.last_name"
            />
            <FormikControl
              control="input"
              label="Relation"
              name="guardian.relation"
            />
            <FormikControl
              control="input"
              label="Occupation"
              name="guardian.occupation"
            />
            <FormikControl
              control="input"
              label="Designation"
              name="guardian.designation"
            />
            <FormikControl
              control="input"
              label="Office Contact"
              name="guardian.office_contact"
            />
            <FormikControl
              control="input"
              label="Contact No"
              name="guardian.contact"
            />
            <FormikControl
              control="input"
              label="Income"
              name="guardian.income"
            />
            <FormikControl
              control="input"
              label="Email"
              name="guardian.email"
            />
            <FormikControl
              control="input"
              label="Pan Number"
              name="guardian.pan_number"
            />
            <FormikControl
              control="input"
              label="Email"
              name="guardian.aadhar_number"
            />

            <button type="button" onClick={() => props.prev(values)}>
              Back
            </button>
            <button type="submit">Next</button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default FamilyInfo;
