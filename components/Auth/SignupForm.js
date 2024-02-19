import React, { useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/router";
import TextField from "../Shared/InputField";
import axios from "axios";
import Spinner from "../Utils/Spinner";
import { toast } from "react-toastify";

const SignupForm = () => {
  const router = useRouter();
  const [isLoading, setLoading] = useState(false);

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
    try {
      let formData = {
        username: values?.name,
        email: values?.email,
        password: values?.password,
      };
      setLoading(true);
      const response = await axios.post("/api/auth/signup", formData);
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
    <div className="contact-section ptb-100 bg-white">
      {/* Page header */}
      <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
        <h1 className=" text-gray-800 font-[800] text-3xl md:text-[40px] lg:text-[3.25rem]">
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
                {isLoading ? <Spinner /> : "Sign Up"} <span></span>
              </button>
            </Form>
          )}
        </Formik>
        <p className="text-center mt-3 text-gray-800 text-md">
          Already have an account?{" "}
          <span
            className="underline text-blue-400 cursor-pointer"
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
