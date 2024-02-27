import { useState, useEffect } from 'react'
import Link from 'next/link'
import Logo from './logo'
import MobileMenu from './mobile-menu'
import Dropdown from '../../Utils/dropdown'
import { ThemeSwitcher } from '../../Layouts/ThemeSwitcher'

export default function Header() {

  const [top, setTop] = useState(true)
  const scrollHandler = () => {
    window.pageYOffset > 10 ? setTop(false) : setTop(true)
  }  

  useEffect(() => {
    scrollHandler()
    window.addEventListener('scroll', scrollHandler)
    return () => window.removeEventListener('scroll', scrollHandler)
  }, [top])

  return (
    <header
      className={`fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out ${
        !top
          ? "bg-[#ffffff] dark:bg-[#000000a8] backdrop-blur-sm shadow-lg"
          : ""
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Site branding */}
          <div className="shrink-0 mr-4">
            <Logo />
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">
            {/* Desktop menu links */}
            <ul className="flex grow justify-end flex-wrap items-center">
              <li>
                <Link
                  href="/pricing"
                  className="text-gray-600 dark:text-[#9BA9B4] hover:text-gray-900 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-600 dark:text-[#9BA9B4] hover:text-gray-900 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out"
                >
                  About us
                </Link>
              </li>
              <li>
                <Link
                  href="/tutorials"
                  className="text-gray-600 dark:text-[#9BA9B4] hover:text-gray-900 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out"
                >
                  Tutorials
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-gray-600 dark:text-[#9BA9B4] hover:text-gray-900 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out"
                >
                  Blog
                </Link>
              </li>
              {/* 1st level: hover */}
              <Dropdown title="Resources">
                {/* 2nd level: hover */}
                <li>
                  <Link
                    href="/documentation"
                    className="font-medium text-sm text-gray-600 dark:text-[#9BA9B4] hover:text-gray-900 flex py-2 px-5 leading-tight"
                  >
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link
                    href="/support"
                    className="font-medium text-sm text-gray-600 dark:text-[#9BA9B4] hover:text-gray-900 flex py-2 px-5 leading-tight"
                  >
                    Support center
                  </Link>
                </li>
                <li>
                  <Link
                    href="/404"
                    className="font-medium text-sm text-gray-600 dark:text-[#9BA9B4] hover:text-gray-900 flex py-2 px-5 leading-tight"
                  >
                    404
                  </Link>
                </li>
              </Dropdown>
            </ul>

            {/* Desktop sign in links */}
            <ul className="flex grow justify-end flex-wrap items-center">
              <li>
                <Link
                  href="/signin"
                  className="font-medium text-gray-600 dark:text-[#9BA9B4] hover:text-gray-900 px-3 py-3 flex items-center transition duration-150 ease-in-out"
                >
                  Sign in
                </Link>
              </li>
              <li>
                <Link
                  href="/signup"
                  className="btn-sm flex items-center rounded text-gray-200 bg-gray-900 dark:text-[#191919] dark:bg-[#D9E3EA] hover:bg-gray-800 px-[16px] py-[8px] ml-3"
                >
                  <span>Sign up</span>
                  <svg
                    className="w-3 h-3 fill-current text-gray-400 dark:text-[#191919] shrink-0 ml-2 -mr-1"
                    viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z"
                      fillRule="nonzero"
                    />
                  </svg>
                </Link>
              </li>
            </ul>

            <ThemeSwitcher />
          </nav>

          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
