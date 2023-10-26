import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
// import * as Yup from "yup";
import FormikControl from "../inputComponents/FormikControl";

const FamilyInfo = (props) => {
  const handleSubmit = (family_info) => {
    props.next({ family_info });
    console.log({ family_info });
  };
  // const famInfoValidSchema = Yup.object{
  //   father contact info
  // job
  // guardian all mandatory

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
            <h3 className="sub-heading">Father</h3>
            <div className="grid-col-3">
              <FormikControl
                control="input"
                label="First Name"
                name="father.first_name"
                type="text"
                required
              />
              <FormikControl
                control="input"
                label="Middle Name"
                name="father.middle_name"
                type="text"
              />
              <FormikControl
                control="input"
                label="Last Name"
                name="father.last_name"
                type="text"
                required
              />
            </div>
            <div className="grid-col-2">
              <FormikControl
                control="input"
                label="Email"
                name="father.email"
                type="email"
              />
              <FormikControl
                control="input"
                label="Contact No"
                name="father.contact"
                type="number"
              />
            </div>

            <h3 className="sub-heading">Mother</h3>
            <div className="grid-col-3">
              <FormikControl
                control="input"
                label="First Name"
                name="mother.first_name"
                type="text"
                required
              />
              <FormikControl
                control="input"
                label="Middle Name"
                name="mother.middle_name"
                type="text"
              />
              <FormikControl
                control="input"
                label="Last Name"
                name="mother.last_name"
                type="text"
                required
              />
            </div>
            <div className="grid-col-2">
              <FormikControl
                control="input"
                label="Email"
                name="mother.email"
                type="email"
              />
              <FormikControl
                control="input"
                label="Contact No"
                name="mother.contact"
                type="number"
              />
            </div>

            <h3 className="sub-heading">Guardian</h3>
            <div className="grid-col-3">
              <FormikControl
                control="input"
                label="First Name"
                name="guardian.first_name"
                type="text"
                required
              />
              <FormikControl
                control="input"
                label="Middle Name"
                name="guardian.middle_name"
                type="text"
              />
              <FormikControl
                control="input"
                label="Last Name"
                name="guardian.last_name"
                type="text"
                required
              />
            </div>
            <div className="grid-col-2">
              <FormikControl
                control="input"
                label="Relation"
                name="guardian.relation"
                type="text"
                required
              />
              <FormikControl
                control="input"
                label="Occupation"
                name="guardian.occupation"
                type="text"
                required
              />
            </div>
            <div className="grid-col-3">
              <FormikControl
                control="input"
                label="Designation"
                name="guardian.designation"
                type="text"
                required
              />
              <FormikControl
                control="input"
                label="Office Contact"
                name="guardian.office_contact"
                type="number"
                required
              />
              <FormikControl
                control="input"
                label="Income"
                name="guardian.income"
                type="number"
                required
              />
            </div>

            <div className="grid-col-2">
              <FormikControl
                control="input"
                label="Email"
                name="guardian.email"
                type="email"
                required
              />
              <FormikControl
                control="input"
                label="Contact No"
                name="guardian.contact"
                type="number"
                min="1000000000"
                max="9999999999"
                required
              />
            </div>

            <div className="grid-col-2">
              <FormikControl
                control="input"
                label="Pan Number"
                name="guardian.pan_number"
                type="text"
                maxLength="10"
                required
              />
              <FormikControl
                control="input"
                label="Aadhar Number"
                name="guardian.aadhar_number"
                type="number"
                min="100000000000"
                max="999999999999"
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

export default FamilyInfo;
