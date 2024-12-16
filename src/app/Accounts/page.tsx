import React from "react";
import Image from "next/image";
import { FaChevronRight } from "react-icons/fa";
import FooterSection from "../Components/AboveFooter";

const UserAccount = () => {
  return (
    <>
      <div className="relative">
        <Image
          src={"/Spic1.png"}
          alt="hero-image"
          width={1440}
          height={316}
          className="w-full h-auto object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <Image
            src={"/Spic2.png"}
            alt="icon"
            width={77}
            height={77}
            className="w-[7%] md:w-[77px] md:h-[77px]"
          />
          <p className="font-medium text-[24px] sm:text-[36px] md:text-[48px] lg:text-[56px] leading-[36px] sm:leading-[48px] md:leading-[72px] lg:leading-[80px] text-black">
            Account Settings
          </p>
          <div className="text-[12px] sm:text-[16px] text-gray-600 flex items-center space-x-1">
            <p>Home</p>
            <FaChevronRight className="text-gray-800" />
            <p>Account Settings</p>
          </div>
        </div>
      </div>

      {/* Login & Register Section */}
      <section className="py-16 px-6 md:px-16 lg:px-32 bg-[#FBEBB5]">
        <div className="flex flex-wrap justify-center md:justify-evenly gap-12">
          {/* Log In Form */}
          <div className="bg-white p-8 rounded-md w-full max-w-md">
            <h2 className="text-[36px] font-bold mb-8">Log In</h2>
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="email-or-username"
                  className="block mb-4 text-[16px] font-normal"
                >
                  Username or email
                </label>
                <input
                  id="email-or-username"
                  type="text"
                  className="w-full border rounded-md p-5 text-[16px] font-normal"
                />
              </div>
              <div>
                <label
                  htmlFor="user-password"
                  className="block mb-4 text-[16px] font-normal"
                >
                  Password
                </label>
                <input
                  id="user-password"
                  type="password"
                  className="w-full border rounded-md p-5 text-[16px] font-normal"
                />
              </div>
              <div className="flex items-center space-x-2">
                <input type="checkbox" id="remember-me" className="w-4 h-4" />
                <label htmlFor="remember-me" className="text-[16px]">
                  Remember me
                </label>
              </div>
              <div className="flex flex-col md:flex-row gap-4 items-center">
                <button className="w-full md:w-[212px] h-[64px] bg-white text-black border text-[20px] font-normal py-3 rounded-[15px]">
                  Log In
                </button>
                <p className="text-[16px] text-center mt-3 md:mt-0">
                  <a href="#" className="text-gray-500">
                    Forgot Password?
                  </a>
                </p>
              </div>
            </form>
          </div>

          {/* Register Form */}
          <div className="bg-white p-8 rounded-md w-full max-w-md">
            <h2 className="text-[36px] font-bold mb-8">Create Account</h2>
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="email"
                  className="block mb-4 text-[16px] font-normal"
                >
                  Email address
                </label>
                <input
                  id="email"
                  type="email"
                  className="w-full border rounded-md p-5 text-[16px] font-normal"
                />
              </div>
              <p className="text-[16px] text-gray-600 leading-relaxed">
                You will receive a link to set a new password in your inbox.
              </p>
              <p className="text-[16px] text-gray-600 leading-relaxed">
                Your personal information will be used in accordance with our{" "}
                <a href="#" className="text-blue-500 underline">
                  privacy policy.
                </a>
              </p>
              <button className="w-full md:w-[212px] h-[64px] bg-white text-black border text-[20px] font-normal py-3 rounded-[15px]">
                Register Now
              </button>
            </form>
          </div>
        </div>
      </section>

      <FooterSection />
    </>
  );
};

export default UserAccount;