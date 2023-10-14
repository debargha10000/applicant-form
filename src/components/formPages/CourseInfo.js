import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import FormikControl from "../inputComponents/FormikControl";

const FamilyInfo = (props) => {
  const handleSubmit = (course_info) => {
    props.next({ course_info }, true);
    console.log({ course_info });
  };

  return (
    <Formik
      initialValues={props.data.course_info}
      // validationSchema={validationSchema}
      onSubmit={handleSubmit}
      enableReinitialize
    >
      {({ values }) => {
        return (
          <Form>
            <FormikControl
              control="input"
              label="Enrollment Number"
              name="enrollment_number"
            />
            <FormikControl
              control="input"
              label="Course Name"
              name="course_name"
            />
            <FormikControl control="input" label="Duration" name="duration" />
            <FormikControl control="input" label="Stream" name="stream" />
            <FormikControl
              control="input"
              label="Admission Year"
              name="admission_year"
            />

            <button type="button" onClick={() => props.prev(values)}>
              Back
            </button>
            <button type="submit">Submit</button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default FamilyInfo;
