import React from "react";

export default function Pricing() {
  return (
    <div
      className="flex flex-col justify-start items-center py-28  bg-white gap-y-4"
      id="pricing"
    >
      <h1 className="text-blue-600 text-xl font-bold" data-aos="fade-up">
        Pricing
      </h1>
      <h1 className="font-bold text-5xl text-center" data-aos="fade-up">
        Our Pricing Plans
      </h1>
      <h1
        className="text-xl w-[90%] sm:w-1/2 text-gray-400 text-center mt-3"
        data-aos="fade-up"
      >
        There are many variations of passages of Lorem Ipsum available but the
        majority have suffered alteration in some form.
      </h1>
      <br />
      <br />

      <div className="flex gap-y-16 flex-wrap justify-center items-center">
        <div
          data-aos="fade-up"
          data-aos-duraion="700"
          className="relative overflow-hidden w-[90%] sm:w-[380px] h-[511px] gap-y-1 text-center text-gray-500 font-semibold border border-blue-400 flex flex-col justify-start py-10 items-center"
        >
          <h1 className="text-base text-gray-800 font-bold">STARTING FROM</h1>
          <h1 className="text-2xl text-blue-700">$ 19.99/mo</h1>
          <br />
          <h1 className="flex flex-col justify-center items-center text-center gap-y-4">
            <h1>5 User</h1>
            <h1>All UI components</h1>
            <h1>Lifetime access</h1>
            <h1>Free updates</h1>
            <h1>Use on 1 (one) project</h1>
            <h1>4 Months support</h1>
          </h1>
          <br />
          <h1 className="text-blue-700 py-4 px-7 rounded-full border-blue-600 border">
            Purchase Now
          </h1>
          <div className=" absolute h-[100px] w-[100px] rounded-full bg-blue-700 left-[-50px] bottom-[-50px]"></div>
        </div>

        <div
          data-aos="fade-up"
          data-aos-duraion="500"
          className="w-[90%] sm:w-[380px] h-[570px] bg-gradient-to-b from-blue-700 to-blue-500  gap-y-1 text-center text-gray-100 font-semibold border border-blue-400 flex flex-col justify-start py-10 items-center"
        >
          <h1 className="text py-2 px-5 text-blue-700 bg-white rounded-full border-blue-600 border">
            Popular
          </h1>
          <h1 className="text-sm text-gray-100 font-bold mt-5">
            STARTING FROM
          </h1>
          <h1 className="text-3xl text-white">$ 19.99/mo</h1>
          <br />
          <h1 className="flex flex-col justify-center items-center text-center gap-y-4">
            <h1>5 User</h1>
            <h1>All UI components</h1>
            <h1>Lifetime access</h1>
            <h1>Free updates</h1>
            <h1>Use on 1 (one) project</h1>
            <h1>4 Months support</h1>
          </h1>
          <br />
          <br />
          <h1 className="text-white py-4 px-7 rounded-full border-white border">
            Purchase Now
          </h1>
        </div>

        <div
          data-aos="fade-up"
          data-aos-duraion="700"
          className="relative overflow-hidden w-[90%] sm:w-[380px] h-[511px] gap-y-1 text-center text-gray-500 font-semibold border border-blue-400 flex flex-col justify-start py-10 items-center"
        >
          <h1 className="text-base text-gray-800 font-bold">STARTING FROM</h1>
          <h1 className="text-2xl text-blue-700">$ 19.99/mo</h1>
          <br />
          <h1 className="flex flex-col justify-center items-center text-center gap-y-4">
            <h1>5 User</h1>
            <h1>All UI components</h1>
            <h1>Lifetime access</h1>
            <h1>Free updates</h1>
            <h1>Use on 1 (one) project</h1>
            <h1>4 Months support</h1>
          </h1>
          <br />
          <h1 className="text-blue-700 py-4 px-7 rounded-full border-blue-600 border">
            Purchase Now
          </h1>
          <div className=" absolute h-[100px] w-[100px] rounded-full bg-green-600 top-[-50px] right-[-50px]"></div>
        </div>
      </div>
    </div>
  );
}
