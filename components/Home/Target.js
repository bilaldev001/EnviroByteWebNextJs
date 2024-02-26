import Image from "next/image";
import TargetImage from "../../public/images/features-02-image.png";

export default function Target() {
  return (
    <section className="dark:bg-[#151719] transition">
      <div className="container border-t border-gray-800">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className=" text-center pb-12 md:pb-20">
            <h2
              className="text-2xl sm:text-3xl md:text-4xl text-[#191919] dark:text-[#D9E3EA] font-bold"
              data-aos="fade-up"
            >
              From the big picture to every tiny detail, we got you covered.
            </h2>
          </div>

          {/* Items */}
          <div className="grid gap-20" data-aos-id-target>
            {/* Item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div
                className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-4 lg:col-span-5 xl:col-span-6 mb-8 md:mb-0 rtl"
                data-aos="fade-up"
                data-aos-delay="200"
                data-aos-anchor="[data-aos-id-target]"
              >
                <Image
                  className="mx-auto md:max-w-none w-full"
                  src={TargetImage}
                  width={540}
                  height={520}
                  alt="Features 02"
                />
              </div>

              {/* Content */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6">
                <div className="md:pl-4 lg:pl-12 xl:pl-16">
                  <div
                    className="font-architects-daughter text-[#666666] dark:text-[#9BA9B4] mb-2"
                    data-aos="fade-up"
                    data-aos-anchor="[data-aos-id-target]"
                  >
                    Be the change you want to see
                  </div>
                  <div
                    className="mt-6"
                    data-aos="fade-up"
                    data-aos-delay="200"
                    data-aos-anchor="[data-aos-id-target]"
                  >
                    <h4 className="h4 mb-2 font-bold dark:text-white">
                      <span className="text-purple-600">.</span> For developers
                    </h4>
                    <p className="text-lg text-gray-400">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </div>
                  <div
                    className="mt-6"
                    data-aos="fade-up"
                    data-aos-delay="400"
                    data-aos-anchor="[data-aos-id-target]"
                  >
                    <h4 className="h4 mb-2 font-bold dark:text-white">
                      <span className="text-teal-500">.</span> For designers
                    </h4>
                    <p className="text-lg text-gray-400">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </div>
                  <div
                    className="mt-6"
                    data-aos="fade-up"
                    data-aos-delay="600"
                    data-aos-anchor="[data-aos-id-target]"
                  >
                    <h4 className="h4 mb-2 font-bold dark:text-white">
                      <span className="text-pink-500">.</span> For teams
                    </h4>
                    <p className="text-lg text-gray-400">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
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
