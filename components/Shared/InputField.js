import React from "react";
import { ErrorMessage, useField } from "formik";

const CustomInput = ({ label, ...props }) => {
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
      <input
        className={`custom-form-input w-full text-gray-800  focus:ring-blue-500 focus:border-blue-500 focus:outline-none dark:focus:ring-blue-500 dark:focus:border-blue-500 ${
          meta.touched && meta.error && "border border-error error-form"
        }`}
        {...field}
        {...props}
      />
      <ErrorMessage
        component="p"
        name={field.name}
        className="text-red-500 font-normal text-sm mt-2 capitalize"
      />
    </div>
  );
};

export default CustomInput;
