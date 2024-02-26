import React from "react";

const GoogleSignIn = () => {
  return (
    <div className="container max-w-sm mx-auto">
      <div className="flex items-center bg-red-600 py-[10px] rounded-[0.25rem] cursor-pointer hover:bg-red-800">
        <div className="w-[20%] border-r boder-r-[#fff] flex items-center justify-center">
          <svg
            class="c05hy cvikk cyw76 cl0mz cgsfr cvauf cjr21"
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="#fff"
          >
            <path d="M7.9 7v2.4H12c-.2 1-1.2 3-4 3-2.4 0-4.3-2-4.3-4.4 0-2.4 2-4.4 4.3-4.4 1.4 0 2.3.6 2.8 1.1l1.9-1.8C11.5 1.7 9.9 1 8 1 4.1 1 1 4.1 1 8s3.1 7 7 7c4 0 6.7-2.8 6.7-6.8 0-.5 0-.8-.1-1.2H7.9z"></path>
          </svg>
        </div>
        <p className="text-white text-center w-full">Sign In with Google</p>
      </div>
      <div className="my-2 flex items-center">
        <span className="border border-dotted border-white flex-grow-1 "></span>
        <p className="text-center px-2 mb-0 dark:text-white">
          Or, sign in with your email
        </p>
        <span className="border border-dotted border-white flex-grow-1 "></span>
      </div>
    </div>
  );
};

export default GoogleSignIn;
