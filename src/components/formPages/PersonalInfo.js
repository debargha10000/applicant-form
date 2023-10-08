import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import FormikControl from "../inputComponents/FormikControl";

const PersonalInfo = (props) => {
  const genderOptions = [
    { key: "Male", value: "M" },
    { key: "Female", value: "F" },
  ];
  const categoryOptions = [
    { key: "Select your category", value: "" },
    { key: "General", value: "GN" },
    { key: "Scheduled Castes ", value: "SC" },
    { key: "Scheduled Tribes", value: "ST" },
    { key: "Other Backward Castes", value: "OBC" },
  ];

  // const perInfoValidSchema = Yup.object({
  //   first_name: Yup.string().required("Required"),
  //   // middle_name: Yup.string(),
  //   last_name: Yup.string().required("Required"),
  //   // email: Yup.string().email("Invalid email format").required("Required"),
  //   // contact: Yup.number()
  //   //   .typeError("That doesn't look like a phone number")
  //   //   .positive("A phone number can't start with a minus")
  //   //   .integer("A phone number can't include a decimal point")
  //   //   // .min(10000_00000)
  //   //   .max(99999_99999)
  //   //   .required("A phone number is required"),
  //   // gender: Yup.string().required("Required"),
  //   // dob: Yup.date().required("Required"),
  //   // category: Yup.string().required("Required"),
  //   // blood_group: Yup.string().required("Required"),
  //   // aadhar_number: Yup.number().required("Required"),
  //   // pan_number: Yup.string().required("Required"),
  // });

  const handleSubmit = (values) => {
    props.next(values);
  };

  return (
    <Formik
      initialValues={props.data}
      // validationSchema={perInfoValidSchema}
      onSubmit={handleSubmit}
    >
      {(formik) => {
        return (
          <Form>
            <FormikControl
              control="input"
              // type="email"
              label="First Name"
              name="personal_info.first_name"
            />

            {/* <p>First Name</p>
            <Field name="personal_info.first_name" />

            <p>Last Name</p>
            <Field name="personal_info.last_name" /> */}

            <button type="submit">Next</button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default PersonalInfo;
