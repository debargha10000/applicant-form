import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import FormikControl from "../inputComponents/FormikControl";

const FamilyInfo = (props) => {
  const handleSubmit = (course_info) => {
    props.next({ course_info }, true);
    console.log({ course_info });
    // console.log(props.data);
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
              type="number"
            />
            <div className="grid-col-2">
              <FormikControl
                control="input"
                label="Course Name"
                name="course_name"
                type="text"
              />
              <FormikControl
                control="input"
                label="Duration"
                name="duration"
                type="text"
              />
              <FormikControl
                control="input"
                label="Stream"
                name="stream"
                type="text"
              />
              <FormikControl
                control="input"
                label="Admission Year"
                name="admission_year"
                type="text"
              />
            </div>

            <div className="btns">
              <button
                type="button"
                className="btn"
                onClick={() => props.prev(values)}
              >
                Back
              </button>
              <button type="submit" className="btn">
                Submit
              </button>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};

export default FamilyInfo;
