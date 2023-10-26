import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
// import * as Yup from "yup";
import FormikControl from "../inputComponents/FormikControl";

const AcademicInfo = (props) => {
  const handleSubmit = (academic_info) => {
    props.next({ academic_info });
    console.log({ academic_info });
  };

  let year = new Date().getFullYear().toString();

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
            <h3 className="sub-heading">Admission</h3>

            <div className="grid-col-2">
              <FormikControl
                control="input"
                label="Exam Name"
                name="admission.exam_name"
                type="text"
                required
              />
              <FormikControl
                control="input"
                label="Year of Exam"
                name="admission.year_of_exam"
                type="number"
                min={year - 10}
                max={year}
                required
              />
              <FormikControl
                control="input"
                label="Roll Number"
                name="admission.roll_number"
                type="text"
                required
              />
              <FormikControl
                control="input"
                label="Rank"
                name="admission.rank"
                type="number"
                required
              />
            </div>

            <h3 className="sub-heading">Secondary Exam</h3>
            <FormikControl
              control="input"
              label="School Name"
              name="secondary.school_name"
              type="text"
              required
            />
            <div className="grid-col-2">
              <FormikControl
                control="input"
                label="Exam Name"
                name="secondary.exam_name"
                type="text"
                required
              />
              <FormikControl
                control="input"
                label="Year of Exam"
                name="secondary.year_of_exam"
                type="number"
                min={year - 10}
                max={year}
                required
              />
              <FormikControl
                control="input"
                label="Board"
                name="secondary.board"
                type="text"
                required
              />
              <FormikControl
                control="input"
                label="Aggregate"
                name="secondary.aggregate"
                type="number"
                required
              />
            </div>

            <h3 className="sub-heading">Higher Secondary Exam</h3>
            <FormikControl
              control="input"
              label="School Name"
              name="higher_secondary.school_name"
              type="text"
              required
            />
            <div className="grid-col-2">
              <FormikControl
                control="input"
                label="Exam Name"
                name="higher_secondary.exam_name"
                type="text"
                required
              />
              <FormikControl
                control="input"
                label="Year of Exam"
                name="higher_secondary.year_of_exam"
                type="number"
                min={year - 10}
                max={year}
                required
              />
              <FormikControl
                control="input"
                label="Board"
                name="higher_secondary.board"
                type="text"
                required
              />
              <FormikControl
                control="input"
                label="Aggregate"
                name="higher_secondary.aggregate"
                type="number"
                required
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
                Next
              </button>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};

export default AcademicInfo;
