import React from "react";

const Form = () => {
  return (
    <div className="w-98 h-auto bg-white p-[39px] rounded-lg shadow-2xl">
      <form action="" className="flex flex-col gap-2">
        <label>Name</label>
        <input type="text" placeholder="Enter your name" className="border-2 p-2 rounded-lg border-gray-400" required/>
        <label>Role</label>
        <input type="text" placeholder="" className="border-2 p-2 rounded-lg border-gray-400" required/>
        <label>Title</label>
        <input type="text" placeholder="" className="border-2 p-2 rounded-lg border-gray-400" required/>
        <label>Image URL</label>
        <input type="file" className="w-[230px] h-13 bg-blue-50 rounded-lg pl-2 pt-3 font-medium hover:cursor-pointer border-1 border-gray-300 shadow-md " required accept="images/*"/>
        <input type="submit" value='Update Profile'className="p-3 mt-10 rounded-lg font-bold bg-blue-400 text-white shadow-md hover:cursor-pointer hover:bg-blue-500 transition-all duration-250"/>
      </form>
    </div>
  );
};

export default Form;
