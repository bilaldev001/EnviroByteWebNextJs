import React from "react";
import { ErrorMessage, useField } from "formik";

const CustomInput = ({ label, righticon, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div className="w-full  mb-3">
      {label && (
        <label
          htmlFor={field.name}
          className="block text-gray-800 text-sm font-medium mb-2 dark:text-white"
        >
          {label}
        </label>
      )}
      <div
        className={`flex items-center justify-between py-0 custom-form-input w-full focus:ring-blue-500 focus:border-blue-500 focus:outline-none dark:focus:ring-blue-500 dark:focus:border-blue-500 ${
          meta.touched && meta.error && "border border-error error-form"
        }`}
      >
        <input
          className={`custom-form-input w-full text-gray-800 dark:text-[#ffffff] px-0 outline-none border-none`}
          {...field}
          {...props}
        />
        {righticon}
      </div>

      <ErrorMessage
        component="p"
        name={field.name}
        className="text-red-500 font-normal text-sm mt-2 capitalize"
      />
    </div>
  );
};

export default CustomInput;
