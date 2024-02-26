import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/router";
import TextField from "../Shared/InputField";
import Spinner from "../Utils/Spinner";
import { useDispatch, useSelector } from "react-redux";

import { loginUser } from "../Redux/slices/AuthSlice";

const SigninForm = () => {
  const router = useRouter();
  const disptach = useDispatch();
  const loading = useSelector((state) => state?.auth?.loading);

  // Login Form Initial Values
  const initialValues = {
    email: "",
    password: "",
  };

  // Error Schema
  const errorSchema = Yup.object().shape({
    email: Yup.string().email().required("Email is required"),
    password: Yup.string().required("Password  is required"),
  });

  // Form Submission
  const handleSubmit = async (values, { resetForm }) => {
    let formData = {
      email: values?.email,
      password: values?.password,
    };
    disptach(loginUser({ formData, router }));
  };

  return (
    <div className="contact-section ptb-100 bg-[#ffffff] dark:bg-[#151719] transition">
      {/* Page header */}
      <div className="max-w-3xl mx-auto text-center pb-12 md:pb-[64px]">
        <h1 className=" text-[#191919] dark:text-[#D9E3EA] font-[800] text-3xl md:text-[40px] lg:text-[3.25rem]">
          Welcome back. We exist to make entrepreneurism easier.
        </h1>
      </div>
      {/* Form */}
      <div className="container max-w-sm mx-auto">
        <Formik
          initialValues={initialValues}
          validationSchema={errorSchema}
          onSubmit={handleSubmit}
        >
          {(formik) => (
            <Form className="w-full">
              <TextField
                type="email"
                label="Email Address"
                name="email"
                placeholder="Enter your email"
              />
              <TextField
                type="password"
                label="Password"
                name="password"
                placeholder="Enter your password"
              />
              <button className="signin-btn default-btn w-full rounded">
                {loading ? <Spinner /> : "Sign In"} <span></span>
              </button>
            </Form>
          )}
        </Formik>
        <p className="text-center mt-3 text-gray-800 text-md dark:text-white">
          Don't you have an account?{" "}
          <span
            className="underline text-blue-400 cursor-pointer"
            onClick={() => router.push("/signup")}
          >
            Sign up
          </span>
        </p>
      </div>
    </div>
  );
};

export default SigninForm;
