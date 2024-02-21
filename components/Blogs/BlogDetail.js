import React, { useEffect, useState, Fragment, useRef } from "react";
import DummyBlogs from "./DummyBlogs.json";
import BlogCard from "./BlogCard";
import { Dialog, Transition } from "@headlessui/react";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/router";

const tagColor = (tag) => {
  switch (tag) {
    case "history":
      return "text-gray-100 bg-blue-500 hover:bg-blue-600";
    case "american":
      return "text-gray-100 bg-pink-500 hover:bg-pink-600";
    case "crime":
      return "text-gray-100 bg-teal-500 hover:bg-teal-600";
    case "french":
      return "text-gray-100 bg-green-500 hover:bg-green-600";
    default:
      return "text-gray-100 bg-purple-600 hover:bg-purple-700";
  }
};

const BlogDetail = (props) => {
  const { blogData } = props;
  const [validation, setValidation] = useState();
  const router = useRouter();

  useEffect(() => {
    const handleSubmit = async () => {
      try {
        const response = await axios.post("/api/blogs");
        setValidation(response?.data?.validation);
      } catch (error) {
        setValidation(false);
        console.error(error);
      }
    };

    if (router.isReady) {
      handleSubmit();
    }
  }, [router.query]);

  const handleNavigation = () => {
    setValidation(false);
    router.push("/signup");
  };

  return (
    <div className="bg-[#ffffff] dark:bg-[#282828] transition">
      <div
        className={`container mx-auto pt-100 pb-70 ${
          !validation === undefined
            ? ""
            : validation === false
            ? "blur-md invert brightness-50"
            : ""
        }`}
      >
        <div className="pb-70 bg-[#ffffff] dark:bg-[#282828] transition">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-start gap-2 flex-wrap text-xs font-medium">
              {blogData?.tags?.length &&
                blogData?.tags.map((data, index) => (
                  <div
                    key={index}
                    className={`inline-flex text-center py-1 px-3 rounded-full transition duration-150 ease-in-out ${tagColor(
                      data
                    )}`}
                  >
                    <p className="mb-0 text-white text-[12px]">{data}</p>
                  </div>
                ))}
            </div>
          </div>
          <div className="d-flex justify-start items-start gap-4">
            <div className="md:w-[40%]">
              <img
                src={blogData?.bImage}
                className="w-full h-[250px] rounded"
                alt="title"
                quality={100}
                loading="lazy"
              />
            </div>
            <div className="md:w-[60%]">
              <h1 className="text-[2rem] text-[#0e3496] mb-2 dark:text-[#ffffff]">
                {blogData?.title}
              </h1>
              <p className="blog-description text-justify">{blogData?.body}</p>
              <div className="flex align-items-center mt-3">
                <img
                  src="https://preview.cruip.com/open-pro/images/news-author-06.jpg"
                  alt="user-img"
                  className="w-[50px] h-[50px] rounded-full"
                />
                <h5 className="mx-3 dark:text-[#ffffff]">Dummy User</h5>
                <p>{new Date().toLocaleDateString()}</p>
              </div>
            </div>
          </div>
        </div>
        <h1 className="text-3xl border-y py-3 mb-3 dark:text-[#ffffff] dark:border-gray-700">
          More
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
          {DummyBlogs.data.length &&
            DummyBlogs.data
              .slice(0, 3)
              .map((data, index) => <BlogCard data={data} key={index} />)}
        </div>
      </div>
      <Transition.Root
        show={
          validation === undefined ? false : validation === false ? true : false
        }
        as={Fragment}
      >
        <Dialog
          as="div"
          className="relative z-10"
          initialFocus={
            validation === undefined
              ? false
              : validation === false
              ? true
              : false
          }
          onClose={() => {}}
          static
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-[#ffffff] dark:bg-[#282828] text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                  <div className="bg-[#ffffff] dark:bg-[#282828]">
                    <div className="p-4">
                      <Dialog.Title
                        as="h2"
                        className="text-xl font-semibold leading-6 text-gray-900 dark:text-[#ffffff] text-center"
                      >
                        You've reached the limit
                      </Dialog.Title>
                      <div className="py-4 sm:py-6">
                        <p className="text-sm text-gray-500">
                          Please signup to read more.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 dark:bg-[#282828] px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                    <Link
                      href="/signup"
                      type="button"
                      className="inline-flex w-full justify-center rounded-md bg-[#00b0ee] px-3 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-[#0a58ca] sm:ml-3 sm:w-auto"
                      onClick={() => handleNavigation()}
                    >
                      Sign up
                    </Link>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </div>
  );
};

export default BlogDetail;