import React, { useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/router";
import axios from "axios";
import TextField from "../Shared/InputField";
import Spinner from "../Utils/Spinner";
import { toast } from "react-toastify";

const SigninForm = () => {
  const [isLoading, setLoading] = useState(false);
  const router = useRouter();
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
    try {
      let formData = {
        email: values?.email,
        password: values?.password,
      };
      setLoading(true);
      const response = await axios.post("/api/auth/signin", formData);
      toast.success(response?.data?.message);
      setLoading(false);
      resetForm({
        values: "",
      });
    } catch (error) {
      console.log(error.response?.data?.message);
      toast.error(error.response?.data?.message);
      setLoading(false);
    }
  };

  return (
    <div className="contact-section ptb-100 bg-[#ffffff] dark:bg-[#282828] transition">
      {/* Page header */}
      <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
        <h1 className=" text-gray-800 dark:text-[#ffffff] font-[800] text-3xl md:text-[40px] lg:text-[3.25rem]">
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
                {isLoading ? <Spinner /> : "Sign In"} <span></span>
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
