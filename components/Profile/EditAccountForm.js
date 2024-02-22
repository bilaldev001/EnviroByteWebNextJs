import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/router";
import TextField from "../Shared/InputField";
import Spinner from "../Utils/Spinner";
import { useDispatch, useSelector } from "react-redux";

const EditAccountForm = () => {
  const router = useRouter();
  const disptach = useDispatch();
  const loading = useSelector((state) => state?.auth?.loading);
  const userData = useSelector((state) => state?.auth?.user?.user);
  // Form Initial Values
  const initialValues = {
    username: userData.username,
    password: "",
  };

  // Error Schema
  const errorSchema = Yup.object().shape({
    username: Yup.string().required("Name is required"),
    password: Yup.string().required("Password  is required"),
  });

  // Form Submission
  const handleSubmit = async (values) => {
    let formData = {
      username: values?.username,
      password: values?.password,
    };
    // disptach(loginUser({ formData, router }));
  };

  return (
    <div className="contact-section transition rounded-lg">
      <div className="dark:bg-[#25282C] bg-[#ffffff] rounded-lg p-4">
        {/* <div className="max-w-3xl mx-auto text-center pb-12 md:pb-[64px]">
          <h1 className=" text-gray-800 dark:text-[#ffffff] font-[800] text-3xl md:text-[40px]">
            It happens. Don't worry
          </h1>
        </div> */}
        <Formik
          initialValues={initialValues}
          validationSchema={errorSchema}
          onSubmit={handleSubmit}
        >
          {(formik) => (
            <Form className="w-full">
              <div className="grid grid-cols-2 gap-3">
                <TextField
                  type="text"
                  label="Name"
                  name="username"
                  placeholder="Enter your name"
                />
                <TextField
                  type="password"
                  label="Password"
                  name="password"
                  placeholder="Enter your password"
                />
              </div>
              <div className="flex justify-end">
                <button className="signin-btn default-btn rounded">
                  {loading ? <Spinner /> : "Confirm"} <span></span>
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default EditAccountForm;
