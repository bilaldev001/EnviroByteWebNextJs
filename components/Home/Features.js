import Image from "next/image";
import FeatIllustration from "../../public/images/features-illustration.png";
import FeatAvatar from "../../public/images/features-avatar.jpg";

export default function Features() {
  return (
    <section className="dark:bg-[#151719] transition">
      <div className="container">
        <div className="py-12 md:py-20 border-b border-gray-800">
          {/* Items */}
          <div className="grid gap-20" data-aos-id-features-home>
            {/* Item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div
                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1"
                data-aos="fade-up"
                data-aos-anchor="[data-aos-id-features-home]"
              >
                <div className="relative">
                  <Image
                    className="md:max-w-none w-full"
                    src={FeatIllustration}
                    width={540}
                    height={520}
                    alt="Features illustration"
                  />
                  <svg
                    className="absolute inset-0 max-w-full mx-auto md:max-w-none h-auto w-full"
                    width="540"
                    height="520"
                    viewBox="0 0 540 520"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g className="fill-current text-[#00b0ee]">
                      <circle className="pulse" cx="270" cy="260" r="64" />
                      <circle
                        className="pulse pulse-1"
                        cx="270"
                        cy="260"
                        r="64"
                      />
                      <circle
                        className="pulse pulse-2"
                        cx="270"
                        cy="260"
                        r="64"
                      />
                      <circle
                        className="pulse pulse-3"
                        cx="270"
                        cy="260"
                        r="64"
                      />
                    </g>
                  </svg>
                </div>
              </div>
              {/* Content */}
              <div
                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6"
                data-aos="fade-right"
                data-aos-anchor="[data-aos-id-features-home]"
              >
                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                  <div className="font-architects-daughter text-[#666666] dark:text-[#9BA9B4] mb-2 text-[16px]">
                    Lighting fast workflow
                  </div>
                  <h3 className="h3 mb-3 text-2xl sm:text-3xl font-bold text-[#191919] dark:text-[#ffffff]">
                    Say hello to research data
                  </h3>
                  <p className="text-[18px] text-[#666666] dark:text-[#9BA9B4] mb-4">
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore pariatur. Excepteur sint occaecat
                    cupidatat non proident, sunt in culpa.
                  </p>
                  <ul className="flex flex-wrap text-lg text-[#666666] dark:text-[#9BA9B4] -mx-2 -my-1">
                    <li className="flex items-center mx-2 my-1">
                      <svg
                        className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span className="text-[18px]">Premium statistics</span>
                    </li>
                    <li className="flex items-center mx-2 my-1">
                      <svg
                        className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span className="text-[18px]">Unlimited jobs</span>
                    </li>
                    <li className="flex items-center mx-2 my-1">
                      <svg
                        className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span className="text-[18px]">Free goods</span>
                    </li>
                    <li className="flex items-center mx-2 my-1">
                      <svg
                        className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span className="text-[18px]">No code required</span>
                    </li>
                    <li className="flex items-center mx-2 my-1">
                      <svg
                        className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span className="text-[18px]">Always up to date</span>
                    </li>
                  </ul>
                  <div className="flex items-start mt-8">
                    <Image
                      className="rounded-full shrink-0 mr-4"
                      src={FeatAvatar}
                      width={40}
                      height={40}
                      alt="Features avatar"
                    />
                    <div>
                      <span className="text-[#666666] dark:text-[#9BA9B4] text-[16px] italic m-0 mb-3 dark:bg-[#151719]">
                        "Lorem ipsum is placeholder text commonly used in the
                        graphic, print, and publishing".
                      </span>
                      <div className="text-gray-700 font-medium mt-3">
                        <cite className="text-gray-700 dark:text-gray-200 not-italic">
                          — Anastasia Dan
                        </cite>{" "}
                        -{" "}
                        <a
                          className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out"
                          href="#0"
                        >
                          UX Board
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
