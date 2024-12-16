import React from "react";
import Image from "next/image";
import { ImBin2 } from "react-icons/im";
import { FaChevronRight } from "react-icons/fa6";
import AboveFooter from "../Components/AboveFooter";
import Link from "next/link";

const CartPage = () => {
  return (
    <>
      {/* Header Section */}
      <div className="relative">
        <Image
          src={"/Spic1.png"}
          alt="Header Image"
          width={1440}
          height={316}
          className="w-full min-h-[200px] lg:min-h-[350px] object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <Image
            src={"/Spic2.png"}
            alt="Cart Icon"
            width={77}
            height={77}
            className="w-[7%] md:w-[77px] md:h-[77px]"
          />
          <h1 className="font-medium text-[24px] sm:text-[36px] md:text-[48px] lg:text-[56px] text-black leading-snug">
            Cart
          </h1>
          <div className="text-[12px] sm:text-[16px] text-gray-600 flex items-center space-x-1">
            <p>Home</p>
            <FaChevronRight className="text-gray-800" />
            <p>Cart</p>
          </div>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="max-w-screen-xl h-[525px] bg-white flex justify-center items-center px-4 py-6">
        <div className="w-full md:w-[1240px] flex flex-col md:flex-row gap-4 sm:gap-6 md:gap-8">
          
          {/* Left Section: Cart Items */}
          <div className="w-full md:w-[60%] bg-white rounded-md p-4">
            <div className="w-full py-3 bg-[#FFF9E5] rounded-md px-4 sm:px-8 mt-11">
              <ul className="flex justify-between flex-wrap sm:flex-nowrap">
                <li className="text-[14px] sm:text-[16px] font-semibold">Product</li>
                <li className="text-[14px] sm:text-[16px] font-semibold">Price</li>
                <li className="text-[14px] sm:text-[16px] font-semibold">Quantity</li>
                <li className="text-[14px] sm:text-[16px] font-semibold">Subtotal</li>
              </ul>
            </div>

            <div className="flex flex-wrap md:flex-nowrap gap-4 sm:gap-6 mt-4 items-center bg-white">
              {/* Product Image */}
              <div className="w-[106px] h-[106px] rounded-lg bg-[#FBEBB5] flex items-center justify-center">
                <Image
                  src="/pic8.png"
                  alt="Product Image"
                  width={100}
                  height={100}
                  className="object-contain"
                />
              </div>

              {/* Product Details */}
              <div className="flex flex-col md:flex-row md:justify-between gap-4 w-full items-start">
                <ul className="flex flex-col md:flex-row justify-between w-full gap-2">
                  <li className="text-[#9F9F9F] text-[12px] sm:text-[14px] md:text-[16px]">
                    Asgaard Sofa
                  </li>
                  <li className="text-[#9F9F9F] text-[12px] sm:text-[14px] md:text-[16px]">
                    Rs. 250,000.00
                  </li>
                  <li className="text-[#9F9F9F] text-[12px] sm:text-[14px] md:text-[16px]">
                    1
                  </li>
                  <li className="text-[#9F9F9F] text-[12px] sm:text-[14px] md:text-[16px]">
                    Rs. 250,000.00
                  </li>
                </ul>
                <div className="mt-2 sm:mt-0">
                  <ImBin2 className="text-[#FBEBB5] text-base sm:text-lg md:text-xl" />
                </div>
              </div>
            </div>
          </div>

          {/* Right Section: Cart Totals */}
          <div className="w-full md:w-[35%] bg-[#FFF9E5] rounded-md p-4">
            <h2 className="text-center text-[20px] sm:text-[24px] md:text-[28px] text-black">
              Cart Totals
            </h2>

            <div className="flex flex-col gap-4 sm:gap-6 mt-4">
              {/* Subtotal */}
              <div className="flex justify-between">
                <h3 className="text-[14px] sm:text-[16px]">Subtotal</h3>
                <h3 className="text-[14px] sm:text-[16px] text-[#9F9F9F]">
                  Rs. 250,000.00
                </h3>
              </div>

              {/* Total */}
              <div className="flex justify-between">
                <h3 className="text-[14px] sm:text-[16px]">Total</h3>
                <h3 className="text-[14px] sm:text-[16px] text-[#9F9F9F]">
                  Rs. 250,000.00
                </h3>
              </div>

              {/* Checkout Button */}
              <div className="flex justify-center mt-4">
                <Link
                  href="/CheckOut"
                  className="flex items-center justify-center w-full sm:w-[200px] md:w-[250px] h-[40px] sm:h-[50px] md:h-[58px] rounded-lg text-sm text-black border-2 border-black hover:bg-black hover:text-white"
                >
                  Proceed to Checkout
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <AboveFooter />
    </>
  );
};

export default CartPage;