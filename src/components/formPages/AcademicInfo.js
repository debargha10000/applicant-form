import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import FormikControl from "../inputComponents/FormikControl";

const AcademicInfo = (props) => {
  const handleSubmit = (academic_info) => {
    props.next({ academic_info });
    console.log({ academic_info });
  };

  return (
    <Formik
      initialValues={props.data.academic_info}
      // validationSchema={validationSchema}
      onSubmit={handleSubmit}
      enableReinitialize
    >
      {({ values }) => {
        return (
          <Form>
            <h3>Admission</h3>

            <FormikControl
              control="input"
              label="Exam Name"
              name="admission.exam_name"
            />
            <FormikControl
              control="input"
              label="Year of Exam"
              name="admission.year_of_exam"
            />
            <FormikControl
              control="input"
              label="Roll Number"
              name="admission.roll_number"
            />
            <FormikControl control="input" label="Rank" name="admission.rank" />

            <h3>Secondary Exam</h3>

            <FormikControl
              control="input"
              label="Exam Name"
              name="secondary.exam_name"
            />
            <FormikControl
              control="input"
              label="Year of Exam"
              name="secondary.year_of_exam"
            />
            <FormikControl
              control="input"
              label="Board"
              name="secondary.board"
            />
            <FormikControl
              control="input"
              label="Aggregate"
              name="secondary.aggregate"
            />
            <FormikControl
              control="input"
              label="School Name"
              name="secondary.school_name"
            />

            <h3>Higher Secondary Exam</h3>

            <FormikControl
              control="input"
              label="Exam Name"
              name="higher_secondary.exam_name"
            />
            <FormikControl
              control="input"
              label="Year of Exam"
              name="higher_secondary.year_of_exam"
            />
            <FormikControl
              control="input"
              label="Board"
              name="higher_secondary.board"
            />
            <FormikControl
              control="input"
              label="Aggregate"
              name="higher_secondary.aggregate"
            />
            <FormikControl
              control="input"
              label="School Name"
              name="higher_secondary.school_name"
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

export default AcademicInfo;
