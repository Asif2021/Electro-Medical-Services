import React from "react";
import {
  PhoneOutlined,
  FacebookOutlined,
  TwitterOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";


const TopNavbar = () => {
  return (
    <div>
      <div className="max-w-[900px] mr-auto hidden md:flex md:justify-items-center py-5 ml-36">
        <h1 className="mb-0">
          <span className="text-orange-600 pr-2">Special Offers!</span>
          Delivery all across Pakistan!
        </h1>
        <span className="pl-12">
          <button className="text-[18px] border-none overflow-hidden shadow-none">
          <PhoneOutlined className="mr-2" />
            (042) 12345678
          </button>
        </span>
        <div className="ml-auto w-24 flex justify-between">
          <FacebookOutlined
            type="message"
            style={{ fontSize: "25px" }}
            className="hover:text-[#1877F2]"
          />
          <TwitterOutlined
            type="message"
            style={{ fontSize: "25px" }}
            className="hover:text-[#1DA1F2]"
          />
          <LinkedinOutlined
            type="message"
            style={{ fontSize: "25px" }}
            className="hover:text-[#0077B5]"
          />
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;
