import React, { useState } from "react";

const Form = ({ Profile, UpdateData }) => {
  const [FormData, SetFormData] = useState(Profile);

  const handleChange = (e) => {
    const { name, value } = e.target;
    SetFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    console.log(e.target.files[0]);
    if (file) {
      const ImageUrl = URL.createObjectURL(file);
      SetFormData((prev) => ({
        ...prev,
        image: ImageUrl,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    UpdateData(FormData);
  };

  return (
    <div className="w-98 h-auto bg-white p-[39px] rounded-lg shadow-2xl">
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={FormData.name}
          onChange={handleChange}
          placeholder="Enter your name"
          className="border-2 p-2 rounded-lg border-gray-400"
          required
        />

        <label>Role</label>
        <input
          type="text"
          name="role"
          value={FormData.role}
          onChange={handleChange}
          className="border-2 p-2 rounded-lg border-gray-400"
          required
        />

        <label>Title</label>
        <input
          type="text"
          name="title"
          value={FormData.title}
          onChange={handleChange}
          className="border-2 p-2 rounded-lg border-gray-400"
          required
        />

        <label>Profile Image</label>
        <input
          type="file"
          name="image"
          onChange={handleImageChange}
          className="w-[230px] h-13 bg-blue-50 rounded-lg pl-2 pt-3 font-medium hover:cursor-pointer border-1 border-gray-300 shadow-md"
          accept="image/*"
        />

        <input
          type="submit"
          value="Update Profile"
          className="p-3 mt-10 rounded-lg font-bold bg-blue-400 text-white shadow-md hover:cursor-pointer hover:bg-blue-500 transition-all duration-250"
        />
      </form>
    </div>
  );
};

export default Form;
