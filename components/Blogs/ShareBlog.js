import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import {
  EmailIcon,
  EmailShareButton,
  LinkedinIcon,
  LinkedinShareButton,
} from "react-share";

export default function ShareBlog({ data }) {
  const shareUrl = window.location.href;
  return (
    <>
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="rounded-full bg-[#5d5dff] w-[40px] h-[40px] flex items-center justify-center">
            <i className="fa-solid fa-share fa-lg text-white"></i>
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-[#ffffff] dark:bg-[#151719] shadow-lg ring-1 ring-black/5 focus:outline-none">
            <div className="px-1 py-1 ">
              <Menu.Item>
                <div>
                  <LinkedinShareButton
                    url={`${shareUrl}${data?.id}`}
                    title={data?.title}
                    className={` dark:text-[#D9E3EA] text-[#393953] hover:text-[#ffffff] group flex w-full items-center gap-2 rounded-md px-2 py-2 text-sm hover:bg-[#5d5dff]`}
                  >
                    <LinkedinIcon size={32} round />
                    <span>Share to LinkedIn</span>
                  </LinkedinShareButton>
                  <EmailShareButton
                    url={`${shareUrl}${data?.id}`}
                    subject={data?.title}
                    body={data?.description}
                    className={` dark:text-[#D9E3EA] text-[#393953] hover:text-[#ffffff] group flex w-full items-center gap-2 rounded-md px-2 py-2 text-sm hover:bg-[#5d5dff]`}
                  >
                    <EmailIcon size={32} round />
                    <span>Share to Email</span>
                  </EmailShareButton>
                </div>
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </>
  );
}
