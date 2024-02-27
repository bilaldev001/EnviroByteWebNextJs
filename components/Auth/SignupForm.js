import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/router";
import TextField from "../Shared/InputField";
import Spinner from "../Utils/Spinner";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../Redux/slices/AuthSlice";
import GoogleSignIn from "./GoogleSignIn";

const SignupForm = () => {
  const router = useRouter();
  const disptach = useDispatch();
  const loading = useSelector((state) => state?.auth?.loading);

  // Sign Up Form Initial Values
  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  // Error Schema
  const errorSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email().required("Email is required"),
    password: Yup.string().required("Password  is required"),
  });

  // Form Submission
  const handleSubmit = async (values, { resetForm }) => {
    let formData = {
      username: values?.name,
      email: values?.email,
      password: values?.password,
    };
    disptach(registerUser({ formData, router }));
  };

  return (
    <div className="ptb-100 bg-[#ffffff] dark:bg-[#151719] min-h-[100vh] flex flex-column justify-center">
      {/* Page header */}
      <div className="max-w-3xl mx-auto text-center pb-12 md:pb-[64px] auth-page-header">
        <h1 className=" text-[#393953] dark:text-[#D9E3EA] font-[800] text-2xl md:text-[40px] lg:text-[3.25rem] px-2">
          Welcome back. We exist to make entrepreneurism easier.
        </h1>
      </div>
      <GoogleSignIn
        btnText="Sign Up with Google"
        text="Or, register with your email"
      />
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
                type="text"
                label="Name"
                name="name"
                placeholder="Enter your name"
              />
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
                {loading ? <Spinner /> : "Sign Up"} <span></span>
              </button>
            </Form>
          )}
        </Formik>
        <p className="text-center mt-3 text-gray-800 text-md dark:text-white">
          Already have an account?{" "}
          <span
            className="underline text-[#5d5dff] cursor-pointer"
            onClick={() => router.push("/signin")}
          >
            Sign In
          </span>
        </p>
      </div>
    </div>
  );
};

export default SignupForm;
