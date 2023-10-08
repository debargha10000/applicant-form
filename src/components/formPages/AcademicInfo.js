import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import FormikControl from "../inputComponents/FormikControl";

const AcademicInfo = (props) => {
  // const validationSchema = Yup.object({
  //   first_name: Yup.string().required("Required"),
  //   middle_name: Yup.string(),
  //   last_name: Yup.string().required("Required"),
  //   email: Yup.string().email("Invalid email format").required("Required"),
  //   contact: Yup.number()
  //     .typeError("That doesn't look like a phone number")
  //     .positive("A phone number can't start with a minus")
  //     .integer("A phone number can't include a decimal point")
  //     // .min(10000_00000)
  //     .max(99999_99999)
  //     .required("A phone number is required"),
  //   gender: Yup.string().required("Required"),
  //   dob: Yup.date().required("Required"),
  //   category: Yup.string().required("Required"),
  //   blood_group: Yup.string().required("Required"),
  //   aadhar_number: Yup.number().required("Required"),
  //   pan_number: Yup.string().required("Required"),
  // });

  const handleSubmit = (values) => {
    props.next(values);
  };

  return (
    <Formik
      initialValues={props.data}
      // validationSchema={validationSchema}
      onSubmit={handleSubmit}
      enableReinitialize
    >
      {({ values }) => {
        return (
          <Form>
            <p>Mother email</p>
            <Field name="family_info.mother.email" />

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

export default AcademicInfo;
