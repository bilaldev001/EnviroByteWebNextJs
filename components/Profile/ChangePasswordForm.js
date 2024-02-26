import React, { useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import TextField from "../Shared/InputField";
import Spinner from "../Utils/Spinner";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../Redux/slices/AuthSlice";
import OpenEye from "../../public/images/auth/openeye.svg";
import CloseEye from "../../public/images/auth/closeeye.svg";
import Image from "next/image";

const ChangePasswordForm = () => {
  const disptach = useDispatch();
  const loading = useSelector((state) => state?.auth?.loading);
  const userId = useSelector((state) => state?.auth?.user?.user?.id);
  const [oldPEye, setoldPEye] = useState(false);
  const [newPEye, setnewPEye] = useState(false);
  const [confirmPEye, setconfirmPEye] = useState(false);

  // Form Initial Values
  const initialValues = {
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  };

  // Error Schema
  const errorSchema = Yup.object().shape({
    oldPassword: Yup.string().required("Old password is required"),
    newPassword: Yup.string()
      .min(8, "Password length should be 8")
      .required("New password is required"),
    confirmPassword: Yup.string()
      .oneOf(
        [Yup.ref("newPassword")],
        "Confirm Password doesn't match new password"
      )
      .required("Confirm password is required"),
  });

  // Form Submission
  const handleSubmit = async (values) => {
    let formData = {
      oldPassword: values?.oldPassword,
      newPassword: values?.newPassword,
    };
    disptach(updateUser({ formData, userId }));
  };

  return (
    <div className="dark:bg-[#25282C] bg-[#ffffff] rounded-lg p-4">
      <h1 className=" text-gray-800 dark:text-[#D9E3EA] font-[700] text-2xl mb-4">
        Change Password
      </h1>
      <Formik
        initialValues={initialValues}
        validationSchema={errorSchema}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form className="w-full">
            <div className="grid grid-cols-2 gap-x-4">
              <div className="col-span-2">
                <div className="w-1/2 pe-[0.5rem]">
                  <TextField
                    type={oldPEye ? "text" : "password"}
                    label="Old Password"
                    name="oldPassword"
                    placeholder="Enter your old password"
                    autoComplete={false}
                    righticon={
                      <Image
                        fluid
                        src={oldPEye ? CloseEye : OpenEye}
                        loading="lazy"
                        width={20}
                        height={20}
                        onClick={() => {
                          setoldPEye(!oldPEye);
                        }}
                      />
                    }
                  />
                </div>
              </div>
              <TextField
                type={newPEye ? "text" : "password"}
                label="New Password"
                name="newPassword"
                placeholder="Enter your new password"
                autoComplete={false}
                righticon={
                  <Image
                    fluid
                    src={newPEye ? CloseEye : OpenEye}
                    loading="lazy"
                    width={20}
                    height={20}
                    onClick={() => {
                      setnewPEye(!newPEye);
                    }}
                  />
                }
              />
              <TextField
                type={confirmPEye ? "text" : "password"}
                label="Confirm Password"
                name="confirmPassword"
                placeholder="Confirm your password"
                autoComplete={false}
                righticon={
                  <Image
                    fluid
                    src={confirmPEye ? CloseEye : OpenEye}
                    loading="lazy"
                    width={20}
                    height={20}
                    onClick={() => {
                      setconfirmPEye(!confirmPEye);
                    }}
                  />
                }
              />
            </div>
            <div className="flex justify-end">
              <button type="submit" className="signin-btn default-btn rounded">
                {loading ? <Spinner /> : "Update"} <span></span>
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ChangePasswordForm;
