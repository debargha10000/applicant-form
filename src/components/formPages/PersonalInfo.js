import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
// import * as Yup from "yup";
import FormikControl from "../inputComponents/FormikControl";

const PersonalInfo = (props) => {
  // const { personal_info, ...rest } = props;
  // console.log(props.data);
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
  //   middle_name: Yup.string(),
  //   last_name: Yup.string().required("Required"),
  //   email: Yup.string().email("Invalid email format").required("Required"),
  //   gender: Yup.string().required("Required"),
  //   dob: Yup.date().required("Required"),
  //   category: Yup.string().required("Required"),
  //   blood_group: Yup.string().required("Required"),
  //   aadhar_number: Yup.number().required("Required"),
  //   pan_number: Yup.string().required("Required"),
  // });

  const handleSubmit = (personal_info) => {
    props.next({ personal_info });
    console.log({ personal_info });
  };

  return (
    <Formik
      initialValues={props.data.personal_info}
      // validationSchema={perInfoValidSchema}
      onSubmit={handleSubmit}
    >
      {({ values }) => {
        return (
          <Form className="form">
            <div className="grid-col-3">
              <FormikControl
                control="input"
                label="First Name"
                name="first_name"
                type="text"
                required
              />
              <FormikControl
                control="input"
                label="Middle Name"
                name="middle_name"
                type="text"
              />
              <FormikControl
                control="input"
                label="Last Name"
                name="last_name"
                type="text"
                required
              />
            </div>
            <div className="grid-col-2">
              <FormikControl
                control="input"
                type="email"
                label="Email"
                name="email"
                required
              />
              <FormikControl
                control="input"
                type="number"
                label="Contact Number"
                name="contact"
                required
                min="1000000000"
                max="9999999999"
              />

              <FormikControl
                control="radio"
                label="Gender"
                name="gender"
                options={genderOptions}
                required
              />
              <FormikControl
                control="date"
                label="Date of Birth"
                name="dob"
                type="date"
                required
              />

              <FormikControl
                control="select"
                label="Category"
                name="category"
                options={categoryOptions}
                required
              />
              <FormikControl
                control="input"
                label="Blood Group"
                name="blood_group"
                type="text"
                required
              />

              <FormikControl
                control="input"
                type="number"
                label="Aadhar Number"
                name="aadhar_number"
                required
                min="0"
                max="999999999999"
              />
              <FormikControl
                control="input"
                label="PAN Number"
                name="pan_number"
                type="text"
                required
                maxLength="10"
                size="10"
              />
            </div>

            <h3 className="sub-heading">Present Address</h3>
            <FormikControl
              control="input"
              label="Street"
              name="present_address.street"
              type="text"
              required
            />
            <div className="grid-col-2">
              <FormikControl
                control="input"
                label="City"
                name="present_address.city"
                type="text"
                required
              />
              <FormikControl
                control="input"
                label="Pincode"
                name="present_address.pincode"
                type="number"
                required
                min="0"
                max="999999"
              />

              <FormikControl
                control="input"
                label="District"
                name="present_address.district"
                type="text"
                required
              />
              <FormikControl
                control="input"
                label="State"
                name="present_address.state"
                type="text"
                required
              />
            </div>

            <h3 className="sub-heading">Permanent Address</h3>
            <FormikControl
              control="input"
              label="Street"
              name="permanent_address.street"
              type="text"
            />
            <div className="grid-col-2">
              <FormikControl
                control="input"
                label="City"
                name="permanent_address.city"
                type="text"
              />
              <FormikControl
                control="input"
                label="Pincode"
                name="permanent_address.pincode"
                type="number"
                min="0"
                max="999999"
              />

              <FormikControl
                control="input"
                label="District"
                name="permanent_address.district"
                type="text"
              />
              <FormikControl
                control="input"
                label="State"
                name="permanent_address.state"
                type="text"
              />
            </div>

            <div className="btns">
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

export default PersonalInfo;
