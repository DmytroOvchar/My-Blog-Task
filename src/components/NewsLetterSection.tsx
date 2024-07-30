"use client";
import { useState } from "react";

import IconMail from "./icons/IconMail";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    alert(email);
    setEmail("");
  };

  return (
    <div className="bg-white w-[392px] rounded-xl py-8 px-9 flex flex-col justify-between gap-8">
      <div>
        <h3 className="text-xl leading-6 font-semibold text-center text-[#181A2A] mb-2">
          Weekly Newsletter
        </h3>
        <p className="text-[#696A75] text-center">
          Get blog articles and offers via email.
        </p>
      </div>
      <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
        <div className="relative">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full py-3 pl-4 pr-[46px] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 border border-[#DCDDDF]"
            placeholder="Your Email"
          />
          <IconMail />
        </div>
        <button
          type="submit"
          className="w-full p-3 bg-[#4B6BFB] text-white rounded-md hover:bg-[#4264fd]"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default NewsletterSection;
