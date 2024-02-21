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
    <div className="container news-letter-container flex flex-col md:flex-row lg:flex-row items-center">
      <div className="section-title w-full md:w-[50%] mt-0 container">
        <h2 className="md:text-start text-white mt-4">Stay in the loop</h2>
        <p className="md:text-start text-white">
          Join our newsletter to get top news before anyone else.
        </p>
      </div>
      <div className="w-full md:w-[50%] mb-2 container flex flex-col md:flex-row lg:flex-row items-center">
        <form className="w-full" onSubmit={handleSubmit}>
          <input
            type="email"
            className="news-letter-input w-full md:w-[60%]"
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
  );
};

export default NewsLetter;
