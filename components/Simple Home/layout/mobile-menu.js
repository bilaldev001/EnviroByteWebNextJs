import React, { useState, useRef, useEffect } from 'react';
import { Transition } from '@headlessui/react';
import Link from 'next/link';

export default function MobileMenu() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const trigger = useRef(null);
  const mobileNav = useRef(null);

  // close the mobile menu on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!mobileNav.current || !trigger.current) return;
      if (!mobileNavOpen || mobileNav.current.contains(target) || trigger.current.contains(target)) return;
      setMobileNavOpen(false);
    };

    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  }, [mobileNavOpen]);

  // close the mobile menu if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (mobileNavOpen && keyCode === 27) {
        setMobileNavOpen(false);
      }
    };

    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  }, [mobileNavOpen]);

  return (
    <div className="flex md:hidden">
      {/* Hamburger button */}
      <button
        ref={trigger}
        className={`hamburger ${mobileNavOpen && "active"}`}
        aria-controls="mobile-nav"
        aria-expanded={mobileNavOpen}
        onClick={() => setMobileNavOpen(!mobileNavOpen)}
      >
        <span className="sr-only">Menu</span>
        <svg
          className="w-6 h-6 fill-current text-gray-900 dark:text-[#9BA9B4]"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect y="4" width="24" height="2" />
          <rect y="11" width="24" height="2" />
          <rect y="18" width="24" height="2" />
        </svg>
      </button>

      {/*Mobile navigation */}
      <div ref={mobileNav}>
        <Transition
          show={mobileNavOpen}
          as="nav"
          id="mobile-nav"
          className="absolute top-full h-screen pb-16 z-20 left-0 w-full overflow-auto bg-[#ffffff] dark:bg-[#151719]"
          enter="transition ease-out duration-200 transform"
          enterFrom="opacity-0 -translate-y-2"
          enterTo="opacity-100 translate-y-0"
          leave="transition ease-out duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <ul className="px-5 py-2">
            <li>
              <Link
                href="/pricing"
                className="flex text-gray-600 hover:text-gray-900 py-2"
                onClick={() => setMobileNavOpen(false)}
              >
                Pricing
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="flex text-gray-600 hover:text-gray-900 py-2"
                onClick={() => setMobileNavOpen(false)}
              >
                About us
              </Link>
            </li>
            <li>
              <Link
                href="/tutorials"
                className="flex text-gray-600 hover:text-gray-900 py-2"
                onClick={() => setMobileNavOpen(false)}
              >
                Tutorials
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                className="flex text-gray-600 hover:text-gray-900 py-2"
                onClick={() => setMobileNavOpen(false)}
              >
                Blog
              </Link>
            </li>
            <li className="py-2 my-2 border-t border-b border-gray-200 dark:border-gray-700">
              <span
                className="flex text-gray-600 hover:text-gray-900 py-2"
                onClick={() => setMobileNavOpen(false)}
              >
                Resources
              </span>
              <ul className="pl-4">
                <li>
                  <Link
                    href="/documentation"
                    className="text-sm flex font-medium text-gray-600 hover:text-gray-900 py-2"
                    onClick={() => setMobileNavOpen(false)}
                  >
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link
                    href="/support"
                    className="text-sm flex font-medium text-gray-600 hover:text-gray-900 py-2"
                    onClick={() => setMobileNavOpen(false)}
                  >
                    Support center
                  </Link>
                </li>
                <li>
                  <Link
                    href="/404"
                    className="text-sm flex font-medium text-gray-600 hover:text-gray-900 py-2"
                    onClick={() => setMobileNavOpen(false)}
                  >
                    404
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link
                href="/signin"
                className="flex font-medium w-full text-gray-600 hover:text-gray-900 py-2 justify-center"
                onClick={() => setMobileNavOpen(false)}
              >
                Sign in
              </Link>
            </li>
            <li>
              <Link
                href="/signup"
                className="btn-sm flex items-center justify-center rounded text-gray-200 bg-gray-900 dark:text-[#191919] dark:bg-[#D9E3EA] hover:bg-gray-800 px-[16px] py-[8px] ml-3"
                onClick={() => setMobileNavOpen(false)}
              >
                <span>Sign up</span>
                <svg
                  className="w-3 h-3 fill-current text-gray-400 shrink-0 ml-2 -mr-1"
                  viewBox="0 0 12 12"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z"
                    fill="#999"
                    fillRule="nonzero"
                  />
                </svg>
              </Link>
            </li>
          </ul>
        </Transition>
      </div>
    </div>
  );
}
