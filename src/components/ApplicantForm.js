import React, { useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControl from "./inputComponents/FormikControl";

import {
  PersonalInfo,
  FamilyInfo,
  AcademicInfo,
  CourseInfo,
} from "./formPages";

const ApplicantForm = () => {
  const [data, setData] = useState({
    personal_info: {
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
      first_name: "",
      middle_name: "",
      last_name: "",
      email: "",
      contact: "",
      gender: "",
      dob: null,
      are_adresses_same: false,
      category: "",
      blood_group: "",
      aadhar_number: "",
      pan_number: "",
    },
    family_info: {
      father: {
        first_name: "",
        middle_name: "",
        last_name: "",
        email: "",
        contact: "",
      },
      mother: {
        first_name: "",
        middle_name: "",
        last_name: "",
        email: "",
        contact: "",
      },
      guardian: {
        office_address: {
          street: "",
          pincode: "",
          city: "",
          district: "",
          state: "",
        },
        first_name: "",
        middle_name: "",
        last_name: "",
        relation: "",
        occupation: "",
        designation: "",
        office_contact: "",
        contact: "",
        income: "",
        email: "",
        pan_number: "",
        aadhar_number: "",
      },
    },
    academic_info: {
      admission: {
        exam_name: "",
        year_of_exam: "",
        roll_number: "",
        rank: "",
      },
      secondary: {
        exam_name: "",
        year_of_exam: "",
        board: "",
        aggregate: "",
        school_name: "",
      },
      higher_secondary: {
        exam_name: "",
        year_of_exam: "",
        board: "",
        aggregate: "",
        school_name: "",
      },
    },
    course_info: {
      enrollment_number: "",
      course_name: "",
      duration: "",
      stream: "",
      admission_year: "",
    },
  });

  const [currentStep, setCurrentStep] = useState(0);

  const formTitles = [
    "Personal Info",
    "Family Info",
    "Academic Info",
    "Course Info",
  ];

  const makeRequest = (formData) => {
    console.log("Form Submitted", formData);
  };

  const handleNextStep = (newData, final = false) => {
    setData((prev) => ({ ...prev, ...newData }));

    if (final) {
      makeRequest(newData);
      return;
    }

    setCurrentStep((prev) => prev + 1);
  };

  const handlePrevStep = (newData) => {
    setData((prev) => ({ ...prev, ...newData }));
    setCurrentStep((prev) => prev - 1);
  };

  const steps = [
    <PersonalInfo next={handleNextStep} data={data.personal_info} />,
    <FamilyInfo
      next={handleNextStep}
      prev={handlePrevStep}
      data={data.family_info}
    />,
    <AcademicInfo
      next={handleNextStep}
      prev={handlePrevStep}
      data={data.academic_info}
    />,
    <CourseInfo
      next={handleNextStep}
      prev={handlePrevStep}
      data={data.course_info}
    />,
  ];

  // console.log(data);

  return (
    <div className="form-container">
      <div className="body">
        <h1>{formTitles[currentStep]}</h1>
        {steps[currentStep]}
      </div>
    </div>
  );
};

export default ApplicantForm;
