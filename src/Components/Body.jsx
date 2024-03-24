import React from "react";

const Body = () => {
  return (
    <div className="lg:flex lg:flex-row-reverse">
      <div className="flex lg:flex-1 lg:justify-end lg:mr-8 items-center justify-center my-10 relative">
        <img
          src="/Assets/Blue Shape.svg"
          alt="blueImg"
          className="-rotate-45 h-64 md:h-80 lg:h-[400px]"
        />
        <img
          src="/Assets/Pink Shape.svg"
          alt="pinkImg"
          className="absolute -rotate-[30deg] h-64 md:h-80 lg:h-[400px]"
        />
        <img
          src="/Assets/Purple Shape.svg"
          alt="purpleImg"
          className="absolute -rotate-[15deg] h-64 md:h-80 lg:h-[400px]"
        />
        <img
          src="/Assets/Hero Image (Model).png"
          alt="heroImg"
          className="absolute h-64 md:h-80 lg:h-[400px]"
        />
      </div>
      <div className="lg:flex-1 lg:mt-12">
        <div>
          <h1 className="font-playfair text-5xl md:text-6xl font-bold leading-tight xl:leading-snug">
            Host your website in less than 5 minutes.
          </h1>
          <p className="font-lato text-gray-500 my-4 md:text-lg">
            With Hosterr, get your website up and running in no less than 5
            minutes with the most competitive princing packages available
            online.
          </p>
        </div>
        <div>
          <form action="#" className="gap-4 flex flex-col md:flex-row">
            <input
              type="email"
              className="p-4 md:w-72 rounded-md placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:outline-orange-400 focus:ring-orange-400"
              placeholder="Enter e-mail address"
            />
            <button
              type="submit"
              className="font-lato bg-[#4977ea] hover:bg-blue-600 rounded-md p-4 text-white font-semibold"
            >
              Join Waitlist
            </button>
          </form>
          <div className="flex space-x-3 my-4">
            <img src="/Assets/Checkmark.svg" alt="checkmark" />
            <p className="font-lato text-gray-500 md:text-lg">
              No spam, ever. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
