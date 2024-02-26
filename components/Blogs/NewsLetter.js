import axios from "axios";
import React, { useRef, useState } from "react";
import { toast } from "react-toastify";
import Spinner from "../Utils/Spinner";

const NewsLetter = () => {
  const [isLoading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(email);
      setLoading(true);
      const response = await axios.post("/api/newsletter", email);
      setLoading(false);
      toast.success(response?.data?.message);
    } catch (error) {
      console.log(error.response?.data?.message);
      toast.error(error.response?.data?.message);
      setLoading(false);
    }
  };
  return (
    <section className="container">
      <div className="news-letter-container flex flex-col md:flex-row lg:flex-row items-center py-[64px] px-[48px] mt-0">
        <div className="section-title w-full md:w-[50%] m-0 container">
          <h1 className="md:text-start text-white text-[32px] mb-2">
            Stay in the loop
          </h1>
          <p className="md:text-start text-white text-[18px] leading-7">
            Join our newsletter to get top news before anyone else.
          </p>
        </div>
        <div className="w-full md:w-[50%] mb-2 container flex flex-col md:flex-row lg:flex-row items-center">
          <form className="w-full" onSubmit={handleSubmit}>
            <input
              type="email"
              className="news-letter-input w-full md:w-[60%] text-white"
              placeholder="Your best email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              type="submit"
              className="default-btn subscribe-btn my-2 md:my-0 md:ms-3 px-4 sm:mx-auto md:mx-0 inline-block"
            >
              {isLoading ? <Spinner /> : "Subscribe"} <span></span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default NewsLetter;
