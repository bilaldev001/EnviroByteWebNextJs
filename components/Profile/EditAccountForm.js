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
    email: userData?.email,
  };

  // Error Schema
  const errorSchema = Yup.object().shape({
    username: Yup.string().required("Name is required"),
  });

  // Form Submission
  const handleSubmit = async (values) => {
    let formData = {
      username: values?.username,
    };
    disptach(updateUser({ formData, userId }));
  };

  return (
    <div className="dark:bg-[#25282C] bg-[#ffffff] rounded-lg p-4">
      <h1 className=" text-gray-800 dark:text-[#D9E3EA] font-[700] text-2xl mb-4">
        Edit Account
      </h1>
      <Formik
        initialValues={initialValues}
        validationSchema={errorSchema}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form className="w-full">
            <div className="grid grid-cols-2 gap-x-4">
              <TextField
                type="email"
                label="Email"
                name="email"
                placeholder=""
                readOnly
                autoComplete={false}
              />
              <TextField
                type="text"
                label="Name"
                name="username"
                placeholder="Enter your name"
                autoComplete={false}
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
