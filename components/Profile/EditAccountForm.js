import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/router";
import TextField from "../Shared/InputField";
import Spinner from "../Utils/Spinner";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../Redux/slices/AuthSlice";

const EditAccountForm = () => {
  const disptach = useDispatch();
  const loading = useSelector((state) => state?.auth?.loading);
  const userData = useSelector((state) => state?.auth?.user?.user);
  const userId = useSelector((state) => state?.auth?.user?.user?.id);

  // Form Initial Values
  const initialValues = {
    username: userData?.username,
    password: "",
  };

  // Error Schema
  const errorSchema = Yup.object().shape({
    username: Yup.string().required("Name is required"),
    password: Yup.string(),
  });

  // Form Submission
  const handleSubmit = async (values) => {
    let formData = {
      username: values?.username,
      password: values?.password,
    };
    disptach(updateUser({ formData, userId }));
  };

  return (
    <div className="dark:bg-[#25282C] bg-[#ffffff] rounded-lg p-4">
      <h1 className=" text-gray-800 dark:text-[#ffffff] font-[700] text-2xl mb-4">
        Edit Account
      </h1>
      <Formik
        initialValues={initialValues}
        validationSchema={errorSchema}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form className="w-full">
            <div className="grid grid-cols-2 gap-3">
              <TextField
                type="text"
                label="Name"
                name="username"
                placeholder="Enter your name"
                autocomplete={true}
              />
              <TextField
                type="password"
                label="Password"
                name="password"
                placeholder="Enter your password"
                autocomplete={false}
              />
            </div>
            <div className="flex justify-end">
              <button type="submit" className="signin-btn default-btn rounded">
                {loading ? <Spinner /> : "Confirm"} <span></span>
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default EditAccountForm;
