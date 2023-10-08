import React, { useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "../inputComponents/FormikControl";

const FamilyInfo = () => {
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

  const initialValues = {
    present_address: {
      street: "",
      pincode: "",
      city: "",
      district: "",
      state: "",
    },
    permanent_address: {
      street: "",
      pincode: "",
      city: "",
      district: "",
      state: "",
    },
    first_name: "test1551",
    middle_name: "Student",
    last_name: "test11",
    email: "",
    contact: "7412589635",
    gender: "",
    dob: null,
    are_adresses_same: false,
    category: "GN",
    blood_group: "",
    aadhar_number: "",
    pan_number: "",
  };

  const validationSchema = Yup.object({
    first_name: Yup.string().required("Required"),
    middle_name: Yup.string(),
    last_name: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email format").required("Required"),
    contact: Yup.number()
      .typeError("That doesn't look like a phone number")
      .positive("A phone number can't start with a minus")
      .integer("A phone number can't include a decimal point")
      // .min(10000_00000)
      .max(99999_99999)
      .required("A phone number is required"),
    gender: Yup.string().required("Required"),
    dob: Yup.date().required("Required"),
    category: Yup.string().required("Required"),
    blood_group: Yup.string().required("Required"),
    aadhar_number: Yup.number().required("Required"),
    pan_number: Yup.string().required("Required"),
  });

  const onSubmit = (values, onSubmitProps) => {
    console.log("Form data", values);
    console.log("Submit props", onSubmitProps);
    onSubmitProps.setSubmitting(false);
    onSubmitProps.resetForm();
  };

  // const [formValues, setFormValues] = useState(null);

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      enableReinitialize
    >
      {(formik) => {
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
            {/* <FormikControl
              control="input"
              type="email"
              label="Email"
              name="email"
            /> */}
            {/* <FormikControl
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
            /> */}
            {/* <FormikControl control="textarea" label="Bio" name="bio" /> */}
            <button
              type="button"
              // onClick={() => setFormValues(null)}
              // disabled={!formik.isValid}
            >
              Prev
            </button>
            <button
              type="submit"
              // onClick={() => setFormValues(null)}
              // disabled={!formik.isValid}
            >
              Next
            </button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default FamilyInfo;
