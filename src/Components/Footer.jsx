import React from "react";

const Footer = () => {
  return (
    <div className="flex justify-between flex-col gap-5 md:flex-row">
      <ul className="flex space-x-4 font-lato">
        <li>
          <a className="hover:text-gray-600" href="#">Facebook</a>
        </li>
        <li>
          <a className="hover:text-gray-600" href="#">Instagram</a>
        </li>
        <li>
          <a className="hover:text-gray-600" href="#">Twitter</a>
        </li>
      </ul>
      <div className="flex space-x-4">
        <img src="/Assets/Help Avatar.svg" alt="avatar" />
        <div>
          <p className="font-playfair font-thin text-lg">Have any questions?</p>
          <a href="#" className="font-lato font-bold text-lg">
            Talk to a specialist
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
