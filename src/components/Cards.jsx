import React from "react";
import { CiMail } from "react-icons/ci";
import { FaTwitter } from "react-icons/fa";

const Cards = ({Profile}) => {
  return (
    <div className="w-[400px] h-[470px] bg-white rounded-lg shadow-2xl">
      <img
        className="size-[120px] rounded-full mx-auto mt-[60px] object-cover object-center border-2 border-cyan-400"
        src="https://images.pexels.com/photos/1784289/pexels-photo-1784289.jpeg?cs=srgb&dl=adorable-animal-baby-1784289.jpg&fm=jpg"
        alt="profile"
      />
      <p className="text-center mt-5 font-bold text-[21px]">{Profile.name}</p>
      <p className="text-center text-gray-400 mt-5 font-semibold text-[16px]">
        {Profile.role}
      </p>
      <div className="bg-blue-100 flex justify-around w-1/2 mx-auto px-[13px] py-1 mt-4 rounded-lg">
        <p className="text-blue-400 font-semibold text-[14px]">
          {Profile.title}
        </p>
      </div>
      <div className="grid grid-cols-2 mt-7 gap-1 max-w-[300px] mx-auto">
        <div className="flex bg-gray-100 w-[130px] mx-auto justify-center rounded-md p-3 gap-3 hover:cursor-pointer hover:bg-gray-200 transition-all duration-150 shadow-md">
          <CiMail className="my-auto" />
          <p>Email</p>
        </div>
        <div className="flex bg-gray-100 w-[130px] mx-auto justify-center rounded-md p-3 gap-3 hover:cursor-pointer hover:bg-gray-200 transition-all duration-150 shadow-md">
          <FaTwitter className="my-auto" />
          <p>Twitter</p>
        </div>
      </div>
    </div>
  );
};

export default Cards;
