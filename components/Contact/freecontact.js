// Make sure to run npm install @formspree/react
// For more help visit https://formspr.ee/react-help
import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);

function ContactForm() {
  const [state, handleSubmit] = useForm("mjvdqlly");
  if (state.succeeded) {
    return (
      <div className="contact-section ptb-100 dark:bg-[#151719]">
        <div className="container">
          <div className="row align-items-center text-center lg:text-left">
            <div className="col-lg-6">
              <div className="contact-image flex lg:block justify-center">
                <img src="/images/contact.png" alt="image" />
              </div>
            </div>

            <div className="col-lg-6">
              <h2 className="font-[800] text-3xl md:text-[40px] lg:text-[3rem] mb-3 dark:text-[#D9E3EA]">
                Thank you for contacting us!
              </h2>
              <span className="text-[20px]">
                You can also send us an email info@envirobyte.com
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="contact-section ptb-100 dark:bg-[#151719]">
      <div className="max-w-3xl mx-auto text-center pb-12 md:pb-[64px]">
        <h1 className=" text-gray-800 dark:text-[#D9E3EA] font-[800] text-3xl md:text-[40px] lg:text-[3.25rem] mb-3">
          How can we help you?
        </h1>
        <p className="text-[20px] dark:text-[#9BA9B4]">
          We have custom plans to power your business. Tell us your needs, and
          we’ll contact you shortly.
        </p>
      </div>
      <div className="container max-w-sm mx-auto">
        <div className="contact-form">
          <form onSubmit={handleSubmit}>
            <div className="col-lg-12 col-md-12">
              <div className="form-group">
                <label
                  htmlFor="text"
                  className="block text-gray-800 text-sm font-medium mb-2 dark:text-white"
                >
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  className="custom-form-input w-full text-gray-800 dark:text-[#D9E3EA] focus:ring-blue-500 focus:border-blue-500 focus:outline-none dark:focus:ring-blue-500 dark:focus:border-blue-500 false"
                  required
                />
                <ValidationError
                  prefix="Name"
                  field="name"
                  errors={state.errors}
                />
              </div>
            </div>
            <div className="col-lg-12 col-md-12">
              <div className="form-group">
                <label
                  htmlFor="text"
                  className="block text-gray-800 text-sm font-medium mb-2 dark:text-white"
                >
                  Email
                </label>
                <input
                  type="text"
                  name="email"
                  placeholder="Enter your email address"
                  className="custom-form-input w-full text-gray-800 dark:text-[#D9E3EA] focus:ring-blue-500 focus:border-blue-500 focus:outline-none dark:focus:ring-blue-500 dark:focus:border-blue-500 false"
                  required
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
              </div>
            </div>

            <div className="col-lg-12 col-md-12">
              <div className="form-group">
                <label
                  htmlFor="text"
                  className="block text-gray-800 text-sm font-medium mb-2 dark:text-white"
                >
                  Message
                </label>
                <textarea
                  id="text"
                  name="text"
                  cols="30"
                  rows="6"
                  placeholder="Write your message..."
                  className="custom-form-input w-full text-gray-800 dark:text-[#D9E3EA] focus:ring-blue-500 focus:border-blue-500 focus:outline-none dark:focus:ring-blue-500 dark:focus:border-blue-500 false"
                  required
                />
                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                />
              </div>
            </div>
            <div className="col-lg-12 col-sm-12">
              <button type="submit" className="submit-btn mt-2 rounded">
                Send Message!
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
function App() {
  return <ContactForm />;
}
export default App;
