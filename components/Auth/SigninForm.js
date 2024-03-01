import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/router";
import TextField from "../Shared/InputField";
import Spinner from "../Utils/Spinner";
import { useDispatch, useSelector } from "react-redux";

import { loginUser } from "../Redux/slices/AuthSlice";
import GoogleSignIn from "./GoogleSignIn";

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
    <div className="pb-100 pt-[10rem] bg-[#ffffff] dark:bg-[#151719] transition min-h-[100vh] flex flex-column justify-center">
      {/* Page header */}
      <div className="max-w-3xl mx-auto text-center pb-12 md:pb-[64px] auth-page-header">
        <h1 className="text-[#393953] dark:text-[#D9E3EA] font-[800] text-2xl md:text-[40px] lg:text-[3.25rem] px-2">
          Welcome back. We exist to make entrepreneurism easier.
        </h1>
      </div>
      {/* <GoogleSignIn
        btnText="Sign In with Google"
        text="Or, sign in with your email"
      /> */}
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
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center ">
                  <input type="checkbox" className="" />
                  <label className="text-gray-800 text-sm font-medium ms-1 dark:text-white">
                    Keep me signed in
                  </label>
                </div>
                <p className="text-[#5d5dff] cursor-pointer">
                  Forgot Password?
                </p>
              </div>
              <button className="signin-btn default-btn w-full rounded">
                {loading ? <Spinner /> : "Sign In"} <span></span>
              </button>
            </Form>
          )}
        </Formik>
        <p className="text-center mt-3 text-gray-800 text-md dark:text-white">
          Don't you have an account?{" "}
          <span
            className="underline text-[#5d5dff] cursor-pointer"
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
