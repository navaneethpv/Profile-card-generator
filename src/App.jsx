import { useState } from "react";
import Cards from "./components/Cards";
import Form from "./components/Forms";
import ProfileImage from "./assets/Image.jpeg";
import Options from "./components/Options";

function App() {
  const [Profile, SetProfile] = useState({
    name: "John Doe",
    role: "WordPress Developer",
    title: "Founder & Editor",
    image: ProfileImage,
  });

  const UpdateData = (newData) => {
    SetProfile(newData);
  };

  return (
    <div className="flex justify-center bg-gray-200 w-screen h-screen items-center gap-13">
      <div className="flex  gap-10 bg-gray-300 rounded-lg p-10 shadow-2xl">
        <Form Profile={Profile} UpdateData={UpdateData} />
        <Cards Profile={Profile} />
      </div>
    </div>
  );
}

export default App;
