import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import FormikControl from "../inputComponents/FormikControl";

const PersonalInfo = (props) => {
  // const { personal_info, ...rest } = props;
  console.log(props.data);
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

  const perInfoValidSchema = Yup.object({
    first_name: Yup.string().required("Required"),
    middle_name: Yup.string(),
    last_name: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email format").required("Required"),
    contact: Yup.number()
      // .typeError("That doesn't look like a phone number")
      // .positive("A phone number can't start with a minus")
      // .integer("A phone number can't include a decimal point")
      // .min(10000_00000)
      // .max(99999_99999)
      .required("A phone number is required"),
    gender: Yup.string().required("Required"),
    dob: Yup.date().required("Required"),
    category: Yup.string().required("Required"),
    blood_group: Yup.string().required("Required"),
    aadhar_number: Yup.number().required("Required"),
    pan_number: Yup.string().required("Required"),
  });

  const handleSubmit = (personal_info) => {
    let values = { personal_info };
    props.next(values);
    console.log(values);
  };

  return (
    <Formik
      initialValues={props.data.personal_info}
      validationSchema={perInfoValidSchema}
      onSubmit={handleSubmit}
    >
      {({ values }) => {
        return (
          <Form>
            <FormikControl
              control="input"
              label="First Name"
              name="first_name"
            />
            <FormikControl
              control="input"
              label="Middle Name"
              name="middle_name"
            />
            <FormikControl control="input" label="Last Name" name="last_name" />
            <FormikControl
              control="input"
              type="email"
              label="Email"
              name="email"
            />
            <FormikControl
              control="input"
              type="number"
              label="Contact Number"
              name="contact"
            />
            <FormikControl
              control="radio"
              label="Gender"
              name="gender"
              options={genderOptions}
            />
            <FormikControl control="date" label="Date of Birth" name="dob" />
            <FormikControl
              control="select"
              label="Category"
              name="category"
              options={categoryOptions}
            />
            <FormikControl
              control="input"
              label="Blood Group"
              name="blood_group"
            />
            <FormikControl
              control="input"
              type="number"
              label="Aadhar Number"
              name="aadhar_number"
            />
            <FormikControl
              control="input"
              label="PAN Number"
              name="pan_number"
            />
            <h4>Present Address</h4>
            <FormikControl
              control="input"
              label="Street"
              name="present_address.street"
            />
            <FormikControl
              control="input"
              label="Pincode"
              name="present_address.pincode"
            />
            <FormikControl
              control="input"
              label="City"
              name="present_address.city"
            />
            <FormikControl
              control="input"
              label="District"
              name="present_address.district"
            />
            <FormikControl
              control="input"
              label="State"
              name="present_address.state"
            />
            <h4>Permanent Address</h4>
            <FormikControl
              control="input"
              label="Street"
              name="permanent_address.street"
            />
            <FormikControl
              control="input"
              label="Pincode"
              name="permanent_address.pincode"
            />
            <FormikControl
              control="input"
              label="City"
              name="permanent_address.city"
            />
            <FormikControl
              control="input"
              label="District"
              name="permanent_address.district"
            />
            <FormikControl
              control="input"
              label="State"
              name="permanent_address.state"
            />
            <FormikControl control="textarea" label="Bio" name="bio" />

            <button type="submit">Next</button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default PersonalInfo;
