import React from "react";

const GoogleSignIn = ({ btnText, text }) => {
  return (
    <div className="container max-w-sm mx-auto mb-2">
      <div className="flex items-center bg-red-600 py-[10px] rounded-[0.25rem] cursor-pointer hover:bg-red-800">
        <div className="w-[20%] border-r boder-r-[#fff] flex items-center justify-center">
          <svg
            className="w-4 h-4 fill-current text-white opacity-75 shrink-0 mx-4"
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M7.9 7v2.4H12c-.2 1-1.2 3-4 3-2.4 0-4.3-2-4.3-4.4 0-2.4 2-4.4 4.3-4.4 1.4 0 2.3.6 2.8 1.1l1.9-1.8C11.5 1.7 9.9 1 8 1 4.1 1 1 4.1 1 8s3.1 7 7 7c4 0 6.7-2.8 6.7-6.8 0-.5 0-.8-.1-1.2H7.9z" />
          </svg>
        </div>
        <p className="text-white text-center w-full">{btnText}</p>
      </div>
      <div className="my-3 flex items-center">
        <span className="border-dotted border-[1px] border-[#737b9a] dark:border-white d flex-grow-1 opacity-50"></span>
        <p className="text-center px-2 mb-0 dark:text-white">{text}</p>
        <span className="border-dotted border-[1px] border-[#737b9a] dark:border-white d flex-grow-1 opacity-50"></span>
      </div>
    </div>
  );
};

export default GoogleSignIn;
