import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import FormikControl from "../inputComponents/FormikControl";

const FamilyInfo = (props) => {
  const handleSubmit = (values) => {
    props.next(values, true);
  };

  return (
    <Formik
      initialValues={props.data}
      // validationSchema={validationSchema}
      onSubmit={handleSubmit}
      enableReinitialize
    >
      {(formik) => {
        return (
          <Form>
            <p>Father contact</p>
            <Field name="family_info.father.contact" />

            <button type="button">Prev</button>
            <button type="submit">Next</button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default FamilyInfo;
